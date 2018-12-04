<template>
  <div id="app" class="ZT-Background">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
  '$route' (to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  }
}
}
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.css';
@import 'assets/sass/style.scss';


@import 'assets/sass/style.css';

.text-color,
.text-gradient {
  background: $c-gradient;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  overflow: hidden;
}

</style>
