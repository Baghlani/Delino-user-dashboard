export default (dataSource: kendo.data.DataSource) => {
  $("#UsersGrid").kendoGrid({
    dataSource: dataSource,
    columns: [
      { field: "name", title: "Name" },
      { field: "email", title: "Email" },
      { field: "phone", title: "Phone" },
      { field: "website", title: "Website" },
    ],
    pageable: true,
    sortable: true,
    filterable: true,
    scrollable: true,
  });
};
