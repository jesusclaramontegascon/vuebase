<template>
	<div id="pagina2" align="center">
		<h1>Esto es pagina2 {{variable}} </h1>
	</div>
</template>

<script>
export default {
  name: 'pagina2',
  data () {
    return {
      variable: 'Esto es el valor de la variable'
    }
  }
}
</script>

<style>
#pagina2 {
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
