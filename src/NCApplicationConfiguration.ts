import { ServiceLocator } from "./di/ServiceLocator";

export interface NCApplicationConfiguration {
  config(locator: ServiceLocator): void;
}
