class MouseHelper {
  addTargetTrigger(isTarget) {
    return isTarget ? "mouseTarget" : "";
  }

  shouldTarget(element, target) {
    const isHasTarget = target?.classList.contains("mouseTarget");

    if (isHasTarget) {
      if (element) {
        element.classList.add("mouse--target");
      }
    } else {
      if (element) {
        element.classList.remove("mouse--target");
      }
    }
  }
}

const mouseHelper = new MouseHelper();

export default mouseHelper;
