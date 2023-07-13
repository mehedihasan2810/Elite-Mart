const getDomElements = (selector: string) => {
  const elements = document.querySelectorAll(selector);

  return { elements };
};

export default getDomElements;
