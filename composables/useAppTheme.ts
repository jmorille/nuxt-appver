import { useDark, useToggle, useStorage  } from '@vueuse/core';

export function useAppTheme() {
    const { $vuetify } = useNuxtApp(); 
    const isDark = useDark({
      valueDark: 'dark',
      valueLight: 'light',
      initialValue: 'dark', 
      onChanged: (dark: boolean) => {
        const themeNew = dark ? 'dark' : 'light'; 
        $vuetify.theme.global.name.value = themeNew;
      },
    }); 
    const toggleTheme = useToggle(isDark);
  
    return { isDark, toggleTheme }
  }