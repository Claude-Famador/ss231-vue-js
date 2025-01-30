<template>
  <div class="app-container">
    <h1>Personal Info</h1>
    <personal-profile/>
  </div>
</template>

<script>
import PersonalProfile from './components/PersonalProfile.vue'

export default {
  name: 'App',
  components: {
    PersonalProfile
  }
}
</script>

<style>
.app-container {
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}
</style>