//Crear una función que reciba como parámetro una nota y retorne una de  estas 3 palabras: LIBRE, REGULAR o PROMOCIONADO,
//en dependencia de:
function estado_alumno(nota){

    if (nota <4) {
    return "estado libre";
    } else if(nota < 7 && nota >= 4){
        return "estado regular";
    } else {
        return "estado promocionado";
    }
}
mi_nota = 11;
mostrar_estado_del_alumno = estado_alumno(mi_nota);

console.log(mostrar_estado_del_alumno);
