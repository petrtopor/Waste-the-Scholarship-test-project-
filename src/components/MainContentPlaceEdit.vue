<template>
	
	<main>
        <div class="left-space"></div>
        <div class="main-space">
            <div class="row spacer">

                <div class="col-1">
                    <div id="back-to-list">
                           <p><< Вернуться к списку</p>
                    </div>
                    <div id="caption">
                        <h2>Добавление места</h2>
                    </div>
                </div>

                <div class="col-2">

                </div>

            </div>
            <div class="row">
                <div class="col-1">
                    <section id="form">

                        <div id="name" class="input-field">
                            <p>Название:</p>
                            <input type="text" placeholder="Введите название места"/>
                        </div>

                        <div id="address" class="input-field">
                            <p>Адрес:</p>
                            <input type="text" placeholder="Введите точный адрес места"/>
                        </div>

                        <div id="average-bill" class="input-field">
                            <p>Средний чек:</p>
                            <input type="number" placeholder="Введите размер среднего чека, руб."/>
                        </div>

                        <div id="category" class="input-field">
                            <p>Категория:</p>
                            <select name="category" id="category-select" >
                                <option value="1">Бар</option>
                                <option value="2">Кафе</option>
                                <option value="3">Ресторан</option>
                                <option value="4">Суши</option>
                            </select>
                        </div>

                        <div class="photo input-field">
                            <p>Фото:</p>
                            <input type="text" placeholder="Выберите фото заведения"/>
                            <div class="image-photo-placeholder">
                                <img class="photo-image" src="http://img.all-mods.ru/2016/04/skyrim-bolshe-markerov-dlya-npc-v-tavernax.jpg" alt="Фото заведения"/>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="col-2">
                    <section id="map">
                        <div id="map-placeholder">
                            <p>Укажите место на карте:</p>
                            <div id="yandex-map-interactive">
                                <img src="https://s3-alpha.figma.com/img/75ad/a671/e0aeb4e8dba89a90e75a40f83cd65abd?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJK6APQGEHTP6I3PA%2F20180527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20180527T233229Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=6f35e6f28d2bb8625b98565613c21637a2311f390b9660b5a48eeca24a05b6b1" alt="Yandex map"/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div class="right-space"></div>
    </main>


</template>
<script>
	import SideSpacer from './../components/SideSpacer'
	import ScholarshipSlider from './../components/ScholarshipSlider'
	import PlaceItem from './../components/PlaceItem'
	import PlaceItemRatingStars from './../components/PlaceItemRatingStars'

	export default {
		name: 'MainContentPlaceEdit',
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
