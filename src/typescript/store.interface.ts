export {};
declare global {
  interface IStore {
    fromApi: IBasicDataAPI;
    isLoading: boolean;
    errorText: string | undefined;
  }
}
