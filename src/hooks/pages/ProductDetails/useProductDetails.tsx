import React, { useEffect, useRef } from "react";

const useProductDetails = () => {
  const displayImgRef = useRef<HTMLImageElement[]>([]);
  const displayOptionImgRef = useRef<HTMLImageElement[]>([]);
  const pushDisplayImgRef = (el: HTMLImageElement) =>
    displayImgRef.current.push(el!);
  const pushOptionImgRef = (el: HTMLImageElement) =>
    displayOptionImgRef.current.push(el!);

  const handleOptionImg = (e: React.PointerEvent<HTMLImageElement>) => {
    // show the display img onPointerOver otherwise hide it
    displayImgRef.current.forEach((el) => {
      if (e.currentTarget.dataset.displayOptionImg === el.dataset.displayImg) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    });

    // highlight the active display img by setting border
    displayOptionImgRef.current.forEach((el) => {
      if (
        e.currentTarget.dataset.displayOptionImg === el.dataset.displayOptionImg
      ) {
        el.style.borderColor = "#000";
      } else {
        el.style.borderColor = "transparent";
      }
    });
  };

  useEffect(() => {
    // show the first img as display img on initial render
    displayImgRef.current.forEach((el, index) => {
      if (index !== 0) {
        el.style.display = "none";
      }
    });

    // highlight the first img as active img on initial render
    displayOptionImgRef.current.forEach((el, index) => {
      if (index === 0) {
        el.style.borderColor = "#000";
      }
    });
  }, [displayImgRef, displayOptionImgRef]);

  return { handleOptionImg, pushDisplayImgRef, pushOptionImgRef };
};

export default useProductDetails;
