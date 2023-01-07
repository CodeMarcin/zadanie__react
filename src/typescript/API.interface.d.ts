export {};
declare global {
  interface IBasicDataAPI {
    data: IItem[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
  }
  interface ISingleItemAPI {
    data: IItem;
  }
}
