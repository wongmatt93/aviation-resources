import axios from "axios";

export const getURLfromS3Key = async (s3key: string): Promise<any> => {
  return (
    await axios.post(
      "https://api-development.aviationresources.io/presignedGET",
      {
        key: s3key,
        bucket: "ar-resources-development",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  ).data;
};
