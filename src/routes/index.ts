import { Router } from 'express';
import appointmentsRouter from './appointments.routes'

const routes = Router();

routes.use('/appointments', appointmentsRouter);
// .use works for any route, and is redirected to appointmentsRouter
export default routes;
