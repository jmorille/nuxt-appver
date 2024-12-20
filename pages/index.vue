<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<template>
 <div>
    <v-btn>Load</v-btn>
  <pre>{{ data }}</pre>
  </div>
</template>