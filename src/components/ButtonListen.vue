<template>
  <div :class="ButtonClass">
    <img class="ButtonListen-image"
          :src="title.image" alt="">

    <span class="ButtonListen-text">
    <span class="text-bold">{{ title.authors }}</span>
     <br/>  {{ title.title }}</span>
    <i v-if="currentPlay === false && title" @click="currentPlay = true" class="ButtonListen-picto fas fa-play"></i>
    <i v-if="currentPlay && title" @click="currentPlay = false" class="ButtonListen-picto fas fa-pause"></i>
    <i class="ButtonListen-picto fas fa-heart"></i>


  </div>
</template>

<script>
export default {
  name: 'ButtonListen',
  props: ['playTitle'],
  data () {
    return {
      ButtonClass: 'ButtonListen ButtonListen--hidden',
      currentPlay: true,
      title: false
    }
  },
  methods: {
    handleScroll(e, lastPos) {
      if (this.title) {
        this.ButtonClass = 'ButtonListen';
      }
    }
  },
  watch: {
    playTitle: function(nv, lv) {
      this.title = nv;
      this.ButtonClass = 'ButtonListen';
    }
  },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style lang="css">
  .ButtonListen {
    display: block;
    position: fixed;
    overflow: hidden;
    cursor: pointer;
    bottom: 45px;
    right: 0px;
    height: 80px;
    width: 100%;
    background-color: rgba(0,0,0,0.8);
    z-index: 10;
    box-shadow: 0 3px 7px rgba(0,0,0,0.1);
    transition: bottom 0.3s ease;
  }

  .ButtonListen--hidden {
      bottom: -80px;
  }

  .ButtonListen-text {
    float: left;
    text-align: left;
    margin-top: 15px;
    color: #fff;
    font-size: 0.8rem;
  }

  .ButtonListen-picto {
    float: right;
    margin-top: 20px;
    font-size: 1.8rem;
    color: rgba(255, 255,255,0.8);
    z-index: 100;
    padding-right: 25px;
  }

  .ButtonListen-image {
    display: block;
    float: left;
    position: relative;
    width: 60px;
    margin: 10px;
    overflow: hidden;
    border-radius: 50%;
  }
</style>
