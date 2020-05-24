<template>
   <div id="Asincrono" align="center">
   <h2>Esto es el textopagina7  {{textopagina7}}</h2>
   <h3>Esto es la impresión {{impresion}}</h3>

  </div>

</template>


<script>

export default 
{

  name: 'Asincrono',

  mounted(){this.funcion7();},


  data () 
  {
    return {
      textopagina7: 'pagina7',

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
    impresion:String,
  },
  methods:
  {
  	funcion7()
  	{
     console.log("esto en la funcion 7"); 

    var impresion='';
    impresion+="esto es el la parte asincrona pintada";
		
		//document.write(impresion);

    return impresion;

  	}
  },

}



</script>
