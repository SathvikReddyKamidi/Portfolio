import { storeToRefs } from 'pinia';  
import { useDarkStore } from '@/stores/darkData';
const darkStore = useDarkStore(); 
 export const { isDark } = storeToRefs(darkStore);


export function toggleTheme() {
  const store = useDarkStore(isDark);
  store.toggleDark();
}
