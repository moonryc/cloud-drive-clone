import { route } from "static-route-paths"

export const routes = route({
  root:route(),
  dashBoard: route("dashboard"),
  loginsignup: route("loginSignup")
})
