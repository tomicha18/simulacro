function estado_alumno(nota){

    if (nota <4) {
    return "estado libre";
    } else if(nota < 7 && nota >= 4){
        return "estado regular";
    } else if(nota <1 || nota >10 ){
        return "nota invalida";
    } else {
        return "estado promocionado";
    }
}
mi_nota = 11; //acá puede ir cualquier nota
mostrar_estado_del_alumno = estado_alumno(mi_nota);

console.log(mostrar_estado_del_alumno)