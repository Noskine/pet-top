import express from "express";
import { join } from "node:path";

const App = express();

import cookieSession from "cookie-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import Keygrip from "keygrip";

import { config } from "dotenv";
config();

App.use(express.static(join(__dirname, "..", "..", "public")));

App.use(
  cookieSession({
    name: "pettopsthore_session",
    keys: new Keygrip([<string>process.env.SECRET_KEY], "SHA384", "base64"),
  })
);

App.use(cookieParser());

App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());

App.set("views", join(__dirname, "..", "app", "views"));
App.set("view engine", "pug");
App.use(express.static(join(__dirname, "..", "..", "public")));

import Routes from "../routes/routes";
import AuthRoutes from "../routes/auth/authRoutest";
import RequireAuth from "./middlewares/RequireAuth";
import { routerApi } from "../routes/api/RouterApi";

App.use("/auth", AuthRoutes);
App.use("/api", routerApi);
App.use("/", [RequireAuth], Routes);

App.get("/auth/get", (req, res) => {
  //@ts-ignore
  const b = req.session!.UserId;
  const a = res.locals.employee;
  res.send({
    a: a,
    b: b,
  });
});

export default App;
