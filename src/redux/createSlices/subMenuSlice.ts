import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface SubMenuState {
  isSubMenuOpen: boolean;
  subMenuTop: number;
  page: string;
  pageId: null | string;
}

interface OpenSubMenuAction {
  page: string;
  navBottom: number;
  isSubMenuOpen: boolean;
}

const initialState: SubMenuState = {
  isSubMenuOpen: false,
  subMenuTop: 98,
  page: "",
  pageId: null,
};

export const subMenuSlice = createSlice({
  name: "subMenu",
  initialState,
  reducers: {
    openSubMenu: (state, action: PayloadAction<OpenSubMenuAction>) => {
      state.subMenuTop = action.payload.navBottom;
      state.isSubMenuOpen = action.payload.isSubMenuOpen;
    },
    closeSubmenu: (state) => {
      state.isSubMenuOpen = false;
    },

    setPageId: (state, action: PayloadAction<string | null>) => {
      state.pageId = action.payload;
    },
  },
});

export const { openSubMenu, closeSubmenu, setPageId } = subMenuSlice.actions;

export default subMenuSlice.reducer;
