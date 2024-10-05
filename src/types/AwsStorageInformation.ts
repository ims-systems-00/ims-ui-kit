export interface AwsStorageInformation {
  Name: string;
  key: string;
  Key: string;
  Bucket: string;
  modified?: {
    by: string | null;
    on: Date;
  };
}
