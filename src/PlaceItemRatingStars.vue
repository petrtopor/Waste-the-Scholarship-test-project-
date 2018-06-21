<template>

	<div class="place-item-rating-stars">
		<div class="star marked" :id="n" v-for="n in starsCount" @click="onClick" @mouseover="onMouseOver" @mouseleave="onMouseLeave"></div>
		<div class="star not-marked" :id="starsCount+n" v-for="n in 5-starsCount" @click="onClick" @mouseover="onMouseOver" @mouseleave="onMouseLeave"></div>
	</div>

</template>
<script>
	import './assets/stylesPlaceItemRatingStars.scss'

	export default {
		name: 'place-item-rating-stars',
		props: {
			starsInitialCount: Number,
			isChangeable: Boolean
		},
		data: function() {
			return {
				starsCount: this.starsInitialCount,
			}
		},
		methods: {
			onClick: function(event) {
				if(this.isChangeable)
				{
					this.starsCount = parseInt(event.target.id);
					this.$emit('starsCount:update', this.starsCount)
				}
			},
			onMouseOver: function(event) {
				if(this.isChangeable)
				{
					for (var i = event.target.id - 1; i >= 0; i--) {
						event.target.parentElement.children[i].classList.add("hovered")
					}
				}
			},
			onMouseLeave: function(event) {
				if (this.isChangeable)
				{
					for (var i = event.target.parentElement.children.length - 1; i >= 0; i--) {
						event.target.parentElement.children[i].classList.remove("hovered")
					}
				}
			}
		}
	}
</script>