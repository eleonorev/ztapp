<template>
      <div class="container">
        <Header />
          <div class="ZT-container-white ZT-container-white--full">
            <span class="title title--lg text-white title-shadow">
              <span class="ZT-title">Paris</span> </br>
              <span class="ZT-title-location">Choisir une zone</span>
            </span>

            <div class="row">
                <div class="col-6 ArrondissementItemContainer" v-for="i in 20">
                  <router-link to="Home" class="ArrondissementItem">
                  <img class="ArrondissementItem-picto" src="https://picsum.photos/300/300/?random" alt="">
                  <span class="ArrondissementItem-text">
                    {{ i }}
                    {{ i == 1 ? 'er' : 'eme'}} Arrondissement
                  </span>
                </router-link>
                </div>
              </div>
          </div>
    </div>

</template>

<script>

import Header from '@/components/Header'

    export default {
        name: 'Arrondissements',
        components: {
          Header
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ZT-title {
  display: block;
  margin-right: 20px;
  text-align: right;
  font-size: 4rem;
  color: rgba(0,0,0,0.1);
}

.ZT-title-location {
  color: #000;
  font-size: 1.4rem;
  display: block;
  margin-top: -90px;
  text-align: center;
}

  .ArrondissementItemContainer:nth-child(odd) {
    padding-right: 0px;
  }

  .ArrondissementItemContainer:nth-child(even) {
    padding-left: 0px;
  }

  .ArrondissementItem {
    display: block;
    position: relative;
    margin: 10px 10px;
  }

  .ArrondissementItem-picto {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }

  .ArrondissementItem-text {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    font-size: 1rem;
    font-weight: 900;
    z-index: 10;
    padding: 20px;
    color: #fff;
  }

</style>
