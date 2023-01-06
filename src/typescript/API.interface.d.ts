export {};
declare global {
  interface IBasicDataAPI {
    data: IBasicDataItem[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
  }
  interface IBasicDataItem {
    id: number;
    color: string;
    name: string;
    pantone_value: string;
    year: number;
  }
}
