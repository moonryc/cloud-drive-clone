import { route } from "static-route-paths"

export const routes = route({
  root:route(),
  dashBoard: route("home", {
    sharedWithOthers: route('sharedWithOthers'),
    sharedWithMe: route('sharedWithMe'),
    }),
  loginsignup: route("loginSignup")
})
