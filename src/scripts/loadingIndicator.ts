export default (element: JQuery<HTMLElement>) => {
  element.kendoLoader({
    size: "large",
    type: "infinite-spinner",
  });
  return element.data("kendoLoader");
};
