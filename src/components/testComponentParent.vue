<template>
	<div>
		<input v-on:keypress="textChanged" :value="textContent" />
	</div>
</template>

<script>
	export default {
		name: 'testComponentParent',
		data: function (){
			return {
				textContent: "olololo"
			}
		},
		methods: {
			textChanged: function() {
				alert("Text changed!")
			}
		}
	}
</script>