<template>
  <div>
    <div class="login-container">
      <label for="username">Username:</label>
      <input type="text" v-model="username" required />

      <label for="password">Password:</label>
      <input type="password" v-model="password" required />

      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      console.log("asd");
      try {
        const res = await this.$axios.post("https://reqres.in/api/login", {
          email: "evea.holt@reqres.in",
          password: "cityslicka",
        });

        console.log(res);

        if (this.username === email) {
          // Redirect to the dashboard page
          this.$router.push("/dashboard");
        } else {
          alert("Invalid credentials. Please try again.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>


<style scoped>
.login-container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
}

button {
  background-color: #4caf50;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
