import Element from "./Element";

export default interface ElementType {
  created_at: string;
  elements: Element[];
  id: string;
  text: string;
  updated_at: string;
}
