<template>
  <div>
    <v-row>
      <p>Using v-html directive: <FONT color="#faddad" size="-2">
          <MARQUEE>Please enter your name to continue.</MARQUEE>
          ...
        </FONT></p>
      <v-col md="4">
        <h2 class="text-center mb-5">Recently Read Books</h2>
        <v-row v-for="(book,index) in recentBooks" :key="index">
          <BookCard
            class="mb-5"
            :bookTitle="book.title"
            :bookAuthor="book.author"
            :bookDescription="book.description"
          >
            <template v-slot:button>
              <v-btn @click="edit(book,index)">Edit</v-btn>
              <v-btn @click="remove(book.category, index)">Remove</v-btn>
            </template>
          </BookCard>
        </v-row>
      </v-col>
      <v-col md="4">
        <h2 class="text-center mb-5">Favourite Books</h2>
        <v-row v-for="(book,index) in favouriteBooks" :key="index">
          <BookCard
            class="mb-5"
            :bookTitle="book.title"
            :bookAuthor="book.author"
            :bookDescription="book.description"
          >
            <template v-slot:button>
              <v-btn @click="edit(book,index)">Edit</v-btn>
              <v-btn @click="remove(book.category, index)">Remove</v-btn>
            </template>
          </BookCard>
        </v-row>
      </v-col>
      <v-col md="4">
        <h2 class="text-center mb-5">Best of the Best</h2>
        <v-row v-for="(book,index) in bestOfTheBest" :key="index">
          <BookCard
            class="mb-5"
            :bookTitle="book.title"
            :bookAuthor="book.author"
            :bookDescription="book.description"
          >
            <template v-slot:button>
              <v-btn @click="edit(book,index)">Edit</v-btn>
              <v-btn @click="remove(book.category, index)">Remove</v-btn>
            </template>
          </BookCard>
        </v-row>
      </v-col>
    </v-row>
    <BookModal />
  </div>
</template>

<script>
import { eventBus } from "@/eventBus";

export default {
  components: {
  },
  data() {
    return {
      recentBooks: [],
      favouriteBooks: [],
      bestOfTheBest: []
    };
  },
  created() {
    eventBus.$on("save-book", cardData => {
      if (cardData.category === "Recently read books") {
        this.recentBooks.push(cardData);
      }
      if (cardData.category === "Favourite books") {
        this.favouriteBooks.push(cardData);
      }
      if (cardData.category === "Best of the best") {
        this.bestOfTheBest.push(cardData);
      }
    });
  },
  methods: {
    remove(category, index) {
      if (category === "Recently read books") {
        this.recentBooks.splice(index, 1);
      }
      if (category === "Favourite books") {
        this.favouriteBooks.splice(index, 1);
      }
      if (category === "Best of the best") {
        this.bestOfTheBest.splice(index, 1);
      }
    },
    edit(book, index) {
      if (book.category === "Recently read books") {
        eventBus.$emit("show-modal", book);
        this.recentBooks.splice(index, 1);
      }
      if (book.category === "Favourite books") {
        eventBus.$emit("show-modal", book);
        this.favouriteBooks.splice(index, 1);
      }
      if (book.category === "Best of the best") {
        eventBus.$emit("show-modal", book);
        this.bestOfTheBest.splice(index, 1);
      }
    }
  }
};
</script>
