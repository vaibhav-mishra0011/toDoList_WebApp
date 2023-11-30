<template>
  <v-table class="my-5">
    <thead>
      <tr>
        <th class="text-left" width="100">S.No.</th>
        <th class="text-left" width="300">Description</th>
        <th class="text-left" width="300">Completed</th>
        <th class="text-left" width="300">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr  v-for="toDO in toDos" :key="toDO.id">
        <td>{{ toDO.id }}</td>
        <td>{{ toDO.name }}</td>
        <td><v-checkbox></v-checkbox></td>
        <td><v-btn @click="deleteTodo">Delete</v-btn></td>
      </tr>
    </tbody>
  </v-table>

  
</template>

<script>
import {mapActions} from 'vuex';
export default {
  computed: {
    toDos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    deleteTodo(toDoId){
     this.$store.commit("deleteTodo",toDoId);
    }
    },
  
};
</script>