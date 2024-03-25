export default {
  init (context, payload) {
    return this.$axios
      .get('categories')
      .then((response) => {
        context.commit('setCategories', response.data.data)
        return response
      })
  }
}
