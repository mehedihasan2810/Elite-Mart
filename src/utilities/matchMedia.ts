const matchMedia = (mediaSize: string) => {
  let isMatchMedia = false;
  const mediaQuery = window.matchMedia(mediaSize);
  isMatchMedia = mediaQuery.matches;

  const handleChange = (event: MediaQueryListEvent) => {
    isMatchMedia = event.matches;
  };

  mediaQuery.addEventListener("change", handleChange);

  return { isMatchMedia };
};

export default matchMedia;
