
export const state = () => ({
    todos: [
      { id: 1, name: "aa", todoCompleted: false },
      { id: 2, name: "bb", todoCompleted: false },
    ],
  });
  
  export const mutations = {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
  
    editTodo(state, editedTodo) {
      const index = state.todos.findIndex(todo => todo.id === editedTodo.id);
      if (index !== -1) {
        state.todos[index] = editedTodo;
      }
    },
  
    deleteTodo(state, todoId) {
      state.todos = state.todos.filter(todo => todo.id !== todoId);
    },
  };
  
  export const actions = {
    addTodo({ commit }, todo) {
      commit('addTodo', todo);
    },
  
    editTodo({ commit }, editedTodo) {
      commit('editTodo', editedTodo);
    },
  
    deleteTodo({ commit }, todoId) {
      commit('deleteTodo', todoId);
    },
  };
  