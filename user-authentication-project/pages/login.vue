<template>
  <div>
    <div class="login-container">
      <label for="username">Username:</label>
      <input type="text" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" v-model="password" required />

      <button @click="login" :loading="loading">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    // async userLogin() {
    //   console.log(this.login.username);
    //   try {
    //     const res = await this.$auth.loginWith("local", {
    //       data: this.login
    //         // email: "eve.holt@reqres.in",
    //         // password: "cityslicka",
    //       },
    //     );
    //     //console.log(this.$auth.user.email);

    //     if (this.$auth) {
    //       // Redirect to the dashboard page
    //       this.$router.push("/dashboard");
    //     } else {
    //       alert("Invalid credentials. Please try again.");
    //     }
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // },
    async login() {
      this.loading = true;
      try {
        const response = await this.$auth.loginWith("laravelSanctum", {
          data: {
            email: this.email,
            password: this.password,
          },
        });

        if (response.status == 200) {
          this.$router.push("/dashboard");
        } else {
          alert("Invalid credentials. Please try again.");
        }
      } catch (error) {
        console.log(error);
        alert("Invalid credentials. Please try again.");
      } finally {
        this.loading = false;
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
