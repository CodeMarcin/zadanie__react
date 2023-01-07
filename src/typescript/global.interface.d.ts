export {};
declare global {
  interface ISite {
    site: ISiteSettings;
    items: IItem[] | [];
    pagination: IPagination;
  }
  interface IItem {
    id: number;
    color: string;
    name: string;
    pantone_value: string;
    year: number;
  }
  interface IPagination {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
  }
  interface ISiteSettings {
    isLoadingData: boolean;
    showModalItemID?: number;
    message: string | null;
  }
}
