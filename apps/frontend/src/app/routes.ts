import { route } from 'static-route-paths';

export const routes = route({
  root: route(),
  home: route('home', {
    sharedWithOthers: route('sharedWithOthers'),
    sharedWithMe: route('sharedWithMe'),
  }),
  loginsignup: route('loginSignup'),
});
