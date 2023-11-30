<template>
  <v-container>
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent="login">
        <v-text-field v-model="userEmail" label="Email"></v-text-field>
        <v-text-field v-model="userPassword" label="Password"></v-text-field>
        <v-btn type="submit" block class="mt-2">Submit</v-btn>
      </v-form>
    </v-sheet>
    <!-- <UserToDo></UserToDo> -->
  <AdminToDo></AdminToDo>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    userEmail: "",
    userPassword: "",
    check:true,
    email:"vaibhav@gmail.com",
  }),
  credentials: [
    { email: "vaibhav@gmail.com", password: "123456" },
    { email: "abcd@gmail.com", password: "1234" },
  ],
  methods: {
    login() {
      console.log("check credentials")
      console.log(this.userEmail);
      if (this.userEmail===this.email) {
        this.$router.push("/dashboard");
      }
      console.log("invalid login credentials");
      this.$router.push("/dashboard");
    },
  },
};
</script>


