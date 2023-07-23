import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const useCart = () => {
  const totalWrapperRef = useRef<HTMLDivElement>(null!);
  const cartWrapperRef = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    ScrollTrigger.create({
      trigger: totalWrapperRef.current,
      pin: true,
      start: "top 5%",
      end: "+=" + cartWrapperRef.current.offsetHeight / 2,
      scrub: true,
    });
  }, [totalWrapperRef, cartWrapperRef]);

  return { totalWrapperRef, cartWrapperRef };
};

export default useCart;
