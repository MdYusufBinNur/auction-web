export default {
  init (context, payload) {
    return this.$axios
      .get('get-unread')
      .then((response) => {
        context.commit('setUserChats', response.data.data)
        return response
      })
  }
}
