export default {
  init (context, payload) {
    return this.$axios
      .get('category-list')
      .then((response) => {
        context.commit('setCategories', response.data.data)
        return response
      })
  }
}
