interface ResourceDetails {
  id: string;
  documentName: string;
  documentNumber: string;
  thumbNailURL: string;
  urlString: string;
}

export default interface Resource {
  resource: ResourceDetails;
}
