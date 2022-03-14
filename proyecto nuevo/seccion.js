function Señalar() {

    var vr3 = document.getElementById('t3').value;
    var imprime = ""

     switch (vr3) {
         case (1 ):  imprime = "arroz con leche"
           break
         case  2:
             imprime = "mazamorra morada"
             break;
         case  3:
             imprime = "arroz sanbito"
            break;
         case  4:
             imprime = "limonada"
             break;
         case  5:
             imprime = "jugo de papaya"
             break;
         case  6:
             imprime = "alfajor"
             break;
         default:
         imprime = "esta receta aun no existe"
             break
     }
    // if (vr3 == 1) {
    //     imprime = "Arooz con leche"
    // } else {
    //     imprime ="nose"
    


    // alert (imprime)
    console.log(imprime);

    document.getElementById('promedio').innerHTML = imprime;

}



