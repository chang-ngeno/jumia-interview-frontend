export * from './phoneRestController.service';
import { PhoneRestControllerService } from './phoneRestController.service';
export * from './testRestController.service';
import { TestRestControllerService } from './testRestController.service';
export const APIS = [PhoneRestControllerService, TestRestControllerService];
