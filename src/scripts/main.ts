import "@progress/kendo-ui/esm/kendo.core";
import "../styles/main.scss";
import { getData } from "./data";
import "./kendo-ui-license.js";
import initUsersGrid from "./usersGrid";

const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

$(async () => {
  try {
    const dataSource = await getData(USERS_ENDPOINT);

    await import("@progress/kendo-ui/esm/kendo.grid");
    initUsersGrid(dataSource, 10);
  } catch (error) {
    $("<div>").text("Error fetching data").appendTo("#UsersGrid");
  }
});
