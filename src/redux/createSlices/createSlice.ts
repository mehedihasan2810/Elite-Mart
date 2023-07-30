import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  isSidebarVisible: boolean;
  isSubSidebarVisible: boolean;
  subMenuTop: number;
  page: string;
  pageId: null | string;
}

// interface OpenSubMenuAction {
//   page: string;
//   navBottom: number;
//   isSubMenuOpen: boolean;
// }

const initialState: InitialState = {
  isSidebarVisible: false,
  isSubSidebarVisible: false,
  subMenuTop: 98,
  page: "",
  pageId: null,
};

export const eliteMartSlice = createSlice({
  name: "subMenu",
  initialState,
  reducers: {
    visibleSidebar: (state) => {
      state.isSidebarVisible = true;
    },
    hideSidebar: (state) => {
      state.isSidebarVisible = false;
      state.isSubSidebarVisible = false;
    },
    visibleSubSidebar: (state) => {
      state.isSubSidebarVisible = true;
    },
    hideSubSidebar: (state) => {
      state.isSubSidebarVisible = false;
    },

    setPageId: (state, action: PayloadAction<string | null>) => {
      state.pageId = action.payload;
    },
  },
});

export const {
  visibleSidebar,
  hideSidebar,
  visibleSubSidebar,
  hideSubSidebar,
  setPageId,
} = eliteMartSlice.actions;

export default eliteMartSlice.reducer;
