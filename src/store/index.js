import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.headers.common['Authorization'] = 'Basic Y291cnNlcy1mcm9udGVuZDpybEdFT29WUndL'
//axios.defaults.baseURL = 'https://courses-frontend.simbirsoft1.com';

export default new Vuex.Store({
	state: {
		categories: [],
		entities: [],
		scholarshipValue: 2000,
		startPercentage: 0,
		endPercentage: 12,
		starsRequired: 2,
		placeTypeRequired: String
	},
	mutations: {
		ADD_CATEGORIES(state, categoriesArray) {
			//state.categories.concat(categoriesArray);
			//state.categories.push({id: "1", name: "CafePushed:=)LOL"});
			for(var i = 0; i < categoriesArray.length; i++)
			{
				if (!(categoriesArray[i]===null)&&(!(typeof categoriesArray[i]==='undefined'))) {
					state.categories.push(categoriesArray[i]);
				}
			}
			console.log("ADD_CATEGORIES mutation is working");
		},
		ADD_ENTITIES(state, entitiesArray) {
			for(var i = 0; i < entitiesArray.length; i++)
			{
				if (!(entitiesArray[i]===null)&&(!(typeof entitiesArray[i]==='undefined'))) {
					state.entities.push(entitiesArray[i]);
				}
			}
			console.log("ADD_ENTITIES mutation is working");
		},
		SET_SCHOLARSHIP_VALUE(state, newValue) {
			state.scholarshipValue = newValue;
		},
		SET_START_PERCENTAGE(state, newValue) {
			state.startPercentage = newValue;
		},
		SET_END_PERCENTAGE(state, newValue) {
			state.endPercentage = newValue;
		},
		SET_STARS_REQUIRED(state, newValue) {
			state.starsRequired = newValue;
		},
		SET_PLACE_TYPE_REQUIRED(state, newValue) {
			console.log("SET_PLACE_TYPE_REQUIRED(state, newValue), newValue is ", newValue);
			state.placeTypeRequired = newValue;
		}
	},
	actions: {
		fetchEntitiesFromServer(context) {
	      axios.post('/api/graphql', {query:
	      	`{entities
				{
				  id
				  name
				  category {
				    name
				  }
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
	    },
	    setScholarshipValue(context, newValue) {
	    	context.commit('SET_SCHOLARSHIP_VALUE', newValue);
	    },
	    setStartPercentage(context, newValue) {
	    	context.commit('SET_START_PERCENTAGE', newValue);
	    },
	    setEndPercentage(context, newValue) {
	    	context.commit('SET_END_PERCENTAGE', newValue);
	    },
	    setStarsRequired(context, newValue) {
	    	context.commit('SET_STARS_REQUIRED', newValue);
	    },
	    setPlaceTypeRequired(context, newValue) {
	    	console.log("context.commit('SET_PLACE_TYPE_REQUIRED', newValue); newValue is ", newValue);
	    	context.commit('SET_PLACE_TYPE_REQUIRED', newValue);
	    }
	},
	getters: {
		categories(state) {
			return state.categories;
		},
		entities(state) {
			return state.entities;
		},
		scholarshipValue(state) {
			return state.scholarshipValue;
		},
		startPercentage(state) {
			return state.startPercentage;
		},
		endPercentage(state) {
			return state.endPercentage;
		},
		starsRequired(state) {
			return state.starsRequired;
		},
		placeTypeRequired(state) {
			return state.placeTypeRequired;
		}
	}
});