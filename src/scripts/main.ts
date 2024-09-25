import "@progress/kendo-ui/esm/kendo.core";
import "../styles/main.scss";
import fetchData from "./fetchData";
import "./kendo-ui-license.js";
import initUsersGrid from "./usersGrid";

const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

$(async () => {
  try {
    const dataSource = await fetchData(USERS_ENDPOINT);
    initUsersGrid(dataSource, 10);
  } catch (error) {
    $("<div>").text("Error fetching data").appendTo("#UsersGrid");
  }
});
