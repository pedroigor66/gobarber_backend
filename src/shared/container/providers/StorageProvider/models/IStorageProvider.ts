export default interface IStorageProvider {
  saveFile(file: string): Promise<string>; // string = path to file
  deleteFile(file: string): Promise<void>;
}
