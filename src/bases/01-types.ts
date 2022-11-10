

export let name: string = 'Nachowski';

export const age: number = 55;
export const isValid: boolean = true;

name = "Melissa";
console.log(name);

export const templateString = `Esto es un string
multilindea
que puede tener
" dobles
' simple
inyectar valores ${ name }
expresiones ${ 1 + 1 }
numero: ${ age }
booleanos: ${ isValid }`;

console.log(templateString);