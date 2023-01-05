export {};
declare global {
  interface IBasicDataAPI {
    data: { id: number; color: string; name: string; pantone_value: string; year: number }[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
  }
}
