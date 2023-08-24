<template>
  <div class="d-flex flex-column justified-center">
    <v-img src="/my_picture.jpg" @click="rollOpen(-1)"></v-img>
    <p class="font-weight-light text-center" v-if="!timelineEvents.at(0)?.show">
      (click picture to roll open first event)
    </p>
    <p class="font-weight-light text-center" v-if="timelineEvents.at(0)?.show">
      <v-btn size="x-large" elevation="2" @click="reverseTimeline">Reverse Timeline</v-btn>
    </p>

    <div v-for="(item, index) in timelineEvents" :key="index">
      <ExpandActivity
        v-if="item.show"
        :index="index"
        :circle="item.circle"
        :heading="item.heading"
        :description="item.description"
        :startYear="item.startYear"
        :endYear="item.endYear"
        @next="rollOpen($event)"
        :id="`event_${index}`"
      ></ExpandActivity>
      <p
        class="font-weight-light text-center"
        v-if="
          timelineEvents.at(index)?.show &&
          !timelineEvents.at(index + 1)?.show &&
          index < timelineEvents.length - 1
        "
      >
        (Click on the <span class="font-weight-black">Circle</span> to roll open the Next Event, or
        on the <span class="font-weight-black">Text</span> for an Elaboration)
      </p>
      <p class="font-weight-light text-center" v-if="index === timelineEvents.length - 1">
        (Click on the <span class="font-weight-black">Text</span> for an Elaboration)
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { timeline } from "@/settings/Timeline";
import { Timeline } from "~/interfaces/timeline";

const timelineEvents: Ref<Timeline[]> = ref([]);

onMounted(() => {
  timelineEvents.value = timeline;
});

let lastIndex = 0;

const rollOpen = (value: number) => {
  if (value < timelineEvents.value.length - 1) {
    timelineEvents.value[value + 1].show = true;
    lastIndex = value;
  }
};

onUpdated(() => {
  const num = ++lastIndex;
  const eventID = `event_${num}`;
  document.getElementById(eventID)?.scrollIntoView({ behavior: "smooth", block: "start" });
});

const reverseTimeline = () => {
  timelineEvents.value.forEach((event) => (event.show = false));
  timelineEvents.value.reverse();
  rollOpen(-1);
};
</script>

<style scoped></style>
