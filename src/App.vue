<template>
  <button @click="showBooks = !showBooks">Show book list</button>
  <ul v-if="showBooks">
    <li class="mb-10" v-for="book in books">
      <h5 class="text-4xl">{{ book.title }}</h5><br>
      <p class="-mt-5">By {{ book.author }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      showBooks: false,
      books: [
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { title: 'The Grapes of Wrath', author: 'John Steinbeck' },
        { title: 'Dan is cool', author: 'Dan' },
      ]
    }
  },
};
</script>

<style>
</style>
