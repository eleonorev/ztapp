<template>
      <div class="container">
        <Header />
        <Maps />
        <transition name="fade" mode="out-in">
        <div v-if="MusicListOpen" :class="animateListing" id="Listing">
          <div class="col-md-12 ZT-container">
            <span class="title title--lg text-white title-shadow">
              <span class="title--xxl title-shadow">Paris</span> </br>
              {{ name }}
            </span>
          </div>
          <div class="ZT-container-white Login-content">
          <div class="col-md-12">
            <div class="MusicList">
              <div class="MusicList-MAV">
                <div v-for="(topmusic, index) in TOPmusicItems" class="row">
                  <div class="col-md-12 text-center">
                    <span class="MusicList-title">Le Leader</span>
                  </div>
                    <div class="col-md-6">
                    <img class="MusicList-item-cover"
                    @click="openPlayer(topmusic)"
                    v-bind:src="topmusic.image"
                    alt="" />
                  </div>
                  <div class="col-md-6">
                    <div class="MusicList-item">
                      <div class="MusicList-item-nb">
                        <span class="text-color">
                          {{ index + 1 }}
                        </span>
                      </div>

                    <span class="MusicList-item-title--MAV text-color">
                      {{ topmusic.title }}
                    </span>
                    <span class="MusicList-item-author">
                      {{ topmusic.authors }}
                    </span>
                    <span class="MusicList-item-info">
                      <i @click="openPlayer(topmusic)" class="MusicList-picto fas fa-play"></i>
                      <i class="MusicList-picto fas fa-heart"></i>
                      <i @click="openInfo(topmusic)" class="MusicList-picto fas fa-plus"></i>
                    </span>
                  </div>
                </div>

                </div>
            </div>

            <span class="MusicList-title">Les challengers</span>
              <div
                @click="openPlayer(item)"
                v-for="(item, index) in musicItems" class="MusicList-item">
                <span class="MusicList-item-nb">
                  {{ index + 2 }}
                </span>
                <span class="MusicList-item-title text-color">
                  {{ item.title }}
                </span>
                <span class="MusicList-item-author">
                  {{ item.authors }}
                </span>
                <span class="MusicList-item-info">
                  <i @click="openPlayer(topmusic)" class="MusicList-picto fas fa-play"></i>
                  <i class="MusicList-picto fas fa-heart"></i>
                  <i @click="openInfo(topmusic)" class="MusicList-picto fas fa-plus"></i>
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </transition>
    <ButtonListen v-bind:playTitle="currentPlay"/>
    <ButtonAdd />
    </div>
</template>

<script>

import Header from '@/components/Header'
import Maps from '@/Maps'

import ButtonAdd from '@/components/ButtonAdd'
import ButtonListen from '@/components/ButtonListen'

import VueScrollTo from 'vue-scrollto';

    export default {
        name: 'MusicList',
        components: {
          Header,
          Maps,
          ButtonAdd,
          ButtonListen
        },
        data () {
          return {
            name: null,
            MusicListOpen: false,
            currentPlay: null,
            animateListing: 'row animateListing',
            TOPmusicItems: [
              {title: "C'est un titre", authors: "Bob", image: "https://picsum.photos/500/500/?random?ssf"},
            ],
            musicItems: [
              {title: "C'est un titre", authors: "Bob", image: "https://picsum.photos/200/300/?randomezqe"},
              {title: "C'est un titre", authors: "Bob", image: "https://picsum.photos/200/300/?randoezm"},
              {title: "C'est un titre", authors: "Bob", image: "https://picsum.photos/200/300/?raeazndom"},
              {title: "C'est un titre", authors: "Bob", image: "https://picsum.photos/200/300/?randezaom"},
              {title: "C'est un titre", authors: "Bob", image: "https://picsum.photos/200/300/?randzeom"},
              {title: "C'est un titre", authors: "Bob", image: "https://picsum.photos/200/300/?reaazeandom"}
            ]
          }
        },
        created() {
          this.getListing();
        },
        methods: {
          getListing() {
            this.MusicListOpen = false;
            this.animateListing = 'row animateListing';

            if (this.$route.params.id) {
              VueScrollTo.scrollTo('#Listing')
              this.name = this.getName();
              console.log(this.MusicListOpen);
              this.MusicListOpen = true;
              console.log(this.MusicListOpen);
              setTimeout(function() {
                this.animateListing = 'row animateListing animateListing--open';

              }.bind(this), 300);


            }
          },

          openPlayer(item) {
            this.currentPlay = item;
          },
          getName() {
            if (this.$route.params.id) {
              var param = this.$route.params.id > 1 ?
                'eme' : 'er';
              return this.$route.params.id + param + ' arrondissement';
            }
            return null;
          }
        },
        watch: {
          "$route.params.id": function (id) {
            this.getListing();
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    svg {
      position: absolute;
      left: 100px;
      top: 40px;
      width: 300px;
      height: 300px;
    }

    .animateListing {
      opacity: 0;
    }

    .animateListing--open {
      opacity: 1;
      transition: all 0.4s ease;
    }

    .MusicList {
      display: block;
      z-index: 100;
    }

    .MusicList-MAV {
      display: block;
      position: relative;
      padding-bottom: 60px;
      margin-bottom: 50px;
    }

    .MusicList-title {
      display: block;
      font-size: 1.6rem;
      text-transform: uppercase;
      border-bottom: 3px solid #424242;
      font-weight: 900;
      color: #424242;
      font-family: "Montserrat", sans-serif;
      padding: 20px 20px;
    }

    .MusicList-item {
      display: block;
      position: relative;
      width: 100%;
      text-align: left;
      padding: 20px 10px;
      box-shadow: 0 5px 5px rgba(0,0,0,0.03);
    }

    .MusicList-item-info {
      display: block;
      position: absolute;
      bottom: 0;
      right: 0px;
    }

    .MusicList-picto {
      color: #424242;
      margin-right: 15px;
      margin-bottom: 10px;
      font-size: 1.1rem;
    }

    .MusicList-item:hover {
      cursor: pointer;
    }

    .MusicList-item-cover {
      width: 100%;
    }

    .MusicList-item-cover:after {
      position: absolute;
      content: " ";
      bottom: 40px;
      left: 20px;
      color: white;
      background-color: white;
      border-radius: 50%;
      height: 100px;
      width: 100px;
      line-height: 1.1;
      padding: 10px;
    }

    .MusicList-item-nb {
      display: block;
      float: left;
      font-size: 2.3rem;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      padding-right: 20px;
      border-right: 1px solid rgba(0,0,0,0.2);
      margin-right: 30px;
    }

    .MusicList-item-nb-MAV {
      position: absolute;
      bottom: 40px;
      left: 20px;
      border: none;
      text-align: center;
      background-color: white;
      border-radius: 50%;
      height: 58px;
      width: 58px;
      line-height: 1.1;
      padding: 10px;
    }

    .MusicList-item-title {
      display: block;
      font-weight: 900;
    }

    .MusicList-item-title--MAV {
      display: block;
      position: relative;
      text-transform: uppercase;
      font-weight: 900;
      background-color: #fff;
      padding-left: 20px;
      padding-top: 10px;
    }

    .MusicList-item-author{
      display: block;
      padding-left: 20px;
    }
</style>
