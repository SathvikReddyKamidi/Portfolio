import { defineStore } from "pinia";
import { ref,computed } from "vue";
import { useDark } from '@vueuse/core';
import { useToggle } from '@vueuse/core';
export const useDarkStore = defineStore('darkData',() => {
    const isDark = useDark({
    selector: 'html',
    attribute: 'color-scheme',
    valueDark: 'dark',  
    valueLight: 'light',

});
 const toggleDark = useToggle(isDark);

  return {
    isDark,
    toggleDark,
  };
});