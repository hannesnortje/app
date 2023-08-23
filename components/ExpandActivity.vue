<template>
  <v-expand-x-transition>
    <v-sheet>
      <v-container fluid>
        <v-row>
          <v-col class="d-flex justify-center align-center">
            <div class="pl-7 ml-16">
              <v-img :inline="true" :width="100" :src="selectLine()"></v-img>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            class="pl-16 d-flex justify-center align-center"
            @click="$emit('next', props.index)"
          >
            <p
              v-if="selectLine() === Line.start || selectLine() === Line.right"
              class="pr-3 font-weight-bold text-h6"
            >
              {{ props.text }}
            </p>
            <v-img
              max-height="200"
              min-height="150"
              :src="props.circle"
              width="125"
              class="align-center"
              ><div class="text-center font-weight-bold">
                {{ props.startYear }}
                <div v-if="props.endYear">
                  -<br />
                  {{ props.endYear }}
                </div>
              </div></v-img
            >
            <p v-if="selectLine() === Line.left" class="pl-3 font-weight-bold text-h6">
              {{ props.text }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-expand-x-transition>
</template>

<script setup lang="ts">
import { Circle, Line } from "@/utilities/enums/rollout";

const props = defineProps({
  index: { type: Number, required: true },
  circle: { type: String, default: Circle.blue, required: true },
  text: { type: String, required: true },
  startYear: { type: Number, required: true },
  endYear: Number,
});

onMounted(() => {
  console.log("Mounted");
});

const selectLine = () => {
  if (props.index === 0) {
    return Line.start;
  } else if (props.index % 2 > 0) {
    return Line.left;
  } else {
    return Line.right;
  }
};
</script>

<style scoped></style>
