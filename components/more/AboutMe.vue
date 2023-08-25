<template>
  <v-sheet elevation="3">
    <v-card>
      <v-card-title class="text-h6">Main Information</v-card-title>
      <v-card-text class="text-body-1">
        <p><strong>Name:</strong> {{ myInfo.name }}</p>
        <p>
          <strong>Birthday:</strong>
          {{ `${myInfo.birthday.day}.${myInfo.birthday.month}.${myInfo.birthday.year}` }}
        </p>
        <p><strong>Marital Status:</strong> {{ myInfo.marital_status }}</p>
        <p><strong>Number of Children:</strong> {{ myInfo.number_of_children }}</p>
        <p><strong>Telephone:</strong> {{ myInfo.telephone }}</p>
        <p><strong>Email:</strong> {{ myInfo.email }}</p>
        <p><strong>Address:</strong> {{ myInfo.address }}</p>
        <p><strong>Handicap Level:</strong> {{ myInfo.handicap_level }}</p>
      </v-card-text>
    </v-card>
  </v-sheet>
  <v-bottom-navigation absolute="true">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"
          ><v-icon>mdi-alarm-bell</v-icon>

          <span>Imprint</span>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Imprint</v-card-title>
        <v-card-text>This <strong>About Me</strong> page is my imprint.</v-card-text>
      </v-card>
    </v-menu>
  </v-bottom-navigation>
</template>

<script setup lang="ts">
import { aboutMe } from "~/settings/AboutMe";

interface AboutMe {
  name: string;
  birthday: {
    day: number;
    month: number;
    year: number;
  };
  marital_status: string;
  number_of_children: number;
  telephone: string;
  email: string;
  handicap_Level: number;
}

const myInfo = reactive(aboutMe);
</script>

<style scoped></style>
