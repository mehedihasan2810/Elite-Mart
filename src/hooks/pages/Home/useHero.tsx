import getDomElement from "@/utilities/getDomElement";
import getDomElements from "@/utilities/getDomElements";
import React from "react";

// TODO set these urls to hero product link href
// const mapHeroProductUrls = new Map([
//   ["kid-shoes", "#"],
//   ["kid-clothes", "#"],
//   ["women-clothes", "#"],
//   ["women-shoes", "#"],
//   ["men-shoes", "#"],
//   ["men-clothes", "#"],
//   ["featured-clothes", "#"],
//   ["featured-shoes", "#"],
// ]);

const mapHeroClipImgPosition = new Map();

const useHero = () => {
  const handleHeroGridPointerOver = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();

    // get dom elements
    const targetElement = e.target as HTMLElement;
    const relatedTargetElement = e.relatedTarget as HTMLElement;
    const { element: movingCursor } = getDomElement("[data-moving-element]");
    const { elements: heroKidsTitles } = getDomElements("[data-hero-title]");
    const heroGridChild = targetElement.closest(
      "[data-hero-grid-child]"
    ) as HTMLElement;
    const relatedHeroGridChild = relatedTargetElement?.closest(
      "[data-hero-grid-child]"
    ) as HTMLElement;

    //

    // show the moving cursor element
    movingCursor.style.opacity = "1";
    //

    if (heroGridChild) {
      const img = heroGridChild.querySelector(
        "img:nth-of-type(2)"
      ) as HTMLElement;

      //  console.log(heroGridChild.dataset.heroProductTitle)
      const imgDatasetValue = heroGridChild.dataset.heroProductTitle;
      const isExist = mapHeroClipImgPosition.has(imgDatasetValue);
      if (!isExist) {
        mapHeroClipImgPosition.set(imgDatasetValue, true);
      }

      // show clip img
      img.style.setProperty("clip-path", "circle(100% at 50% 50%)");
      img.style.setProperty("-webkit-clip-path", "circle(100% at 50% 50%)");
    }

    if (relatedHeroGridChild) {
      const img = relatedHeroGridChild.querySelector(
        "img:nth-of-type(2)"
      ) as HTMLElement;

      // set clip img hiding position
      const imgDatasetValue = relatedHeroGridChild.dataset.heroProductTitle;

      if (mapHeroClipImgPosition.get(imgDatasetValue)) {
        img.style.setProperty("clip-path", "circle(0% at 150% 150%)");
        img.style.setProperty("-webkit-clip-path", "circle(0% at 150% 150%)");

        mapHeroClipImgPosition.set(imgDatasetValue, false);
      } else {
        img.style.setProperty("clip-path", "circle(0% at -50% -50%)");
        img.style.setProperty("-webkit-clip-path", "circle(0% at -50% -50%)");
        mapHeroClipImgPosition.set(imgDatasetValue, true);
      }
      // ----------------
    }

    heroKidsTitles.forEach((elemnt) => {
      const element = elemnt as HTMLElement;
      // return if value is null
      if (!heroGridChild) {
        return;
      }

      // show hero product title
      if (
        heroGridChild.dataset.heroProductTitle ===
        element.dataset.heroProductTitle
      ) {
        element.style.opacity = "1";
      }

      // return if value is null
      if (!relatedHeroGridChild) {
        return;
      }

      // hide hero product title
      if (
        relatedHeroGridChild.dataset.heroProductTitle ===
        element.dataset.heroProductTitle
      ) {
        element.style.opacity = "0";
      }
    });
  };

  // hero grid pointer leave
  const handleHeroGridPointerLeave = () => {
    const { elements: heroKidsTitles } = getDomElements("[data-hero-title]");
    const { element: movingCursor } = getDomElement("[data-moving-element]");
    const { elements: clipImgs } = getDomElements(
      "[data-hero-grid-element] > div > img:nth-of-type(2)"
    );

    // hide moving cursor
    movingCursor.style.opacity = "0";
    //

    // hide all hero product title
    heroKidsTitles.forEach((elemnt) => {
      const element = elemnt as HTMLElement;
      element.style.opacity = "0";
    });
    //

    clipImgs.forEach((elemnt) => {
      const imgElement = elemnt as HTMLImageElement;
      // set clip img hiding position
      if (mapHeroClipImgPosition.get(imgElement.alt)) {
        imgElement.style.setProperty("clip-path", "circle(0% at 150% 150%)");
        imgElement.style.setProperty(
          "-webkit-clip-path",
          "circle(0% at 150% 150%)"
        );
        mapHeroClipImgPosition.set(imgElement.alt, false);
      } else {
        imgElement.style.setProperty("clip-path", "circle(0% at -50% -50%)");
        imgElement.style.setProperty(
          "-webkit-clip-path",
          "circle(0% at -50% -50%)"
        );
        mapHeroClipImgPosition.set(imgElement.alt, true);
      }
      // --------
    });
  };

  return {
    handleHeroGridPointerOver,
    handleHeroGridPointerLeave,
  };
};

export default useHero;
