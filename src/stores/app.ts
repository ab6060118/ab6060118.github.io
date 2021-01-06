import { createContext } from 'react';
import {Belone} from 'src/data/works';

const appStore = createContext({
  workFilter: Belone.QNAP,
});

export default appStore;
