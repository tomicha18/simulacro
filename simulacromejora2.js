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
let mi_nota = 6;
let mi_nota2 = 4;
let mi_nota3 = 6;
let promedio_de_notas = parseFloat(mi_nota + mi_nota2 + mi_nota3)/3;
let mostrar_estado_del_alumno = estado_alumno(promedio_de_notas);
console.log(promedio_de_notas);
console.log(mostrar_estado_del_alumno);
