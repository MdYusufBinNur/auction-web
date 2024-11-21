export default function ({ app }) {
  if (app.$auth.loggedIn) {
    app.$chatUpdater.start();
  } else {
    app.$chatUpdater.stop();
  }
}
