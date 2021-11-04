import App from "../../App";
import { Express, Request, Response } from "express";
import UserController from "./controller/userController";
class Routes {
  private rootPath: string;
  private mainApp: App;
  private app: Express;
  private userController: UserController;
  constructor(rootPath: string, mainApp: App) {
    //user
    this.rootPath = rootPath;
    this.mainApp = mainApp;
    this.app = this.mainApp.getApp();

    this.userController = new UserController(mainApp);

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
    this.app
      .route(`${this.rootPath}/:id`)
      .get((request: Request, response: Response) => {
        this.userController.getId(request, response);
      });
    this.app
      .route(`${this.rootPath}/:id`)
      .put((request: Request, response: Response) => {
        this.userController.update(request, response);
      });
    this.app
      .route(`${this.rootPath}/:id`)
      .delete((request: Request, response: Response) => {
        this.userController.delete(request, response);
      });

    this.app
      .route(`${this.rootPath}/upload/:id`)
      .put((request: Request, response: Response) => {
        this.userController.upload(request, response);
      });

    this.app
      .route(`${this.rootPath}/avatar/:id`)
      .get((request: Request, response: Response) => {
        this.userController.showavatar(request, response);
      });
  }
}
export default Routes;
