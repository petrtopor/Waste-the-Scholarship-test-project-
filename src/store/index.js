import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.headers.common['Authorization'] = 'Basic Y291cnNlcy1mcm9udGVuZDpybEdFT29WUndL'
//axios.defaults.baseURL = 'https://courses-frontend.simbirsoft1.com';

export default new Vuex.Store({
	state: {
		categories: [],
		entities: []
	},
	mutations: {
		ADD_CATEGORIES(state, categoriesArray) {
			//state.categories.concat(categoriesArray);
			//state.categories.push({id: "1", name: "CafePushed:=)LOL"});
			for(var i = 0; i < categoriesArray.length; i++)
			{
				state.categories.push(categoriesArray[i]);
			}
			console.log("ADD_CATEGORIES mutation is working");
		},
		ADD_ENTITIES(state, entitiesArray) {
			for(var i = 0; i < entitiesArray.length; i++)
			{
				state.entities.push(entitiesArray[i]);
			}
			console.log("ADD_ENTITIES mutation is working");
		}
	},
	actions: {
		fetchEntitiesFromServer(context) {
	      axios.post('/api/graphql', {query:
	      	`{entities
				{
				  id
				  name
				  address
				  averageCheck
				  lat
				  lon
				  rating
				  reviews
				  {
				    id
				    author
				    rating
				  }
				}
			}`})
	        .then(response => {
	          console.log(response.data.data.entities)
	          context.commit('ADD_ENTITIES', response.data.data.entities)
	        })
	        .catch(err => console.log('getEntities error: ', err))
	    },
	    fetchCategoriesFromServer(context) {
	      axios.post('/api/graphql', {query: `{categories {name, id}}`})
	        .then(response => {
	          console.log(response.data.data.categories)
	          //context.state.server_places = response.data.data.entities
	          context.commit('ADD_CATEGORIES', response.data.data.categories)
	        })
	        .catch(err => console.log('getCategories error: ', err))
	    },
	    FAKEfetchCategoriesFromServer(context) {
	    	var tmpArr = [{id: "1", name: "Cafe"}, {id: "2", name: "Restaurant"}, {id: "3", name: "Bar"}];
	    	console.log(tmpArr);
	    	context.commit('ADD_CATEGORIES', tmpArr);
	    }
	},
	getters: {
		categories(state) {
			return state.categories;
		},
		entities(state) {
			return state.entities;
		}
	}
});