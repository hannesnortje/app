<template>
  <v-card flat>
    <v-app-bar app dense fixed hide-on-scroll>
      <v-toolbar>
        <v-btn to="/">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <v-toolbar-title>Settings</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
    </v-app-bar>
  </v-card>
  <ManageEvents></ManageEvents>
</template>

<script setup lang="ts">
import ManageEvents from "../../components/settings/ManageEvents.vue";
</script>

<style scoped></style>
