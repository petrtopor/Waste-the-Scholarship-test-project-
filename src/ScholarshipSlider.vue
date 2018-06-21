<template>
    <div class="scholarshipPercentage">
        <p>Сколько: {{startPercentage}}% - {{endPercentage}}% стипендии</p>
        <div>
            <vue-draggable-resizable :minw="sliderWidth" :w="sliderWidth" :minh="8" :y="8" :x="0" :h="8" axis="x" :parent="true" :resizable="false" id="line">
            </vue-draggable-resizable>

            <vue-draggable-resizable :minw="8" :minh="24" :y="0" :x=startX :w="8" :h="24" axis="x" v-on:dragging="onDragStart" :parent="true" :resizable="false" id="startBrick">
            </vue-draggable-resizable>

            <vue-draggable-resizable :minw="8" :minh="24" :y="0" :x=endX :w="8" :h="24" axis="x" v-on:dragging="onDragEnd" :parent="true" :resizable="false" id="endBrick">
            </vue-draggable-resizable>
        </div>
    </div>
</template>
<script>
    import VueDraggableResizable from 'vue-draggable-resizable'

	export default {
		name: 'scholarshipSlider',
		components: {
            VueDraggableResizable
        },
        data: function() {
              return {
                startX: this.startValueInitial,
                endX: this.endValueInitial,
                sliderWidth: this.widthInitial
            }
        },
        props: {
            widthInitial: Number,
            startValueInitial: Number,
            endValueInitial: Number
        },
        methods: {
                    onDragStart: function (x, y) {
                        this.startX = x;
                        this.$emit('update:startPercentage', this.startPercentage);
                    },
                    onDragEnd: function (x,y) {
                        this.endX = x + 20;
                        this.$emit('update:endPercentage', this.endPercentage);
                    }
        },
        computed: {
            startPercentage: function()
            {
                return Math.round(this.startX / this.sliderWidth * 100)
            },
            endPercentage: function()
            {
                return Math.round(this.endX / this.sliderWidth * 100)
            },
            middleLineLength: function() {
                return this.endX - this.startX;
            }
        }
    }
</script>
<style lang="scss">
    .scholarshipPercentage {
        div {
            height: 24px;
            width: 100%;
            /*border: 1px solid red;*/
            position: relative;
            background-color: white;
        }
        p {
            background-color: white;
        }
        #startBrick, #endBrick {
            background-color: #4296ea;
        }
        #line {
            background-color: #e0e0e0;
        }
        #middle-line {
            background-color: #0073e6;
        }
    }
</style>
