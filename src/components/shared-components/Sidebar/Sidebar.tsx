"use client";
import React, { useState } from "react";
import styles from "@/scss/shared-component-styles/Sidebar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  hideSidebar,
  hideSubSidebar,
  visibleSubSidebar,
} from "@/redux/createSlices/createSlice";
import Link from "next/link";

const sidebarMenu: string[] = ["Featured", "Men", "Women", "Kids", "Sale"];

const Sidebar = () => {
  const [subSidebarHeader, setSubSidebarheader] = useState<string>("");
  const dispatch = useDispatch();
  const { isSidebarVisible, isSubSidebarVisible } = useSelector(
    (state: RootState) => state.eliteMart
  );
  return (
    <aside
      onClick={(e) => {
        if (e.currentTarget !== e.target) {
          return;
        }
        dispatch(hideSidebar());
      }}
      style={{ visibility: `${isSidebarVisible ? "visible" : "hidden"}` }}
      className={styles.sidebar_bg}
    >
      <div
        style={{
          transform: `translate3d(${isSidebarVisible ? "0%" : "100%"}, 0, 0)`,
        }}
        className={styles.sidebar_container}
      >
        <div className={styles.hide_sidebar_btn_wrapper}>
          <button onClick={() => dispatch(hideSidebar())}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className={styles.sidebar_menu}>
          <ul role="list" className={styles.sidebar_main_nav}>
            {sidebarMenu.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    dispatch(visibleSubSidebar());
                    setSubSidebarheader(item);
                  }}
                >
                  <span>{item}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <div
            style={{
              transform: `translate3d(${
                isSubSidebarVisible ? "0%" : "100%"
              }, 0, 0)`,
            }}
            className={styles.sub_sidebar_menu}
          >
            <button onClick={() => dispatch(hideSubSidebar())}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <span>All</span>
            </button>
            <div className={styles.sub_sidebar_menu_wrapper}>
              <div>{subSidebarHeader}</div>
              <ul role="list">
                <li>
                  <Link
                    onClick={() => dispatch(hideSidebar())}
                    href="/products"
                  >
                    Clothing
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => dispatch(hideSidebar())}
                    href="/products"
                  >
                    Shoes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
