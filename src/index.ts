import App from "./http/Express";

App.listen(3031, () => {
  console.info(new Date().toLocaleTimeString(), ": Server is Running");
});
