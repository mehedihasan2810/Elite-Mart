const getDomElement = (selector: string) => {
  const element = document.querySelector(selector) as HTMLElement;

  return { element };
};

export default getDomElement;
