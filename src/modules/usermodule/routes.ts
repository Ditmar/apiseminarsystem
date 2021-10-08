import App from "../../App";
import { Express, Request, Response } from "express";
import UserController from "./controller/userController";
class Routes {
  private rootPath: string;
  private mainApp: App;
  private app: Express;
  private userController: UserController;
  constructor(rootPath: string, mainApp: App) {
    this.rootPath = rootPath;
    this.mainApp = mainApp;
    this.app = this.mainApp.getApp();

    this.userController = new UserController(mainApp.getClientMongoose());

    this.configureRoutes();
  }
  private configureRoutes() {
    this.app.route(`${this.rootPath}/`).post(this.userController.create);
    this.app.route(`${this.rootPath}/`).get(this.userController.get);
  }
}
export default Routes;
