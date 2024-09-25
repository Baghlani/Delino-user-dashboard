export const getData = async (url: string, pageSize: number = 5) => {
  const data = await new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      method: "GET",
      success: resolve,
      error: reject,
    });
  });

  return new kendo.data.DataSource({
    data: data,
    pageSize: pageSize,
  });
};
