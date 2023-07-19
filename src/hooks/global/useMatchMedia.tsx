// import { useLayoutEffect, useState } from "react";

const useMatchMedia = (mediaSize: string) => {
//   const [isMatchMedia, setIsMatchMedia] = useState(false);

//   useLayoutEffect(() => {

let isMatchMedia = false;
    const mediaQuery = window.matchMedia(mediaSize);
    // setIsMatchMedia(mediaQuery.matches);
     isMatchMedia = mediaQuery.matches;

    const handleChange = (event: MediaQueryListEvent) => {
    //   setIsMatchMedia(event.matches);
      isMatchMedia = event.matches;
    };

    mediaQuery.addEventListener("change", handleChange);

    // Clean up the event listener when the component unmounts
    // return () => {
    //   mediaQuery.removeEventListener("change", handleChange);
    // };
//   }, [mediaSize]);

//   return { isMatchMedia };

return {isMatchMedia}
};

export default useMatchMedia;
