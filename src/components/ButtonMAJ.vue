<template>
  <div class="ButtonMAJ">
    <span class="ButtonMAJ-text text-upper title">
        Mettre à jour
    </span>
  </div>
</template>

<script>
export default {
  name: 'ButtonMAJ',
  data () {
    return {
      ButtonClass: 'ButtonMAJ'
    }
  },
  methods: {
  }
}
</script>

<style lang="css">
  .ButtonMAJ {
    display: block;
    position: fixed;
    cursor: pointer;
    bottom: -1px;
    left: 0;
    height: 50px;
    padding: 15px 0;
    width: 100vw;
    z-index: 100;
    transition: bottom 0.4s ease;
  }

  .ButtonMAJ--hidden {
    bottom: -52px;
  }

  .ButtonMAJ-up {
    position: absolute;
    right: 20px;
    bottom: 7px;
    font-size: 2.2rem;
    border-left: 1px solid rgba(0,0,0,0.1);
    padding-left: 30px;
  }

  .ButtonMAJ-text {
    font-weight: 900;
    color: #fff;
    background-color: rgba(255,255,255,0.2);
    padding: 5px 20px;
    border-radius: 30px;
  }
</style>
