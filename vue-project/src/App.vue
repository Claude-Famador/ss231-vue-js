<template>
  <div class="app-container">
    <h1>Personal Info</h1>
    <personal-info/>
    <comment-form>
  </div>

  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from './lib/supabaseClient'

  const countries = ref([])

  async function getCountries() {
    const { data } = await supabase.from('countries').select()
    countries.value = data
  }

  onMounted(() => {
    getCountries()
  })
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