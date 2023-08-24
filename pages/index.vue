<template>
  <v-card flat rounded="0">
    <v-app-bar app dense fixed hide-on-scroll>
      <v-toolbar density="comfortable">
        <v-toolbar-title>CV of Johannes A. Nortjé</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in menuItems"
              :key="index"
              @click="handleMenuItemClick(index)"
            >
              <v-list-item-title>{{ item.choice }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <!-- <v-btn icon to="/settings">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn> -->
      </v-toolbar>
    </v-app-bar>
    <v-row>
      <v-col> </v-col>
      <v-col>
        <Rollout />
      </v-col>
      <v-col> </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { MainMenu } from "../utilities/enums/rollout";

const menuItems = ref([
  { choice: MainMenu.aboutMe, action: "/more/about" },
  { choice: MainMenu.settings, action: "/settings" },
]);

const handleMenuItemClick = (index: number) => {
  // Handle the selected menu item's action here
  switch (menuItems.value[index].choice) {
    case MainMenu.aboutMe:
      navigateTo(menuItems.value[index].action);
      break;
    case MainMenu.settings:
      navigateTo(menuItems.value[index].action);
      break;
    default:
      break;
  }
};
</script>
