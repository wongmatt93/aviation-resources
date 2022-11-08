import Element from "./Element";
import Resource from "./Resource";

export default interface Task {
  id: string;
  name: string;
  letter: string;
  objective: string;
  elements: Element[];
  resources: Resource[];
}
