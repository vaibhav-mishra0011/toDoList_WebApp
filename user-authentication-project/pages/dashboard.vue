<template>
  <v-container>
    <v-btn @click="logout">Logout</v-btn>
    <h1>Welcome to the Dashboard!</h1>
    <h2>API Data:</h2>
    <v-table>
      <thead>
      <tr id="tableRow">
        <th class="text-left" width="100">
          Name
        </th>
        <th class="text-left" width="300">
          year
        </th>
      </tr>
    </thead>
    <tbody v-if="data.length > 0">
        <tr v-for="value in data" :key="value.id"  id="tableRow">
          <td  >{{ value.name }}</td>
          <td id="yearStl">{{ value.year }}</td>
        </tr>
      </tbody>
    <div v-else>
      <p>Loading data...</p>
    </div>
  
  </v-table>
  </v-container>
</template>

<script>
export default {
  //middleware:['auth'],
  data() {
    return {
      data: [],
    };
  },
  async created() {
    // Fetch data from the API when the component is created
    await this.fetchData();
  },
  methods: {
    //Get Api method
    async fetchData() {
      try {
        const res = await this.$axios.get("https://reqres.in/api/unknown");
        this.data = res.data.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async logout() {
      try {
        await this.$auth.logout();
        this.$router.push('/login');
      } catch (error) {
        console.error(error);
      }
    },
  },
  
};
</script>

<style scoped>
#tableRow td{
  border: 0.01rem solid black; 
  background-color: #D7D7D7;
  padding-top:1rem;
  padding-bottom:0.5rem;
}
#tableRow th{
  border: 0.01rem solid black;
  background-color: #D7D7D7;
  padding-top:1rem;
  padding-bottom:0.5rem;

}
#yearStl{
  padding-left:10rem;
  

}
</style>
