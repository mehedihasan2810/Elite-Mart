function throttle(func: Function, ms: number) {
  let isThrottled = false;
  let savedArgs: any[] | null = null;
  let savedThis: any;

  function wrapper(...args: any[]) {
    if (isThrottled) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    isThrottled = true;
    func.apply(this, args);

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

export default throttle;
