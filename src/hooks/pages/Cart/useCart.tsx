import { useIsomorphicLayoutEffect } from "@/hooks/global/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const useCart = () => {
  const totalWrapperRef = useRef<HTMLDivElement>(null!);
  const cartWrapperRef = useRef<HTMLDivElement>(null!);
  useIsomorphicLayoutEffect(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: totalWrapperRef.current,
        pin: true,
        start: "top 5%",
        end: "+=" + cartWrapperRef.current.offsetHeight / 2,
        scrub: true,
      });
    });

    return () => {
      mm.revert();
    };
  }, [totalWrapperRef, cartWrapperRef]);

  return { totalWrapperRef, cartWrapperRef };
};

export default useCart;
