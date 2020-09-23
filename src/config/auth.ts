export default {
  jwt: {
    secret: process.env.APP_SECRET || 'passtest',
    expiresIn: '1d',
  },
};
