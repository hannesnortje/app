<template>
  <v-table>
    <thead>
      <tr class="text-h5">
        <th class="text-left font-weight-black">Name</th>
        <th class="text-left font-weight-black">Field</th>
        <th class="text-left font-weight-black">Qualification</th>
        <th class="text-left font-weight-black">Start</th>
        <th class="text-left font-weight-black">End</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in events" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.field }}</td>
        <td>{{ item.qualification }}</td>
        <td>{{ item.start }}</td>
        <td>{{ item.end }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { education } from "~/settings/Education";
import { Education } from "~/interfaces/more";

const events: Ref<Education[]> = ref();
onMounted(() => {
  events.value = education;
});
</script>

<style scoped></style>
