//import {  pokemons } from './bases/02-objects';
//import { charmander } from './bases/03-classes';
//import { charmander } from './bases/04-injection';
//import { charmander } from './bases/05-decorators';
import { charmander } from './bases/06-decorators';

import './style.css';

//import { name, age, isValid } from './bases/01-types';

const app = document.querySelector<HTMLDivElement>('#app')!;


app.innerHTML = `
  <h1>Hello ${ charmander.name } | ${ charmander.id }</h1>
  <a href="https://vitejs.dev/guide/features.html" target="blank">Documentation</a>
`;