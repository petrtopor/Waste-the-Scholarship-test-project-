<template>
	<div>
		<h1>{{title}}</h1>
		<h3>{{firstString}}</h3>
	</div>
</template>
<script>
	export default {
		name: 'testComponent',
		data: function (){
			return {
				firstString: 'firstString',
				secondString: 'secondString',
				someNumber: 100
			}
		},
		props: {
			title: String
		}
	}
</script>