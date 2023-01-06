import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { getBasicDataAPI } from "../api/getDataApi";

export const getDataFromAPI = createAsyncThunk("getDataFromAPI", async ({ page, perPage }: { page: number; perPage?: number }) => {
  try {
    return (await getBasicDataAPI(page, perPage)).data;
  } catch (error) {
    throw error;
  }
});

const iniitalDataState: IStore = {
  fromApi: {
    data: [{ name: "", color: "", id: 0, pantone_value: "", year: 0 }],
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
  },
  isLoading: false,
  errorText: "",
};

const dataSlice = createSlice({
  name: "dataFromApi",
  initialState: iniitalDataState,
  reducers: {
    getNewData: (state, action: PayloadAction<IStore>) => {
      return { ...state };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataFromAPI.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getDataFromAPI.fulfilled, (state, action) => {
      return { ...state, isLoading: false, fromApi: { ...action.payload } };
    });
    builder.addCase(getDataFromAPI.rejected, (state, action) => {
      return { ...state, isLoading: false, errorText: action.error.message };
    });
  },
});

export const { getNewData } = dataSlice.actions;

export const getData = (state: RootState) => state.dataSlice;

export default dataSlice.reducer;
