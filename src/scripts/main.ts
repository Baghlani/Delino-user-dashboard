import "@progress/kendo-ui/esm/kendo.core";
import "@progress/kendo-ui/esm/kendo.loader";
import "../styles/main.scss";
import fetchData from "./fetchData";
import "./kendo-ui-license.js";
import initLoadingIndicator from "./loadingIndicator";
import initUsersGrid from "./usersGrid";

const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

$(async () => {
  const loadingIndicator = initLoadingIndicator($("#loading"));
  loadingIndicator!.show();
  try {
    const dataSource = await fetchData(USERS_ENDPOINT);
    loadingIndicator!.hide();
    initUsersGrid(dataSource, 10);
  } catch (error) {
    loadingIndicator!.hide();
    $("<div>").text("An error occurred while loading the data.").appendTo("#UsersGrid");
  }
});
