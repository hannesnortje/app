<template>
  <v-btn size="x-large" elevation="2" @click="reverseTimeline">Reverse Timeline</v-btn>
  <v-table>
    <thead>
      <tr class="text-h5">
        <th class="text-left font-weight-black">Start</th>
        <th class="text-left font-weight-black">End</th>
        <th class="text-left font-weight-black">Heading</th>
        <th class="text-left font-weight-black">Description</th>
        <th class="text-left font-weight-black">Circle Color</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in events" :key="index">
        <td>{{ start(item.startYear, index) }}</td>
        <td>{{ end(item.endYear, index) }}</td>
        <td>{{ item.heading }}</td>
        <td>{{ item.description }}</td>
        <td>{{ circle(item.circle) }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { timeline } from "~/settings/Timeline";
import { Circle } from "~/utilities/enums/rollout";
import { Timeline } from "~/interfaces/timeline";

const events = ref();
onMounted(() => {
  events.value = timeline;
});

const reverseTimeline = () => {
  events.value.forEach((event: Timeline) => (event.show = false));
  events.value.reverse();
  //rollOpen(-1);
};

const start = (value: string, index: number) => {
  if (index === 0 && events.value[0].startYear < events.value[1].startYear) {
    return "";
  } else if (
    index === events.value.length - 1 &&
    events.value[0].startYear > events.value[1].startYear
  ) {
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
