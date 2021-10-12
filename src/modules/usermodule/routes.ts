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
    this.app
      .route(`${this.rootPath}/`)
      .post((request: Request, response: Response) => {
        this.userController.create(request, response);
      });
    this.app
      .route(`${this.rootPath}/`)
      .get((request: Request, response: Response) => {
        this.userController.get(request, response);
      });
  }
}
export default Routes;
