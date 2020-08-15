import express from 'express';
import ClassesController from './controller/ClassesController';
import ConnectionsController from './controller/ConnectionsController';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectiosControllers = new ConnectionsController();

routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections',connectiosControllers.create );
routes.get('/connections',connectiosControllers.index);


export default routes;