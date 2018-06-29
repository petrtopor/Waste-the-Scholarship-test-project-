<template>
	
	<main>

            <side-spacer side="left"/>
            <div class="main-space">
                <div class="row spacer">

                    <div class="col-2">
                        <scholarship-slider :widthInitial="816" :startValueInitial="0" :endValueInitial="100" v-on:update:startPercentage="startPercentageUpdateHandler" v-on:update:endPercentage="endPercentageUpdateHandler"/>
                    </div>

                    <div class="col-1">
                        <div id="how-and-where">
                            <div id="how">
                                <p>Как:</p>
                                <place-item-rating-stars :starsInitialCount="starsRequired" :isChangeable="true" v-on:starsCount:update="starsCountUpdateHandler"/>
                            </div>
                            <div id="where">
                                <p>Где:</p>
                                <select :value="placeTypeRequired" @change="placeTypeRequiredUpdateHandler">
                                    <option v-for="placesType in placesTypes">{{placesType}}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row">

                    <div class="col-2">
                        <section id="map">
                            <div id="map-placeholder">
                                <p>Показано: 16 из 54 (очистить фильтры)</p>
                                <div id="yandex-map-interactive">
                                    <!--<img src="./../assets/map.svg">-->
                                    <yandex-map
                                    :coords="[54.62896654088406, 39.731893822753904]"
                                    style="width: 816px; height: 624px;"></yandex-map>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div class="col-1">
                        <section id="places-list">

                        	<place-item v-for="place in places" v-if="(parseInt(place.averageCheck)>parseInt(startPercentage*scholarshipValue*0.01))&&(parseInt(place.averageCheck)<parseInt(endPercentage*scholarshipValue*0.01))&&(place.rating>=starsRequired)&&(place.category.name==placeTypeRequired)" :scholarshipValue="scholarshipValue" :place="place"/>

                        </section>
                    </div>
                </div>
            </div>
            
            <side-spacer side="right"/>
        </main>

</template>
<script>
	import SideSpacer from './../components/SideSpacer'
	import ScholarshipSlider from './../components/ScholarshipSlider'
	import PlaceItem from './../components/PlaceItem'
	import PlaceItemRatingStars from './../components/PlaceItemRatingStars'
    
    import yandexMap from 'vue-yandex-maps'
    
    

	export default {
		name: 'mainPart',
		components: {
			SideSpacer,
			ScholarshipSlider,
			PlaceItem,
			PlaceItemRatingStars,
            yandexMap,
		},
		props: {
			startPercentageInitial: Number,
			endPercentageInitial: Number
		},
		methods: {
			startPercentageUpdateHandler: function(newStartPercentageValue) {
                this.$store.dispatch('setStartPercentage', newStartPercentageValue);
			},
			endPercentageUpdateHandler: function(newEndPercentageValue) {
                this.$store.dispatch('setEndPercentage', newEndPercentageValue);
			},
			starsCountUpdateHandler: function(newStarsCountValue) {
                this.$store.dispatch('setStarsRequired', newStarsCountValue);
			},
            placeTypeRequiredUpdateHandler: function(newPlaceTypeRequiredValue) {
                this.$store.dispatch('setPlaceTypeRequired', newPlaceTypeRequiredValue.target.value);
            }
		},
        computed: {
            scholarshipValue: function() {
                return this.$store.getters.scholarshipValue;
            },
            startPercentage: function() {
                return this.$store.getters.startPercentage;
            },
            endPercentage: function() {
                return this.$store.getters.endPercentage;
            },
            places: function() {
                var placesArray = [];
                for (var i = 0; i < this.$store.getters.entities.length; i++) {
                        placesArray.push(this.$store.getters.entities[i]);
                    }
                return placesArray;
            },
            starsRequired: function() {
                return this.$store.getters.starsRequired;
            },
            placeTypeRequired: function() {
                return this.$store.getters.placeTypeRequired;
            },
            placesTypes : function() {
                var categoriesNamesArray = [];
                for(var i = 0; i < this.$store.getters.categories.length; i ++)
                {
                    categoriesNamesArray.push(this.$store.getters.categories[i].name);
                }
                return categoriesNamesArray;
            }
        }
	}
</script>
