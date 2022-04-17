<template>
  <button @click="showPeople = !showPeople">Show people</button>
  <ul v-if="showPeople">
    <li class="mb-10" v-for="person in data">
      <h5 class="text-4xl">{{ person.name }}</h5><br>
      <p class="-mt-5">{{ person.age }} years old.</p>
    </li>
  </ul>
</template>

<script>
import notionData from "../src/data/data.json"

export default {
  data() {
    return {
      data: notionData,
      showPeople: false,
    }
  },
};
</script>

<style>
</style>
