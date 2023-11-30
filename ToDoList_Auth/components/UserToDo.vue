<!-- <template>
  <v-card class="my-8" max-width="344" elevation="16">
    <v-card-item>
      <v-card-title>Todo- {{ toDoIndexValue+1}}</v-card-title>
      <v-card-subtitle></v-card-subtitle>
    </v-card-item>

    <v-card-text> {{ toDo ? toDo.name : "N/A" }} </v-card-text>
    <v-card-actions>
      <v-btn @click="$emit('edit', toDo)">Edit</v-btn>
      <v-btn @click="$emit('delete', toDo.id)">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>

export default {
  props: {
    toDo: [{
      id: null,
      name: null,
      todoCheckbox: false,
      todoIndex:""
    }],
    toDoIndexValue:""
  },
};
</script> -->
<template>
  <v-card class="my-8" max-width="344" elevation="16">
    <v-card-item>
      <v-card-title>Todo- {{ toDoIndexValue + 1 }}</v-card-title>
      <v-card-subtitle></v-card-subtitle>
    </v-card-item>

    <v-card-text> {{ toDo ? toDo.name : 'N/A' }} </v-card-text>
    <v-card-actions>
      <v-btn @click="editTodo">Edit</v-btn>
      <v-btn @click="deleteTodo">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    toDoId: {
      type: Number,
      required: true,
    },
    toDoIndexValue: {
      type: Number,
      required: true,
    },
  },
  computed: {
    toDo() {
      return this.$store.getters['todos/getTodoById'](this.toDoId);
    },
  },
  methods: {
    editTodo() {
      this.$emit('edit', this.toDo);
    },

    deleteTodo() {
      this.$emit('delete', this.toDoId);
    },
  },
};
</script>
