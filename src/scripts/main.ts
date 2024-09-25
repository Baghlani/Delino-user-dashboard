import "@progress/kendo-ui/esm/kendo.grid";
import "../styles/main.scss";
import { getData } from "./data";
import "./kendo-ui-license.js";
import initUsersGrid from "./usersGrid";

const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

$(async () => {
  const dataSource = await getData(USERS_ENDPOINT, 10);
  initUsersGrid(dataSource);
});
