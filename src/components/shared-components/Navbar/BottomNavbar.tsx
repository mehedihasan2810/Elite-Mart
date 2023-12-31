"use client";
import React from "react";
import styles from "@/scss/shared-component-styles/Navbar/BottomNavbar.module.scss";
import { submenuData } from "./submenu-data";

import SubMenu from "./SubMenu";
import Search from "./Search";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { visibleSidebar } from "@/redux/createSlices/createSlice";
import { useIsomorphicLayoutEffect } from "@/hooks/global/useIsomorphicLayoutEffect";

const BottomNavbar = () => {
  const dispatch = useDispatch();

  // Function to handle closing submenu on pointer leave
  const handleCloseSubmenu = (event: React.PointerEvent<HTMLButtonElement>) => {
    // close the submenu and hover style on pointer leave from target nav
    const targetElement = event.currentTarget as HTMLButtonElement;
    const svgElement = targetElement.querySelector("svg") as SVGSVGElement;
    const { left, right, top } = targetElement.getBoundingClientRect();
    const { clientX, clientY } = event;
    if (clientX < left || clientX > right || clientY < top) {
      const submenu_element = document.querySelector(
        `[data-submenu='${targetElement.dataset.navLink}']`
      ) as HTMLElement;
      targetElement.style.color = "#000";
      targetElement.style.transform = "scale(1)";
      svgElement.style.transform = "rotate(0deg)";
      // submenu_element.style.zIndex = "-2";
      submenu_element.style.setProperty("clip-path", "circle(0% at 50% 0%)");
      submenu_element.style.setProperty(
        "-webkit-clip-path",
        "circle(0% at 50% 0%)"
      );
    }
    //
  };

  // Function to handle showing submenu on pointer enter
  const handleShowSubmenu = (e: React.PointerEvent<HTMLButtonElement>) => {
    // Show the target submenu, apply hover styles to the target nav, and remove hover styles from others
    const targetElement = e.currentTarget as HTMLButtonElement;
    const svgElement = targetElement.querySelector("svg") as SVGSVGElement;
    const submenu_elements = document.querySelectorAll("[data-submenu]");
    const nav_link_elements = document.querySelectorAll("[data-nav-link]");

    // remove the hover style from all except target
    nav_link_elements.forEach((element) => {
      const navElement = element as HTMLButtonElement;
      const svgElement = navElement.querySelector("svg") as SVGSVGElement;
      if (targetElement.dataset.navLink !== navElement.dataset.navLink) {
        navElement.style.color = "#000";
        navElement.style.transform = "scale(1)";
        svgElement.style.transform = "rotate(0deg)";
      }
    });
    //

    // give hover style to target nav
    targetElement.style.color = "#64748b";
    targetElement.style.transform = "scale(0.95)";
    svgElement.style.transform = "rotate(90deg)";
    //

    // show the target submenu
    submenu_elements.forEach((menuElement) => {
      const submenuElement = menuElement as HTMLElement;

      if (targetElement.dataset.navLink === submenuElement.dataset.submenu) {
        submenuElement.style.zIndex = "99";
        submenuElement.style.setProperty("clip-path", "circle(100% at 50% 0%)");
        submenuElement.style.setProperty(
          "-webkit-clip-path",
          "circle(100% at 50% 0%)"
        );
      } else {
        //  close non-target submenu
        // submenuElement.style.zIndex = "-2";
        submenuElement.style.setProperty("clip-path", "circle(0% at 50% 0%)");
        submenuElement.style.setProperty(
          "-webkit-clip-path",
          "circle(0% at 50% 0%)"
        );
      }
    });
  };

  const handleSubmenuLeave = (e: React.PointerEvent<HTMLElement>) => {
    const targetElement = e.currentTarget as HTMLElement;
    const navElements = document.querySelectorAll("[data-nav-link]");

    // remove the nav hover style onPointerLeave from target submenu
    navElements.forEach((element) => {
      const btnElement = element as HTMLButtonElement;
      const svgElement = btnElement.querySelector("svg") as SVGSVGElement;
      btnElement.style.color = "#000";
      btnElement.style.transform = "scale(1)";
      svgElement.style.transform = "rotate(0deg)";
    });

    // close the target submenu
    // targetElement.style.zIndex = "-2";
    targetElement.style.setProperty("clip-path", "circle(0% at 50% 0%)");
    targetElement.style.setProperty(
      "-webkit-clip-path",
      "circle(0% at 50% 0%)"
    );
  };

  // Effect hook to set submenu coordinates on scroll
  useIsomorphicLayoutEffect(() => {
    const nav_link_elements = document.querySelectorAll("[data-nav-link]");
    const submenu_elements = document.querySelectorAll("[data-submenu]");

    // calculate the submenu position n place them right
    function setSubmenuCoords() {
      nav_link_elements.forEach((btn) => {
        const btnElement = btn as HTMLButtonElement;

        submenu_elements.forEach((menuElement) => {
          const submenuElement = menuElement as HTMLElement;

          if (btnElement.dataset.navLink === submenuElement.dataset.submenu) {
            const { left, right, bottom } = btnElement.getBoundingClientRect();

            submenuElement.style.left = `${(left + right) / 2}px`;
            submenuElement.style.top = `${bottom}px`;
          }
        });
      });
    }

    setSubmenuCoords();

    // Event listener for scroll to update submenu coordinates
    window.addEventListener("scroll", setSubmenuCoords);

    return () => removeEventListener("scroll", setSubmenuCoords);
  }, []);

  return (
    <>
      {/* Main navigation container */}
      <nav className={styles.bottom_navbar_container}>
        {/* Left section with logo and main navigation links */}
        <div>
          {/* Logo */}
          <div className={styles.navbar_logo}>
            <Link href="/">Elite Mart</Link>
          </div>

          {/* Main navigation links */}
          <ul role="list" data-main-nav>
            {/* Map submenuData to create navigation buttons */}
            {submenuData.map((item) => {
              const { pageId, page } = item;

              return (
                <li key={pageId} data-classname={item.page.toLowerCase()}>
                  {/* Navigation button */}
                  <button
                    data-nav-link={item.page.toLowerCase()}
                    onPointerEnter={handleShowSubmenu}
                    onPointerLeave={handleCloseSubmenu}
                    data-testid="main-nav-link"
                  >
                    <span>{page}</span>
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
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right section with search, cart, favorite buttons, and hamburger menu */}
        <div>
          <div className={styles.search_wrapper}>
            <Search />
            {/* Search button */}
            <button aria-label="Search products">
              <svg
                aria-hidden={true}
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>

          {/* Cart button */}
          <Link className={styles.btn_cart} href="/cart" aria-label="View cart">
            <svg
              aria-hidden={true}
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </Link>

          {/* Favorite button */}
          <button aria-label="View favorite" className={styles.btn_favorite}>
            <svg
              aria-hidden={true}
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>

        {/* Hamburger menu button */}
        <button
          onClick={() => {
            dispatch(visibleSidebar());
          }}
          className={styles.btn_hamburger}
          aria-label="Toggle Sidebar"
        >
          <svg
            aria-hidden={true}
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>

      {/* Map submenuData to create SubMenu components */}
      {submenuData.map((item) => (
        <SubMenu
          key={item.pageId}
          className={styles[item.page.toLowerCase()]}
          datasetSubmenu={item.page.toLowerCase()}
          data={item.data}
          onSubmenuLeave={handleSubmenuLeave}
        />
      ))}
    </>
  );
};

export default BottomNavbar;
