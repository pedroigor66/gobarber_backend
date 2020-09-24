import { Request, Response, NextFunction } from 'express';
import redis from 'redis';
import { RateLimiterRedis, RateLimiterMemory } from 'rate-limiter-flexible';
import AppError from '@shared/errors/AppError';

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASS || undefined,
});

const rateLimiterMemory = new RateLimiterMemory({
  points: 25,
  duration: 5,
});

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'ratelimit',
  points: 5, // 5 requests per IP
  duration: 1, // every 1 second
  inmemoryBlockOnConsumed: 6, // if >= 6 requests per duration x seconds
  inmemoryBlockDuration: 10, // then ip is blocked for 10 seconds
  insuranceLimiter: rateLimiterMemory,
});

export default async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  try {
    await limiter.consume(request.ip);

    return next();
  } catch (err) {
    throw new AppError('Too many requests', 429);
  }
}
