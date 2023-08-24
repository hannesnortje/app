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
          <v-col class="pl-16 d-flex justify-center align-center">
            <p
              v-if="selectLine() === Line.start || selectLine() === Line.right"
              class="pr-3 font-weight-bold text-h6"
              @click="dialog = true"
            >
              {{ props.heading }}
            </p>
            <div class="circle-container" @click="$emit('next', props.index)">
              <div class="circle" :style="{ ...circleBorderColor }">
                <span class="circle-text"
                  ><div class="text-center font-weight-bold">
                    {{ props.startYear }}
                    <div v-if="props.endYear">
                      -<br />
                      {{ props.endYear }}
                    </div>
                  </div></span
                >
              </div>
            </div>
            <p
              v-if="selectLine() === Line.left"
              class="pl-3 font-weight-bold text-h6"
              @click="dialog = true"
            >
              {{ props.heading }}
            </p>
            <v-dialog v-model="dialog" scrollable width="auto">
              <template v-slot:activator="{ props }"></template>
              <v-card>
                <v-card-title>{{ props.heading }}</v-card-title>
                <v-card-text>{{ props.description }} </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
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
  circle: { type: String, default: "blue", required: true },
  heading: { type: String, required: true },
  description: { type: String, default: "No elaboration", required: true },
  startYear: { type: Number, required: true },
  endYear: Number,
});

const dialog = ref(false);

onMounted(() => {});

const selectLine = () => {
  if (props.index === 0) {
    return Line.start;
  } else if (props.index % 2 > 0) {
    return Line.left;
  } else {
    return Line.right;
  }
};

const circleBorderColor = reactive({ border: `10px solid ${props.circle}` });
</script>

<style scoped>
.circle-container {
  display: flex;
  align-items: center;
}

.circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: "white";
}

.circle-text {
  font-size: 14px;
}

.description {
  margin-left: 1rem;
}
</style>
