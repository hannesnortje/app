<template>
  <v-card flat rounded="0">
    <v-app-bar app dense fixed hide-on-scroll>
      <v-toolbar density="comfortable">
        <v-toolbar-title>CV of Johannes A. Nortjé</v-toolbar-title>
        <v-btn icon to="/settings">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
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

<script setup lang="ts"></script>
