import throttle from "@/decorators/throttle";
import getDomElement from "@/utilities/getDomElement";
import getDomElements from "@/utilities/getDomElements";
import matchMedia from "@/utilities/matchMedia";
import React, { MouseEvent, useLayoutEffect, useState } from "react";

type SliderDataType = "trending" | "best-sellers" | "best-rated";
const useCategory = () => {
  const [sliderData, setSliderData] = useState<SliderDataType>("trending");

  useLayoutEffect(() => {
    // headerBtns handler
    const { elements: headerBtns } = getDomElements(
      "[data-header-btns] > button"
    );
    const handleHeaderBtn = (event: MouseEvent<HTMLButtonElement>) => {
      const datasetValue: unknown = event.currentTarget.dataset.headerBtn;

      // set the data value to toggle slider data
      setSliderData(datasetValue as SliderDataType);

      const targetClipElement = event.currentTarget.querySelector(
        "span:last-child"
      ) as HTMLSpanElement;
      //  set initial header style
      event.currentTarget.style.transform = "scale(1.1)";
      targetClipElement.style.clipPath = "circle(100% at 50% 50%)";

      headerBtns.forEach((btn) => {
        const btnElement = btn as HTMLButtonElement;
        const clipElement = btnElement.querySelector(
          "span:last-child"
        ) as HTMLSpanElement;
        if (
          btnElement.dataset.headerBtn !== event.currentTarget.dataset.headerBtn
        ) {
          btnElement.style.transform = "scale(1)";
          clipElement.style.clipPath = "circle(0% at 50% 50%)";
        }
      });
    };

    // add click event listener to headerBtns

    const handleHeaderBtnWrapper = (event: unknown) => {
      handleHeaderBtn(event as React.MouseEvent<HTMLButtonElement>);
    };

    headerBtns.forEach((btn) => {
      const btnElement = btn as HTMLButtonElement;
      btnElement.addEventListener("click", handleHeaderBtnWrapper);
    });

    // check the media breakpoints
    const { isMatchMedia: isMobile } = matchMedia("(max-width: 767px)");
    const { isMatchMedia: isTablet } = matchMedia("(min-width: 768px)");
    const { isMatchMedia: isLaptop } = matchMedia("(min-width: 1024px)");
    const { isMatchMedia: isLargeDesktop } = matchMedia("(min-width: 1600px)");

    // get dom elements
    const { element: categorySliderWrapper } = getDomElement(
      "[data-category-slider-wrapper]"
    );
    const { element: categorySlider } = getDomElement("[data-category-slider]");
    const { elements: categorySlides } = getDomElements(
      "[data-category-slide]"
    );

    function setInitialTranslateX() {
      const categorySlide = categorySlides[0] as HTMLDivElement;

      // calculating the initial translateX value of the slider
      const initialTranslateX =
        categorySlide.offsetWidth * (categorySlides.length / 3) -
        categorySlide.offsetWidth / 2;
      categorySlider.style.transitionDuration = "0ms";
      categorySlider.style.transform = `translate3d(-${initialTranslateX}px, 0, 0)`;
      //
    }

    //  specify slide width and height according to breakpoints
    categorySlides.forEach((element) => {
      const categorySlide = element as HTMLDivElement;

      if (isMobile) {
        console.log("foo " + isMobile);

        categorySlide.style.width = `${categorySliderWrapper.offsetWidth}px`;
        categorySlide.style.height = `${categorySliderWrapper.offsetWidth}px`;

        const initialTranslateX =
          categorySlide.offsetWidth * (categorySlides.length / 3);
        // categorySlider.style.transitionDuration = "0ms";
        categorySlider.style.transform = `translate3d(-${initialTranslateX}px, 0, 0)`;
      }

      if (isTablet) {
        categorySlide.style.width = `${
          categorySliderWrapper.offsetWidth / 2
        }px`;
        categorySlide.style.height = `${
          categorySliderWrapper.offsetWidth / 2
        }px`;

        setInitialTranslateX();
      }
      if (isLaptop) {
        categorySlide.style.width = `${
          categorySliderWrapper.offsetWidth / 3
        }px`;
        categorySlide.style.height = `${
          categorySliderWrapper.offsetWidth / 3
        }px`;

        setInitialTranslateX();
      }
      if (isLargeDesktop) {
        categorySlide.style.width = `${
          categorySliderWrapper.offsetWidth / 4
        }px`;
        categorySlide.style.height = `${
          categorySliderWrapper.offsetWidth / 4
        }px`;

        setInitialTranslateX();
      }
    });

    // slider_______
    const slidePrevBtn = document.querySelector(
      "[data-slide-btn='prev']"
    ) as HTMLButtonElement;
    const slideNextBtn = document.querySelector(
      "[data-slide-btn='next']"
    ) as HTMLButtonElement;

    // slider btn click handler
    function handleSlideBtnClick(event: React.MouseEvent<HTMLButtonElement>) {
      const currentTargetElement = (event.target as HTMLElement).closest(
        "[data-slide-btn]"
      ) as HTMLButtonElement;
      const targetDataValue = currentTargetElement.dataset.slideBtn;
      const categorySlide = categorySlides[0] as HTMLDivElement;
      const slideWidth = categorySlide.offsetWidth;

      // get the computed transform value
      const computedStyles = window.getComputedStyle(categorySlider);
      const transformValue = computedStyles.transform;
      let translateX = +transformValue
        .replace(/matrix\(/, "")
        .replace(/\)/, "")
        .split(", ")[4];

      // calculate the initial translateX position
      let initialTranslateX;
      if (isMobile) {
        initialTranslateX = slideWidth * (categorySlides.length / 3);
      } else {
        initialTranslateX =
          slideWidth * (categorySlides.length / 3) - slideWidth / 2;
      }

      if (targetDataValue === "prev") {
        //  reset the slider position
        if (-initialTranslateX === translateX) {
          if (isMobile) {
            translateX = slideWidth * ((categorySlides.length / 3) * 2);
          } else {
            translateX =
              slideWidth * ((categorySlides.length / 3) * 2) - slideWidth / 2;
          }

          categorySlider.style.transitionDuration = "0ms";
          categorySlider.style.transform = `translate3d(${-translateX}px, 0, 0)`;

          // get the translateX computed value
          const computedStyles2 = window.getComputedStyle(categorySlider);
          const transformValue2 = computedStyles2.transform;
          const translateX2 = +transformValue2
            .replace(/matrix\(/, "")
            .replace(/\)/, "")
            .split(", ")[4];

          // set the transition and prev slider position after reseting the slider position
          categorySlider.style.transitionDuration = "300ms";
          categorySlider.style.transform = `translate3d(${
            translateX2 + slideWidth
          }px, 0, 0)`;
        } else {
          // set the transition and prev slider position
          categorySlider.style.transitionDuration = "300ms";
          categorySlider.style.transform = `translate3d(${
            translateX + slideWidth
          }px, 0, 0)`;
        }
      }

      if (targetDataValue === "next") {
        let nextInitialX;
        if (isMobile) {
          nextInitialX = initialTranslateX * 2;
        } else {
          nextInitialX = initialTranslateX * 2 + slideWidth / 2;
        }

        // reset the slider position
        if (-nextInitialX === translateX) {
          if (isMobile) {
            translateX = slideWidth * (categorySlides.length / 3);
          } else {
            translateX =
              slideWidth * (categorySlides.length / 3) - slideWidth / 2;
          }

          categorySlider.style.transitionDuration = "0ms";
          categorySlider.style.transform = `translate3d(${-translateX}px, 0, 0)`;

          // get the translateX computed value
          const computedStyles3 = window.getComputedStyle(categorySlider);
          const transformValue3 = computedStyles3.transform;
          const translateX3 = +transformValue3
            .replace(/matrix\(/, "")
            .replace(/\)/, "")
            .split(", ")[4];

          // set the transition and next slider position after reseting the slider position
          categorySlider.style.transitionDuration = "300ms";
          categorySlider.style.transform = `translate3d(${
            translateX3 - slideWidth
          }px, 0, 0)`;

          // categorySlider.style.transitionDuration = '300ms';
        } else {
          categorySlider.style.transitionDuration = "300ms";
          categorySlider.style.transform = `translate3d(${
            translateX - slideWidth
          }px, 0, 0)`;
          // categorySlider.style.transitionDuration = '0ms';
        }
      }
    }

    // throttle handleSlideBtnClick for 500 ms
    let throttleHandleSlideBtnClick = throttle(handleSlideBtnClick, 500);

    function handleSlideBtnClickWrapper(event: unknown) {
      throttleHandleSlideBtnClick.call(
        this,
        event as React.MouseEvent<HTMLButtonElement>
      );
    }

    [slidePrevBtn, slideNextBtn].forEach((btn) => {
      btn.addEventListener("click", handleSlideBtnClickWrapper);
    });

    // useEffect cleanup
    return () => {
      headerBtns.forEach((btn) => {
        btn.removeEventListener("click", handleHeaderBtnWrapper);
      });

      [slidePrevBtn, slideNextBtn].forEach((btn) => {
        btn.removeEventListener("click", handleSlideBtnClickWrapper);
      });
    };
  }, [sliderData]);

  return sliderData;
};

export default useCategory;
