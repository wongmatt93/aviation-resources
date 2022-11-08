import Task from "./Task";

export default interface AOOOutline {
  id: string;
  name: string;
  numeral: string;
  order: number;
  tasks: Task[];
}
