export default function ({ app, store, $axios }) {
  // $axios.interceptors.request.use(function (config) {
  //   if (store.getters['auth/auth']) {
  //     config.headers.Authorization = `${store.getters['auth/auth']}`
  //   }
  //   return config
  // })

  //   $axios.interceptors.response.use(
  //     response => response,
  //     (error) => {
  //       const isPublicPage = process.env.publicRoutes.includes(app.router.currentRoute.fullPath)
  //       const unauthorized = !isPublicPage && error.response && error.response.status === 401
  //       if (unauthorized) {
  //         store.dispatch('auth/logout')
  //         return
  //       }
  //       return Promise.reject(error)
  //     }
  //   )
}
