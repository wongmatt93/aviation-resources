export default interface Resource {
  id: string;
  documentName: string;
  documentNumber: string;
  indexed_into_elasticsearch: string;
  s3_key: string;
  thumbNailURL: string;
  thumbnail_s3_key: string;
  updated_at: string;
  urlString: string;
}
