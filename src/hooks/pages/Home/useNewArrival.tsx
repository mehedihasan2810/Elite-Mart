import getDomElement from "@/utilities/getDomElement";
import getDomElements from "@/utilities/getDomElements";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mapArrivalCarousel = new Map([
  ["arrival-img-1", true],
  ["arrival-img-2", false],
  ["arrival-img-3", false],
  ["arrival-img-4", false],
  ["arrival-img-5", false],
]);

const useNewArrival = () => {
  const timerId = useRef<unknown>(null);

  const handleSmallImgClick = (event: React.MouseEvent<HTMLImageElement>) => {
    clearTimeout(timerId.current as number);
    const targetImgDataValue = event.currentTarget.dataset.arrivalImg;
    const { elements: arrivalImgs } = getDomElements(
      "[data-arrival-img-wrapper] > img"
    );
    const { elements: smallImgParents } = getDomElements(
      `[data-arrival-small-img-wrapper] > [data-arrival-img-parent]`
    );

    smallImgParents.forEach((element) => {
      const smallImgParent = element as HTMLImageElement;
      const { element: smallImg } = getDomElement(
        `[data-arrival-small-img-wrapper] [data-arrival-img='${smallImgParent.dataset.arrivalImgParent}']`
      );
      if (targetImgDataValue === smallImg.dataset.arrivalImg) {
        smallImgParent.style.transform = "scale(1.05)";
        smallImg.style.filter = "drop-shadow(0 0 12px gray)";
      } else {
        smallImgParent.style.transform = "scale(1)";
        smallImg.style.filter = "none";
      }
    });

    arrivalImgs.forEach((element) => {
      const imgElement = element as HTMLImageElement;

      const imgElementDataValue = imgElement.dataset.arrivalImg;

      if (targetImgDataValue === imgElementDataValue) {
        //    show the next img
        imgElement.style.transition =
          "clip-path 300ms ease-out, -webkit-clip-path 300ms ease-out";
        imgElement.style.setProperty("clip-path", "circle(100% at 50% 50%)");
        imgElement.style.setProperty(
          "-webkit-clip-path",
          "circle(100% at 50% 50%)"
        );
        imgElement.style.zIndex = "auto";
        mapArrivalCarousel.set(imgElement.dataset.arrivalImg as string, true);
        //  mapArrivalCarousel.set(imgDatasetValue as string, false);
      } else {
        // hide the active img
        imgElement.style.transition =
          "clip-path 0ms ease-out 300ms, -webkit-clip-path 0ms ease-out 300ms";
        imgElement.style.setProperty("clip-path", "circle(0% at 50% 50%)");
        imgElement.style.setProperty(
          "-webkit-clip-path",
          "circle(0% at 50% 50%)"
        );
        imgElement.style.zIndex = "-1";
        mapArrivalCarousel.set(imgElementDataValue as string, false);
      }
    });
  };

  useLayoutEffect(() => {
    //  animate clip header with gsap
    const tl = gsap.timeline({ paused: true });
    tl.to("#arrival-header-mask", { clipPath: "inset(0 0 0 100%)" });

    ScrollTrigger.create({
      animation: tl,
      trigger: "#arrival-header-mask",
      start: "bottom bottom",
      end: "top 5%",
      scrub: true,
    });
    //

    const { elements: arrivalImgs } = getDomElements(
      "[data-arrival-img-wrapper] > img"
    );

    const arrivalCarousel = () => {
      let shouldReturn = false;

      arrivalImgs.forEach((element, index) => {
        /*
         dont let forEach go down there by returning after hiding and
         showing our active img and next img
        */
        if (shouldReturn) return;

        const activeImg = element as HTMLImageElement;
        const imgDatasetValue: unknown = activeImg.dataset.arrivalImg;

        // check the active img
        if (mapArrivalCarousel.get(imgDatasetValue as string)) {
          //  check if the active img is last item in the array
          if (index === arrivalImgs.length - 1) {
            // todo -------------
            const { element: activeSmallImgParent } = getDomElement(
              `[data-arrival-small-img-wrapper] > [data-arrival-img-parent='${activeImg.dataset.arrivalImg}']`
            );
            activeSmallImgParent.style.transform = "scale(1)";

            const activeSmallImg =
              activeSmallImgParent.firstElementChild as HTMLImageElement;
            activeSmallImg.style.filter = "none";
            // ------------------

            // hide the active img
            const visibleImg = arrivalImgs[0] as HTMLImageElement;
            activeImg.style.transition =
              "clip-path 0ms ease-out 500ms, -webkit-clip-path 0ms ease-out 500ms";
            activeImg.style.setProperty("clip-path", "circle(0% at 50% 50%)");
            activeImg.style.setProperty(
              "-webkit-clip-path",
              "circle(0% at 50% 50%)"
            );
            activeImg.style.zIndex = "-1";

            // todo -------------
            const { element: visibleSmallImgParent } = getDomElement(
              `[data-arrival-small-img-wrapper] [data-arrival-img-parent='${visibleImg.dataset.arrivalImg}']`
            );
            visibleSmallImgParent.style.transform = "scale(1.05)";

            const visibleSmallImg =
              visibleSmallImgParent.firstElementChild as HTMLImageElement;
            visibleSmallImg.style.filter = "drop-shadow(0 0 12px gray)";
            // -----------------

            //    show the next img
            visibleImg.style.transition =
              "clip-path 500ms ease-out, -webkit-clip-path 500ms ease-out";
            visibleImg.style.setProperty(
              "clip-path",
              "circle(100% at 50% 50%)"
            );
            visibleImg.style.setProperty(
              "-webkit-clip-path",
              "circle(100% at 50% 50%)"
            );
            visibleImg.style.zIndex = "auto";
            mapArrivalCarousel.set(
              visibleImg.dataset.arrivalImg as string,
              true
            );
            mapArrivalCarousel.set(imgDatasetValue as string, false);
          } else {
            // get the next image
            const visibleImg = arrivalImgs[index + 1] as HTMLImageElement;

            /*
             make the next image active and the current one hidden
            in the map
            */
            mapArrivalCarousel.set(imgDatasetValue as string, false);
            mapArrivalCarousel.set(
              visibleImg.dataset.arrivalImg as string,
              true
            );

            /*
             return the forEach next call after hiding and showing our
             active img and next img 
             */
            shouldReturn = true;

            // todo -------------
            const { element: activeSmallImgParent } = getDomElement(
              `[data-arrival-small-img-wrapper] > [data-arrival-img-parent='${activeImg.dataset.arrivalImg}']`
            );
            activeSmallImgParent.style.transform = "scale(1)";

            const activeSmallImg =
              activeSmallImgParent.firstElementChild as HTMLImageElement;
            activeSmallImg.style.filter = "none";

            // -----------------

            //   hide the active img
            activeImg.style.transition =
              "clip-path 0ms ease-out 500ms, -webkit-clip-path 0ms ease-out 500ms";
            activeImg.style.setProperty("clip-path", "circle(0% at 50% 50%)");
            activeImg.style.setProperty(
              "-webkit-clip-path",
              "circle(0% at 50% 50%)"
            );
            activeImg.style.zIndex = "-1";

            // todo -------------

            const { element: visibleSmallImgParent } = getDomElement(
              `[data-arrival-small-img-wrapper] > [data-arrival-img-parent='${visibleImg.dataset.arrivalImg}']`
            );
            visibleSmallImgParent.style.transform = "scale(1.05)";

            const visibleSmallImg =
              visibleSmallImgParent.firstElementChild as HTMLImageElement;
            visibleSmallImg.style.filter = "drop-shadow(0 0 12px gray)";

            // -----------------

            //  show the next img
            visibleImg.style.transition =
              "clip-path 500ms ease-out, -webkit-clip-path 500ms ease-out";
            visibleImg.style.setProperty(
              "clip-path",
              "circle(100% at 50% 50%)"
            );
            visibleImg.style.setProperty(
              "-webkit-clip-path",
              "circle(100% at 50% 50%)"
            );
            visibleImg.style.zIndex = "auto";
          }
        }
      });
    };

    //   schedule time with setTimeout
    timerId.current = setTimeout(function tick() {
      arrivalCarousel();
      timerId.current = setTimeout(tick, 4000);
    }, 3000);

    return () => {
      clearTimeout(timerId.current as number);
    };
  }, []);

  return { handleSmallImgClick };
};

export default useNewArrival;
