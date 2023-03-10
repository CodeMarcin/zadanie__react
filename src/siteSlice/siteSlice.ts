import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { getBasicDataAPI, getProductByIdAPI } from "../api/getDataApi";

import { SITE_SLICE_LABELS } from "./Labels";

export const fetchAndParseAllData = createAsyncThunk("getDataFromAPI", async ({ page, perPage }: { page: number; perPage?: number }) => {
  try {
    return (await getBasicDataAPI(page, perPage)).data;
  } catch (error) {
    throw error;
  }
});

export const fetchAndParseItemByID = createAsyncThunk("fetchAndParseItemByID", async (id: string) => {
  try {
    return (await getProductByIdAPI(id)).data;
  } catch (error) {
    throw error;
  }
});

const initialState: ISite = {
  site: {
    isLoadingData: false,
    message: null,
  },
  items: [],
  pagination: {
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
  },
};

export const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {
    setShowModalItemID: (state, action: PayloadAction<number>) => {
      state.site.showModalItemID = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAndParseAllData.pending, (state) => {
      state.site.isLoadingData = true;
    });
    builder.addCase(fetchAndParseAllData.fulfilled, (state, action) => {
      const { page, per_page, total, total_pages } = action.payload;
      return {
        site: { ...state.site, message: null, isLoadingData: false },
        items: [...action.payload.data],
        pagination: { page, per_page, total, total_pages },
      };
    });
    builder.addCase(fetchAndParseAllData.rejected, (state, action) => {
      return { ...state, site: { ...state.site, isLoadingData: false, message: action.error.message! } };
    });

    builder.addCase(fetchAndParseItemByID.pending, (state) => {
      state.site.isLoadingData = true;
    });
    builder.addCase(fetchAndParseItemByID.fulfilled, (state, action) => {
      return {
        ...state,
        site: { ...state.site, message: null, isLoadingData: false },
        pagination: { ...state.pagination, total_pages: 1 },
        items: [{ ...action.payload.data }],
      };
    });
    builder.addCase(fetchAndParseItemByID.rejected, (state, action) => {
      return { ...state, items: [], site: { ...state.site, isLoadingData: false, message: action.error.message ?? SITE_SLICE_LABELS.UNKNOWN_ERROR } };
    });
  },
});

export const { setShowModalItemID } = siteSlice.actions;

export default siteSlice.reducer;
