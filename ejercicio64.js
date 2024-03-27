function contarPalabras (cadena) {
   var palabras = cadena.split(" ")
   return palabras.length;
}
let texto = "probando texto ejemplo devuelta"
var numerodepalabras = contarPalabras(texto);
console.log(numerodepalabras);