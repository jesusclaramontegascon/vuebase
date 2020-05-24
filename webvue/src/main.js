import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Pagina1 from './Pagina1.vue'
import Pagina2 from './Pagina2.vue'
import Pagina6 from './Pagina6.vue'
import Asincrono from './Asincrono.vue'


var URLactual = window.location.href;
console.log(URLactual);


/*import RestauranteTop  from './RestauranteTop.vue'*/
import VueRouter from 'vue-router'

/*
Vue.component('home',Home);
Vue.component('pagina1',Pagina1);*/



Vue.use(VueRouter);

const routes=[
 {path:'/pagina1',component:Pagina1},
 {path:'/pagina2',component:Pagina2},
 {path:'/pagina6',component:Pagina6},
 {path:'/pagina7',component:Asincrono},
 {path:'/',component:Home},
 
];
const router= new VueRouter({
 routes,
 mode:'history'
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


   new Vue({
	 el: '#Aplicacion',
	      data:{ 
	        edad : 0
	      }
	})


    new Vue({
	 el: '#Asincrono',
	      data:{ 
	        pp : 0
	      }
	})





	






