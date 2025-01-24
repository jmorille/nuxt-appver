<script setup lang="ts">  
    import { useAppTheme } from '~/composables/useAppTheme';

    const route = useRoute();
    const title = computed(() => {
    return route.meta?.title || route.matched[0].meta?.title || ''
    });

    const { isDark, toggleTheme  } = useAppTheme(); 
    const iconTheme = computed( () => isDark.value ? 'mdi-weather-night' : 'mdi-weather-sunny' );


    const drawer= ref(false);
    // App Bar order 10 or -1
    const order= ref(-1);
</script>


<template>
<v-app :theme="isDark ? 'dark' : 'light'">

    <v-layout class="rounded rounded-md">
 
  
      <v-app-bar  color="primary"  prominent :order="order">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title>{{ title }}</v-app-bar-title>

        <v-spacer></v-spacer>

        <slot name="iconBar">
            <v-btn variant="text" icon="mdi-magnify"></v-btn>
        </slot> 
        
        <v-btn variant="text" :icon="iconTheme"  @click="toggleTheme()"   />
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
