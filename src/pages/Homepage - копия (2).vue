<template>
  <div id="app">



    <!--<custom-header :scholarshipValueInitial="2000" />-->
    <custom-header v-bind:scholarshipValue.sync="scholarshipValue" />

    <!--<main-content :places="placesApp" :scholarshipValue="parseInt(scholarshipValueOut)" :startPercentageInitial="0" :endPercentageInitial="12" :placesTypes="placeTypes"/>-->
    <router-view></router-view>

    <custom-footer footerText="SimbirSoft. 2018"/>

  </div>
</template>

<script>
import './../assets/styles.scss'

//import TestComponentParent from './TestComponentParent'

import SideSpacer from './../components/SideSpacer'
import CustomHeader from './../components/CustomHeader'
import CustomFooter from './../components/CustomFooter'
import MainContent from './../components/MainContent'

import places from './../assets/places.txt'

export default {
  name: 'NewApp',
  components: {
    SideSpacer,
    CustomHeader,
    CustomFooter,
    MainContent
  },
  data: function () {
    return {
      scholarshipValue: 2000,
      //places: places
    }
  },
  computed: {
    scholarshipValueOut: function() {
      return this.scholarshipValue
    },
    placeTypes: function() {
      var placeTypesArray = [];
      for (var i = 0; i < this.placesApp.length; i++)
      {
        if (!placeTypesArray.includes(this.placesApp[i].category.name))
        {
          placeTypesArray.push(this.placesApp[i].category.name);
        }
      }
      return placeTypesArray;
    },
    placesApp: function() {
      var placesTemp = [];
      placesTemp = places.places;
      for (var i = 0; i < placesTemp.length; i++)
      {
        if (typeof(placesTemp[i].review) === 'undefined')
        {
          placesTemp[i].rating = 1;
        }
        else
        {
          var ratingTemp = 0;
          for(var ii = 0; ii < placesTemp[i].review.length; ii++)
          {
            ratingTemp += placesTemp[i].review[ii].rating;
          }
          placesTemp[i].rating = ratingTemp / placesTemp[i].review.length;
        }
      }
      return placesTemp;
    }
  }
}

//console.log(places)
</script>

<style lang="scss">

</style>
