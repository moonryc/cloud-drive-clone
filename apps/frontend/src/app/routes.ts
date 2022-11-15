import { route } from "static-route-paths"

export const routes = route({
  root:route(),
  dashBoard: route("dashboard", {
    sharedWithOthers: route('sharedWithOthers'),
    sharedWithMe: route('sharedWithMe'),
    }),
  loginsignup: route("loginSignup")
})
