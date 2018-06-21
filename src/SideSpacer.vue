<template>
	<div :class="classValue"><!--<h1>{{side}}</h1>--></div>
</template>
<script>


	export default {
		name: 'side-spacer',
		props: {
			side: String
		},
		computed: {
			classValue: function() {
				if (this.side === "left")
				{
					return "left-space";
				}
				if (this.side === "right")
				{
					return "right-space";
				}
			}
		}
	}
</script>
