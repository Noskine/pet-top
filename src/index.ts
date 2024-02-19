import App from "./http/Express";

App.listen(8000, () => {
  console.info(new Date().toLocaleTimeString(), ": Server is Running");
});
