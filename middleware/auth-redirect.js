// middleware/auth-redirect.js
export default function ({ app, route, redirect }) {
  if (!app.$auth.loggedIn) {
    // Save the attempted route in the session storage or a cookie
    // sessionStorage.setItem('redirect', route.fullPath);
    // Redirect to login page
    app.$auth.logout().then(r => redirect('/auth/login'))
    // return redirect('/auth/login');
  }
}
