<template>
  <div>
    <VApp>
      <VMain>
        <v-card flat>
          <v-app-bar app dense fixed hide-on-scroll>
            <v-toolbar>
              <v-btn to="/">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>

              <v-toolbar-title>{{ pageName }}</v-toolbar-title>

              <v-spacer></v-spacer>
            </v-toolbar>
          </v-app-bar>
        </v-card>
        <slot />
      </VMain>
    </VApp>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const pageName = ref();

switch (route.path) {
  case "/more/about":
    pageName.value = "About Me";
    break;
  case "/more/education":
    pageName.value = "Education";
    break;
  case "/settings":
    pageName.value = "Settings";
    break;

  default:
    break;
}
</script>
