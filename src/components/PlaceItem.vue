<template>
	<div class="place-item">
                            
		<div class="place-caption">
			<div class="place-item-name">{{placeName}}</div>
			<div class="place-item-maintenance-elements">
				<div class="place-item-edit-element"></div>
				<div class="place-item-delete-element"></div>
			</div>
		</div>
                            
		<place-item-rating :reviewsCount="reviewsCount" :starsInitialCount="starsCount"/>
                            
		<div class="place-item-average-bill">
			<p class="place-item-average-bill-caption">Средний чек: </p>
			<p class="place-item-average-bill-value">{{averageBill}} р ({{scholarshipPercentage}}% стипендии)</p>
		</div>
                            
		<div class="place-item-summary">
			<p class="place-item-type">{{placeType}}</p>
			<p class="place-item-address">{{placeAddress}}</p>
		</div>

	</div>
</template>
<script>
	import PlaceItemRating from './PlaceItemRating'

	export default {
		name: 'place-item',
		components: {
			PlaceItemRating
		},
		props: {
			scholarshipValue: Number,
			place: Object
		},
		computed: {
			scholarshipPercentage: function() {
				return Math.round(this.averageBill / this.scholarshipValue  * 100);
			},
			reviewsCount: function() {
				if (typeof this.place.review === 'undefined')
				{
					return 0;
				}
				return this.place.review.length;
			},
			starsCount: function() {
				/*
				if (this.reviewsCount===0) {
					return 0;
				}
				var totalStars = 0;
				for (var i = 0; i < this.reviewsCount; i++) {
					totalStars += this.place.review[i].rating;
				}
				return Math.round(totalStars/this.reviewsCount);
				*/
				return Math.round(this.place.rating);
			},
			placeName: function() {
				return this.place.name;
			},
			placeType: function() {
				return this.place.category.name;
			},
			averageBill: function() {
				return this.place.averageCheck;
			},
			placeAddress: function() {
				return this.place.address;
			}
		}
	}
</script>
