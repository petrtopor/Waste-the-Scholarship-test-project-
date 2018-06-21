<template>
	
	<main>
            <!--<div class="left-space"></div>-->
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
                                <select v-model="placeTypeRequired">
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
                                    <img src="./assets/map.svg">
                                </div>
                            </div>
                        </section>
                    </div>

                    <div class="col-1">
                        <section id="places-list">
                            
                        	<place-item v-for="place in places" v-if="(parseInt(place.averageCheck)>parseInt(startPercentage*scholarshipValue*0.01))&&(parseInt(place.averageCheck)<parseInt(endPercentage*scholarshipValue*0.01))&&(place.rating<=starsRequired)&&(place.category.name===placeTypeRequired)" :scholarshipValue="scholarshipValue" :place="place"/>

                        </section>
                    </div>
                </div>
            </div>
            <!--<div class="right-space"></div>-->
            <side-spacer side="right"/>
        </main>

</template>
<script>
	import SideSpacer from './SideSpacer'
	import ScholarshipSlider from './ScholarshipSlider'
	import PlaceItem from './PlaceItem'
	import PlaceItemRatingStars from './PlaceItemRatingStars'

	export default {
		name: 'mainPart',
		components: {
			SideSpacer,
			ScholarshipSlider,
			PlaceItem,
			PlaceItemRatingStars
		},
		props: {
			places: Array,
			placesTypes: Array,
			scholarshipValue: Number,
			startPercentageInitial: Number,
			endPercentageInitial: Number
		},
		data: function() {
			return {
				startPercentage: this.startPercentageInitial,
				endPercentage: this.endPercentageInitial,
      			starsRequired: 3,
      			placeTypeRequired: this.placesTypes[0]
			}
		},
		methods: {
			startPercentageUpdateHandler: function(newStartPercentageValue) {
				this.startPercentage = newStartPercentageValue;
			},
			endPercentageUpdateHandler: function(newEndPercentageValue) {
				this.endPercentage = newEndPercentageValue;
			},
			starsCountUpdateHandler: function(newStarsCountUpdateHandler) {
				this.starsRequired = newStarsCountUpdateHandler;
			}
		}
	}
</script>
