import getDomElement from "@/utilities/getDomElement";
import getDomElements from "@/utilities/getDomElements";
import { useLayoutEffect } from "react";

const useHome = () => {
  useLayoutEffect(() => {
    const { element: movingCursor } = getDomElement("[data-moving-element]");
    const { elements: heroKidsTitles } = getDomElements("[data-hero-title]");

    const handlePointerMove = (event: PointerEvent) => {
      //set moving cursor element's position
      const width = movingCursor.offsetWidth;
      const height = movingCursor.offsetHeight;
      movingCursor.style.transform = `translate3d(${
        event.clientX - width / 2
      }px, ${event.clientY - height / 2}px, 0) rotate(-20deg)`;
      //

      // set hero titles moving position
      heroKidsTitles.forEach((elemnt) => {
        const element = elemnt as HTMLElement;
        const titleWidth = element.offsetWidth;
        const titleHeight = element.offsetHeight;
        const x = event.clientX - titleWidth / 2;
        const y = event.clientY - (height / 2 + titleHeight);

        element.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(-20deg)`;
      });
      //
    };

    document.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);
};

export default useHome;
