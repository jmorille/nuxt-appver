<script setup lang="ts">  
    import { useCustomTheme } from '~/composables/useCustomTheme';
    const { isDark:isThemeDark, toggle:toggleTheme } = useCustomTheme();
    const darkLightIcon = computed(() => (isThemeDark.value ? 'mdi-weather-sunny' : 'mdi-weather-night'));

    const drawer= ref(false);
    // App Bar order 10 or -1
    const order= ref(-1);
</script>


<template>
     <v-app :theme="isThemeDark ? 'dark' : 'light'">

    <v-layout class="rounded rounded-md">


  
      <v-app-bar  color="primary"  prominent :order="order">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title>Mon Application Bar</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>
        <v-btn variant="text" icon="mdi-filter"></v-btn>
        <v-btn variant="text" :icon="darkLightIcon" @click="toggleTheme()" />
        <v-btn variant="text" icon="mdi-dots-vertical" id="menu-dots-vertical-activator"></v-btn>
        <v-menu activator="#menu-dots-vertical-activator">
            <v-list>
                <v-list-item  prepend-icon="mdi-logout" >
                    <template #title>
                        <div v-t="'app.logout'" />
                    </template>
                </v-list-item>
            </v-list>

        </v-menu>
    </v-app-bar>

    <v-navigation-drawer  color="surface"  v-model="drawer" >
         <AppProfile></AppProfile>
         <v-divider></v-divider>
         <AppNavMenu></AppNavMenu>
    </v-navigation-drawer>

    <v-main class="d-flex" style="min-height: 300px;">
       <slot />
    </v-main>


    </v-layout>
</v-app>

</template> 
