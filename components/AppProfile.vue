<script setup lang="ts">  
    const fullname=ref('Sandra Adams');
    const email=ref('andra_a88@gmailcom');
    const avatar=ref('https://randomuser.me/api/portraits/women/85.jpg');
</script>

<template>
    <v-list-item
            :prepend-avatar="avatar"
            :subtitle="email"
            :title="fullname"
    ></v-list-item>
</template>