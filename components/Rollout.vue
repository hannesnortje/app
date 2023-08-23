<template>
  <div class="d-flex flex-column justified-center">
    <v-img src="/my_picture.jpg" @click="rollOpen(-1)"></v-img>
    <p class="font-weight-light text-center" v-if="!timelineEvents.at(0)?.show">
      (click picture to roll open)
    </p>

    <div v-for="(item, index) in timelineEvents" :key="index">
      <ExpandActivity
        v-if="item.show"
        :index="index"
        :circle="item.circle"
        :text="item.text"
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
        (click on event to roll open the next event)
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Circle } from "@/utilities/enums/rollout";
import { timeline } from "@/settings/Timeline";

interface Timeline {
  show: boolean;
  circle: Circle;
  text: string;
  startYear: number;
  endYear?: number;
}

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
  const val = `event_${num}`;
  document.getElementById(val)?.scrollIntoView({ behavior: "smooth", block: "start" });
});
</script>

<style scoped></style>
