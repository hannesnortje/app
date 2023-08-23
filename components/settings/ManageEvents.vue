<template>
  <v-table>
    <thead>
      <tr class="text-h5">
        <th class="text-left font-weight-black">Start</th>
        <th class="text-left font-weight-black">End</th>
        <th class="text-left font-weight-black">Description</th>
        <th class="text-left font-weight-black">Circle Color</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in events" :key="index">
        <td>{{ start(item.startYear, index) }}</td>
        <td>{{ end(item.endYear, index) }}</td>
        <td>{{ item.text }}</td>
        <td>{{ circle(item.circle) }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { timeline } from "~/settings/Timeline";
import { Circle } from "~/utilities/enums/rollout";

const events = ref();
onMounted(() => {
  events.value = timeline;
});

const start = (value: string, index: number) => {
  if (index === 0) {
    return "";
  } else {
    return value;
  }
};

const end = (value: string, index: number) => {
  if (!value) {
    return events.value[index].startYear;
  } else {
    return value;
  }
};

const circle = (value: Circle) => {
  const index = Object.values(Circle).indexOf(value);
  return Object.keys(Circle)[index];
};
</script>

<style scoped></style>
