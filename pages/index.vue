<script setup lang="ts">
definePageMeta({
  layout: false,
  title: 'Home Page',
  alias: "/home",
  meta: [{
    name: 'description',
    content: "The page description"
  }]
});


const { data } = await useFetch('/api/hello')
</script>

<template>
 <div>
    <NuxtLayout name="default">
      
      <template #iconBar>
        <v-btn variant="text" icon="mdi-filter"></v-btn>
      </template>
      <NuxtPage />
  </NuxtLayout> 

  <v-container fluid> 
        <v-btn>Load</v-btn>
        <pre>{{ data }}</pre>
  </v-container>

</div>
</template>