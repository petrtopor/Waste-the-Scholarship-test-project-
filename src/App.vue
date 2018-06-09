<template>
  <div id="app">
    <!--
    <img src="./assets/logo.png">
    <router-view/>
    -->

    <header>
        <div class="left-space"></div>
        <div class="main-space">
          <div class="row">
            <div class="col-1">
              <h2>
                Прогуляй Стипендию!
              </h2>
            </div>

            <div class="col-1 price">
              <p>Размер стипендии:</p>
              <input type="text" placeholder="2000" :value="secondData" />
              <p class="ruble-sign">&#8399;</p>
            </div>

            <div class="col-1 add-place">
              <button>Добавить место</button>
            </div>
        </div>
        </div>

      <div class="right-space"></div>
    </header>

    <main>
            <div class="left-space"></div>
            <div class="main-space">
                <div class="row spacer">

                    <div class="col-2">
                        <div class="scholarshipPercentage">
                            <p>Сколько: 20% - 70% стипендии</p>
                            <div class="scholarshipSlider">
                                <!--
                                <div class="line"></div>
                                <div class="start"></div>
                                <div class="end"></div>
                                -->
                            </div>
                        </div>
                    </div>

                    <div class="col-1">
                        <div id="how-and-where">
                            <div id="how">
                                <p>Как:</p>
                                <div id="stars">
                                    <div class="star marked"></div>
                                    <div class="star marked"></div>
                                    <div class="star marked"></div>
                                    <div class="star not-marked"></div>
                                    <div class="star not-marked"></div>
                                </div>
                            </div>
                            <div id="where">
                                <p>Где:</p>
                                <select>
                                    <option>Ресторан</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row">

                    <div class="col-2">
                        <section id="map">
                            <div id="map-placeholder">
                                <p>Показано: 16 из 54 (очистить фильтры)</p>
                                <div id="yandex-map-interactive">
                                    <img src="https://s3-alpha.figma.com/img/dfc8/d74d/46ba1ca5be78af774d3bb2eafaf7dcfa?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJK6APQGEHTP6I3PA%2F20180608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20180608T235157Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=fc174611f04afe4b3a16d10255b6809449b3d9038b4b5bd784c88d830419aecb" alt="Yandex map"/>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div class="col-1">
                        <section id="places-list">
                            
                            <div class="place-item">
                            
                                <div class="place-caption">
                                    <div class="place-item-name">Holy Poli</div>
                                    <div class="place-item-maintenance-elements">
                                        <div class="place-item-edit-element"></div>
                                        <div class="place-item-delete-element"></div>
                                    </div>
                                </div>
                            
                                <div class="place-item-rating">
                                    <div class="place-item-rating-stars">
                                        <div class="star"></div>
                                        <div class="star"></div>
                                        <div class="star"></div>
                                        <div class="star"></div>
                                        <div class="star"></div>
                                    </div>
                                    <p class="place-item-rating-reviews-count">(Отзывов: 2)</p>
                                </div>
                            
                                <div class="place-item-average-bill">
                                    <p class="place-item-average-bill-caption">Средний чек: </p>
                                    <p class="place-item-average-bill-value">600 р (35% стипендии)</p>
                                </div>
                            
                                <div class="place-item-summary">
                                    <p class="place-item-type">Бар</p>
                                    <p class="place-item-address">Пожарный пер., 8</p>
                                </div>
                            </div>

                            <div class="place-item">
                            
                                <div class="place-caption">
                                    <div class="place-item-name">Holy Poli</div>
                                    <div class="place-item-maintenance-elements">
                                        <div class="place-item-edit-element"></div>
                                        <div class="place-item-delete-element"></div>
                                    </div>
                                </div>
                            
                                <div class="place-item-rating">
                                    <div class="place-item-rating-stars">
                                        <div class="star"></div>
                                        <div class="star"></div>
                                        <div class="star"></div>
                                        <div class="star"></div>
                                        <div class="star"></div>
                                    </div>
                                    <p class="place-item-rating-reviews-count">(Отзывов: 2)</p>
                                </div>
                            
                                <div class="place-item-average-bill">
                                    <p class="place-item-average-bill-caption">Средний чек: </p>
                                    <p class="place-item-average-bill-value">600 р (35% стипендии)</p>
                                </div>
                            
                                <div class="place-item-summary">
                                    <p class="place-item-type">Бар</p>
                                    <p class="place-item-address">Пожарный пер., 8</p>
                                </div>
                            </div>

                            <div class="place-item">
                            
                                <div class="place-caption">
                                    <div class="place-item-name">Holy Poli</div>
                                    <div class="place-item-maintenance-elements">
                                        <div class="place-item-edit-element"></div>
                                        <div class="place-item-delete-element"></div>
                                    </div>
                                </div>
                            
                                <div class="place-item-rating">
                                    <div class="place-item-rating-stars">
                                        <div class="star"></div>
                                        <div class="star"></div>
                                        <div class="star"></div>
                                        <div class="star"></div>
                                        <div class="star"></div>
                                    </div>
                                    <p class="place-item-rating-reviews-count">(Отзывов: 2)</p>
                                </div>
                            
                                <div class="place-item-average-bill">
                                    <p class="place-item-average-bill-caption">Средний чек: </p>
                                    <p class="place-item-average-bill-value">600 р (35% стипендии)</p>
                                </div>
                            
                                <div class="place-item-summary">
                                    <p class="place-item-type">Бар</p>
                                    <p class="place-item-address">Пожарный пер., 8</p>
                                </div>
                            </div>

                            <div class="place-item">
                            
                                <div class="place-caption">
                                    <div class="place-item-name">Holy Poli</div>
                                    <div class="place-item-maintenance-elements">
                                        <div class="place-item-edit-element"></div>
                                        <div class="place-item-delete-element"></div>
                                    </div>
                                </div>
                            
                                <div class="place-item-rating">
                                    <div class="place-item-rating-stars">
                                        <div class="star"></div>
                                        <div class="star"></div>
                                        <div class="star"></div>
                                        <div class="star"></div>
                                        <div class="star"></div>
                                    </div>
                                    <p class="place-item-rating-reviews-count">(Отзывов: 2)</p>
                                </div>
                            
                                <div class="place-item-average-bill">
                                    <p class="place-item-average-bill-caption">Средний чек: </p>
                                    <p class="place-item-average-bill-value">600 р (35% стипендии)</p>
                                </div>
                            
                                <div class="place-item-summary">
                                    <p class="place-item-type">Бар</p>
                                    <p class="place-item-address">Пожарный пер., 8</p>
                                </div>
                            </div>

                        </section>
                    </div>
                </div>
            </div>
            <div class="right-space"></div>
        </main>

        <footer class="footer">
            <div class="left-space"></div>
            <div class="main-space">
                SimbirSoft. 2018 <!--{{testMsg}}-->
            </div>
            <div class="right-space"></div>
        </footer>

  </div>
</template>

<script>
import './assets/styles.scss'

export default {
  name: 'NewApp',
  data: function () {
    return {
      testMsg: 'HELLO VAGIZ PROGRAMMER CODER COOL',
      secondData: 100
    }
  }
}
</script>

<style lang="scss">
    
</style>
