<template>
   <div id="pagina1">
   <h2>Esto es el textopagina1  {{textopagina1}}</h2>
      <div id="demo">
      	Esto es el demo {{textodemo}}-{{kk}}
 
      </div>



  </div>

</template>


<script>

export default 
{

  name: 'pagina1',

  mounted(){this.funcion1();},


  data () 
  {
    return {
      textopagina1: 'pagina1',
      textodemo:'esto es el textodemo',
      kk:'kk',

      };
  },

/*
  props: 
  {itemId : String,
   itemIndex : String,
   restaurante: String,
   respuesta:String,	 
  },*/

  methods:
  {
  	funcion1()
  	{
      var edades=document.getElementById("edad");
      console.log("--esto es edades--");
      //console.log(edades.value);
      console.log("-----------------");
  	  console.log("esto es funcion 1");
     // document.getElementById("pruebas").innerHTML = "Esto es prueba con inner html2";
      //document.getElementById("resultado").innerHTML = "Esto es el div resultado";
  	}
  },

}



</script>



