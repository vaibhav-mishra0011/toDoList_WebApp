<template>
  <v-container>
    <v-dialog max-width="500px" v-model="open" persistent>
      <v-card class="p-5">
        <v-card-title>Add Books</v-card-title>
        <v-form>
          <v-select
            v-model="category"
            :items="categories"
            label="Select A Category"
          ></v-select>
          <v-text-field v-model="title" label="Enter Book Title"></v-text-field>
          <v-text-field
            v-model="author"
            label="Enter Book Author"
          ></v-text-field>
          <v-textarea
            v-model="description"
            label="Enter Book Description"
          ></v-textarea>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="saveBook" color="green">Add</v-btn>
          <v-btn @click="open = false" color="primary">close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar">
       Saved Successfully
      <template v-slot:action="{ attrs }">
        <v-btn color="green" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
  
  <script>
import { eventBus } from "@/eventBus";
export default {
  data() {
    return {
      snackbar: true,
      open: false,
      category: "",
      title: "",
      author: "",
      description: "",
      categories: [
        "Recently read books",
        "Favourite books",
        "Best of the best",
      ],
    };
  },
  created() {
    eventBus.$on("show-modal", (data) => {
      if (data) {
        this.category = data.category;
        this.title = data.title;
        this.author = data.author;
        this.description = data.description;
      }
      this.open = true;
    });
  },
  methods: {
    saveBook() {
      let cardData = {
        title: this.title,
        author: this.author,
        description: this.description,
        category: this.category,
      };
      eventBus.$emit("save-book", cardData);
      this.snackbar = true;
      this.open = false;
    },
  },
};
</script>