<template>
	<header>
        <side-spacer side="left"/>

        <div class="main-space">
          <div class="row">
            <div class="col-1">
              <h2>
                {{caption}}
              </h2>
            </div>

            <div class="col-1 price">
              <p>Размер стипендии:</p>
              <input type="number" :value="scholarshipValue" @input="onInputHandler"/>
              <p class="ruble-sign">&#8399;</p>
            </div>

            <div class="col-1 add-place">
              <button>Добавить место</button>
            </div>
          </div>
        </div>

      <side-spacer side="left"/>
    </header>
</template>

<script>
	import SideSpacer from './SideSpacer'

	export default {
		name: 'customHeader',
		components: {
	      SideSpacer
	    },
		data: function () {
			return {
				caption: "Прогуляй Стипендию!"
			}
		},
		methods: {
			onInputHandler: function(e) {
				this.$store.dispatch('setScholarshipValue', parseInt(e.target.value));
			}
		},
		computed: {
			scholarshipValue: function() {
				return this.$store.getters.scholarshipValue;
			}
		}
	}
</script>
