import {Router} from "express";
import { MessagesController } from "./controllers/MessagesController";
import {SettingsController} from "./controllers/SettingsController"
import { UsersController } from "./controllers/UsersController";


const routes = Router();

/**
 * TIPOS DE PARAMETROS
 * 
 * Routes Params => Parametros de rotas
 * ex: http://localhost:3333/settings/1
 * 
 * Query Parms => Filtros e buscas
 * ex: http://localhost:3333/settings/1?search=algumaCoisa
 * 
 * Body parms => {
 * 
 * }
**/


const settingsController = new SettingsController; 
const usersController = new UsersController;
const messagesController = new MessagesController;

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);
routes.post("/users", usersController.create); 
routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);
  


export {routes};