<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        text
        color="secondary"
      >
        {{ $i18n.locale }}
        <v-icon right>mdi-menu-down</v-icon>
      </v-btn>
    </template>

    <v-list dense>
      <v-list-item
        v-for="locale in availableLocales"
        :key="locale.code"
        dense
        @click="switchLocale(locale.code)"
      >
        <v-list-item-title>{{ locale.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }
  },
  methods: {
    switchLocale(locale) {
      this.$i18n.setLocale(locale);
    }
  }
};
</script>

<style scoped>
</style>
