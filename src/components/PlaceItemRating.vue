<template>

	<div class="place-item-rating">
		<place-item-rating-stars :starsInitialCount="starsCount" :isChangeable="false" />

		<p class="place-item-rating-reviews-count">(Отзывов: {{reviewsCount}})</p>
	</div>

</template>
<script>
	import './../assets/stylesPlaceItemRating.scss'

	import PlaceItemRatingStars from './../components/PlaceItemRatingStars'

	export default {
		name: 'place-item-rating',
		components: {
			PlaceItemRatingStars
		},
		props: {
			reviewsCount: Number,
			starsInitialCount: Number
		},
		data: function() {
			return {
				starsCount: this.starsInitialCount
			}
		}
	}
</script>