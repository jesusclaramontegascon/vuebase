

var imprimir='<div id="Aplicacion" align="center">';
imprimir+='<p>Ingrese una edad:</p>';
imprimir+='<input type="number" v-model="edad" id="edad">';
imprimir+='<p v-if="edad>=0 && edad<=17">Es menor de edad.</p>';
imprimir+='<p v-else-if="edad<0">Es negativo de edad</p>';
imprimir+='<p v-else="edad>=18">Es mayor de edad</p>';
imprimir+='</div>';
document.write(imprimir);


/*
<div id="aplicacion" align="center">
    <p>Ingrese una edad:
    <input type="number" v-model="edad" id="edad">
  
    <p v-if="edad>=0 && edad<=17">Es menor de edad.</p>
    <p v-else-if="edad<0">Es negativo de edad</p>  
    <p v-else="edad>=18">Es mayor de edad</p> 

    </p>
    */