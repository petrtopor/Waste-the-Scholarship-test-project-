<template>
  <footer class="footer">

    <side-spacer side="left"/>

    <div class="main-space">
      {{footerText}}
    </div>

    <side-spacer side="right"/>

  </footer>
</template>

<script>
  import SideSpacer from './SideSpacer'

	export default {
		name: 'customFooter',
    components: {
      SideSpacer
    },
		props: {
				footerText: String
		}
	}
</script>
