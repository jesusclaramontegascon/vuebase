<template>
  <div id="app">
   {{msg}}----
 
<ul>
  
    <li><a href="/">Home</a></li>
    <li><a href="/pagina1">Página 1</a></li>
     <li><a href="/pagina2">Página 2</a></li>
    <li><a href="/pagina6">Página 6</a></li>
    <li><a href="/pagina7">Página 7</a></li>
</ul>


   <router-view>
   </router-view>

   


  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Pagina inicial de vue',
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
