import React, { useLayoutEffect } from "react";
import styles from "@/scss/pages-styles/Home/Favorites.module.scss";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
const Favorites = () => {
  useLayoutEffect(() => {
    //  animate category header with gsap
    const tl = gsap.timeline({ paused: true });
    tl.to("#favorites-header-mask", { clipPath: "inset(0 0 0 100%)" });

    ScrollTrigger.create({
      animation: tl,
      trigger: "#favorites-header-mask",
      start: "bottom bottom",
      end: "top 5%",
      scrub: true,
    });
    //
  }, []);

  return (
    <div className={styles.favorites_container}>
      <div className={styles.favorites_headers_container}>
        <div className={styles.favorites_headers}>
          <div className={styles.favorites_headers_wrapper}>
            <h2>Most Favorites</h2>
            <h2
              id="favorites-header-mask"
              className={styles.favorites_header_mask}
            >
              Most Favorites
            </h2>
          </div>
          <p>from last month</p>
          <button>
            <Link href="/products">Get Yours</Link>
          </button>
        </div>
      </div>

      <div className={styles.favorites_wrapper}>
        <div className={styles.favorites_grid}>
          <div className={styles.item1}>
            <Image
              src="https://i.ibb.co/myq7V9y/favorite3.jpg"
              alt="a group of model having fun wearing our most favorite clothes of this month"
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFCZ0FFQU1CSWdBQ0VRRURFUUgveEFBdEFBQUNBd0VBQUFBQUFBQUFBQUFBQUFBQUJRTUVCZ2NCQVFFQkFBQUFBQUFBQUFBQUFBQUFBQUVBQXYvYUFBd0RBUUFDRUFNUUFBQUFsZGM5MkdaRGJCUC94QUFpRUFBQ0FnSUNBZ0lEQUFBQUFBQUFBQUFCQWdNRUJSRUFFZ1lpRkVFalVXSC8yZ0FJQVFFQUFUOEFiSlY3R1R0VUpiNGFLV0tXTlpXWTlFZGdGWUVrNk90Y3kyTnAycTE2bkRjVnBwTFFrSUd0UnVzWTBIL2g1YzhkK0Zia0w2bHBQTXplaGZ0MmMrcmN5TTBseXdLeXU4Y2pQR3ltRmRmajBBeVMvZmY5Y3kyUWdqd1VBcDJkNUNlV09PUURRTWF1UFZUdlk1NHpib1pDZTZrMDVoc3NvUUpJZCs2UHM5VDk2UFAveEFBYUVRQURBUUFEQUFBQUFBQUFBQUFBQUFBQkFoRUFFaUV4LzlvQUNBRUNBUUUvQU9pVlRuQVZ1S0EyK3kzZi84UUFHeEVCQUFJQ0F3QUFBQUFBQUFBQUFBQUFBUUlSQUFNVE1VSC8yZ0FJQVFNQkFUOEFiQjI4WW8wVVBtR3lVYXJwa0ZaLy85az0nIC8+CiAgICA8L3N2Zz4KICA="
            />
          </div>
          <div className={styles.item2}>
            <Image
              src="https://i.ibb.co/Xs1BR7g/favorite1.jpg"
              alt="a group of model having fun wearing our most favorite clothes of this month"
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFCY0FFQU1CSWdBQ0VRRURFUUgveEFBcUFBQUNBd0FBQUFBQUFBQUFBQUFBQUFBQUJRSURCQUVCQUFBQUFBQUFBQUFBQUFBQUFBQUFCUC9hQUF3REFRQUNFQU1RQUFBQVp5MUtBdVoxZzR2L3hBQWZFQUFDQXdBREFBTUJBQUFBQUFBQUFBQUJBZ01FRVFBRkVoTXpRbEgvMmdBSUFRRUFBVDhBcTBraVQ2V1pRb0xGUnZuVDVISktzRnFLVm8wOUlqbEdmOGh4K2VIc3FxZGRKQktNK1o0OWZmT0JUdWNudUdwMUloam0xV3UyR3pTM0liUFhYb0Fzc0laYy9uREQxZEdLU1JJdFk2ZmJEV3c4LzhRQUdCRUFBd0VCQUFBQUFBQUFBQUFBQUFBQUFSRWhBZ0QvMmdBSUFRSUJBVDhBYUtzeSswTXlEdi9FQUJvUkFBSUNBd0FBQUFBQUFBQUFBQUFBQUFFUkFBSVNVV0wvMmdBSUFRTUJBVDhBeGRYMG9DZG1mLy9aJyAvPgogICAgPC9zdmc+CiAg"
            />
          </div>
          <div className={styles.item3}>
            <Image
              src="https://i.ibb.co/3Y5CkX7/favorite2.jpg"
              alt="a group of model having fun wearing our most favorite clothes of this month"
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFCZ0FFQU1CSWdBQ0VRRURFUUgveEFBcEFBQURBUUFBQUFBQUFBQUFBQUFBQUFBQUJBVUhBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUUvOW9BREFNQkFBSVFBeEFBQUFDdTFIaG1Wb1N3TVA4QS84UUFKaEFBQVFRQUJRTUZBUUFBQUFBQUFBQUFBUUlEQkJFQUJSSWhVUVlVSWhNeE1rSnhnZi9hQUFnQkFRQUJQd0NVKzNscVdtMjQvcU9LRjF2UUhKckJmZ3lYKzEyRHhZRHVnL0ljZy9sNHo4U25aRVl4VVcvMjYxTlh0NXRuMi90NDZhbXVDVE1tekVKRHEyZ1VyMkpLVmJVbXZyNFl6R0kxbVRjVXNPSlF0QlhTN3JTRnBva2M0ZzlPWkpreVZMWkMxcTBKVGJxeXV0SEFPUC9FQUJvUkFBSUNBd0FBQUFBQUFBQUFBQUFBQUFFQ0FCRVNNWEgvMmdBSUFRSUJBVDhBeG9XU09SbFhkVC8veEFBWkVRQUNBd0VBQUFBQUFBQUFBQUFBQUFBQkVRQUNNWEgvMmdBSUFRTUJBVDhBYnlwN0FUam4vOWs9JyAvPgogICAgPC9zdmc+CiAg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
