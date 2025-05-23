import renderMap from "./userDetailMap";
import { User } from "./types/User.interface";
import { userDetailTemplate } from "./userDetailTemplate";

export default async (data: User[], pageSize: number = 10) => {
  await import("@progress/kendo-ui/esm/kendo.grid");
  $("#UsersGrid").kendoGrid({
    dataSource: new kendo.data.DataSource({
      data: data,
      pageSize: pageSize,
    }),
    columns: [
      { field: "name", title: "Name" },
      { field: "email", title: "Email" },
      { field: "phone", title: "Phone" },
      { field: "website", title: "Website" },
    ],
    detailTemplate: userDetailTemplate,
    detailInit: renderMap,
    pageable: true,
    sortable: true,
    filterable: true,
    scrollable: true,
  });
};
