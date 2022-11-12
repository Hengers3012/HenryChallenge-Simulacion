/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function stringMasLarga(strings) {
  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

  // Tu código aca:
  return strings.sort((a, b) => a.length - b.length).pop();
}

  console.log(
  stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']));
  
  console.log(
  stringMasLarga(['JavaScript', 'HTML', 'CSS']));
// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga