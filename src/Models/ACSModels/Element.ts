interface Type {
  id: string;
  text: string;
}

export default interface Element {
  id: string;
  text: string;
  abbreviation_code: string;
  type: Type;
}
