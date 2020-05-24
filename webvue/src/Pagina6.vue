<template>
   <div id="pagina6">
   <h2>Esto es el textopagina6  {{textopagina6}}</h2>


  </div>

</template>


<script>

export default 
{

  name: 'pagina6',

  mounted(){this.funcion6();},


  data () 
  {
    return {
      textopagina6: 'pagina6',

      };
  },

/*
  props: 
  {itemId : String,
   itemIndex : String,
   restaurante: String,
   respuesta:String,	 
  },*/

  props: 
  {
  	textoaplicacion:String,
  },

  methods:
  {
  	funcion6()
  	{
     console.log("esto en la funcion 6"); 

     var imprimir='<div id="Aplicacion" align="center">';
	 imprimir+='<p>Ingrese una edad:</p>';
	 imprimir+='<input type="number" v-model="edad" id="edad">';
	 imprimir+='<p v-if="edad>=0 && edad<=17">Es menor de edad.</p>';
	 imprimir+='<p v-else-if="edad<0">Es negativo de edad</p>';
	 imprimir+='<p v-else="edad>=18">Es mayor de edad</p>';
	 imprimir+='</div>';
	 document.write(imprimir);

  	}
  },

}



</script>
