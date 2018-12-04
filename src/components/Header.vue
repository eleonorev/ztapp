<template lang="html">
  <div class="Header">
    <div class="Header-logo">
      <router-link to="Arrondissements">
        <img class="Header-logo-img img-fluid"
        src="../assets/images/logo.svg" />
        <span class="Header-logo-title title">ZoneTrack!</span>
      </router-link>
    </div>

    <router-link to="Profil" class="Header-user">
      <img class="Header-user-img"
      src="https://picsum.photos/300/300/?randezaom" alt="">
    </router-link>

  </div>

</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="css">

.Header {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 55px;
    z-index: 1000;
    transition: top 0.5s ease;
}

.Header-logo {
  display: block;
  float: left;
}

.Header-logo-return {
  display: block;
  float: left;
  color: rgba(255,255,255,0.5);;
  font-size: 1.9rem;
  border-right: 1px solid rgba(255,255,255,0.5);
  padding-right: 14px;
  margin-top: 10px;
  line-height: 1.7;
  transition: color 0.5s ease;
}

.Header-logo-return:hover {
  color: rgba(255,255,255,1);
}

.Header-logo-img {
  display: block;
  float: left;
  margin-top: 0px;
  width: 80px;
  background-color: linear-gradient(to bottom right, #E6BC01, #54783D , #E200BF);
}

.Header-logo-title {
  text-transform: uppercase;
  float: left;
  font-size: 1.25rem;
  line-height: 2.4;
  color: #fff;
//  -webkit-text-fill-color: transparent;
//  background: linear-gradient(to bottom right, #54783D 40% , #E200BF 100%);
//  -webkit-background-clip: text;
}

.Header-return {
  display: block;
  position: relative;
  margin-top: 70px;
  text-align: left;
}

.Header-user {
  display: block;
  position: absolute;
  right: 20px;
  top: 5px;
  width: 40px;
  height: 40px;
}

.Header-user-img {
  border-radius: 50%;
  width: 100%;
}

</style>
