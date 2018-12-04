<template>
      <div class="container">
        <Header />
        <div class="ZT-container-white">
        <transition name="fade" mode="out-in">
        <div v-if="MusicListOpen" :class="animateListing" id="Listing">
          <div class="col-md-12 ZT-container">
            <span class="title title--lg text-white title-shadow">
              <span class="ZT-title">Paris</span> </br>
              <span class="ZT-title-location">{{ name }} 1er arrondissement</span>
            </span>
          </div>
          <div class="Login-content">
          <div class="col-md-12">
            <div class="MusicList">
              <div class="MusicList-MAV">
                <div v-for="(topmusic, index) in TOPmusicItems" class="row"
                >

                    <div class="col-6">
                    <img class="MusicList-item-cover"
                    @click="openPlayer(topmusic)"
                    v-bind:src="topmusic.image"
                    alt="" />
                  </div>
                  <div class="col-6">
                    <div class="MusicList-item">


                    <span class="MusicList-authors text-color">
                      @{{ topmusic.authors }}
                    </span>
                    <span class="MusicList-title">
                      {{ topmusic.title }}
                    </span>
                    <span class="MusicList-item-info">
                      <span @click="openPlayer(topmusic)" class="MusicList-picto MusicList-picto--play fas fa-play">
                        <div class="MusicList-picto-bar">
                          <div class="MusicList-picto-bar-play">
                              176 plays
                          </div>
                        </div>
                      </span>
                      <span class="MusicList-picto MusicList-picto--like fas fa-heart">
                        <div class="MusicList-picto-bar">
                          <div class="MusicList-picto-bar-like">
                              120 likes
                          </div>
                        </div>
                      </span>
                      <div class="MusicList-item-nb MusicList-item-nb--lg">
                          N°{{ index + 1 }}
                      </div>
                    </span>
                  </div>
                </div>

                </div>
            </div>
            <div class="MusicList-followers">
              <div class="MusicList-followers-title">
                Ils veulent prendre la place de {{ TOPmusicItems[0].authors }} !
              </div>
              <div
                @click="openPlayer(item)"
                v-for="(item, index) in musicItems" class="row MusicList-item MusicList-item--border">
                <div class="col-4">


                <img class="MusicList-item-cover"
                @click="openPlayer(topmusic)"
                v-bind:src="item.image"
                alt="" />
                  </div>
                  <div class="col-8">

                <span class="MusicList-item-nb">
                  N°{{ index + 2 }}
                </span>
                <span class="MusicList-authors text-color">
                    @{{ item.authors }}
                </span>
                <span class="MusicList-title">
                    {{ item.title }}
                </span>
                <span class="MusicList-item-info">
                  <span @click="openPlayer(topmusic)" class="MusicList-picto MusicList-picto--play fas fa-play">
                    <div class="MusicList-picto-bar">
                      <div class="MusicList-picto-bar-play">
                          176 plays
                      </div>
                    </div>
                  </span>
                  <span class="MusicList-picto MusicList-picto--like fas fa-heart">
                    <div class="MusicList-picto-bar">
                      <div class="MusicList-picto-bar-like">
                          120 likes
                      </div>
                    </div>
                  </span>
                </span>
              </div>
            </div>
            </div>

            </div>

          </div>
        </div>
      </div>
    </transition>
    </div>
    <ButtonAdd />
    <ButtonListen v-bind:playTitle="currentPlay"/>

    </div>
</template>

<script>

import Header from '@/components/Header'

import ButtonAdd from '@/components/ButtonAdd'
import ButtonListen from '@/components/ButtonListen'

    export default {
        name: 'Home',
        components: {
          Header,
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
              {title: "C'est un titre", authors: "Bob", image: "https://picsum.photos/300/300/?randomezqe"},
              {title: "C'est un titre", authors: "Bob", image: "https://picsum.photos/300/300/?randoezm"},
              {title: "C'est un titre", authors: "Bob", image: "https://picsum.photos/300/300/?raeazndom"},
              {title: "C'est un titre", authors: "Bob", image: "https://picsum.photos/300/300/?randezaom"},
              {title: "C'est un titre", authors: "Bob", image: "https://picsum.photos/300/300/?randzeom"},
              {title: "C'est un titre", authors: "Bob", image: "https://picsum.photos/300/300/?reaazeandom"}
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

              this.name = this.getName();
              console.log(this.MusicListOpen);
              this.MusicListOpen = true;
              console.log(this.MusicListOpen);
              setTimeout(function() {
                this.animateListing = 'row animateListing animateListing--open';

              }.bind(this), 300);



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
      width: 50%;
      padding-bottom: 60px;
      margin-bottom: 50px;
    }

    .MusicList-followers {
      display: block;
      background-color: #FC3F82;
      padding-top: 40px;
      padding-bottom: 50px;
      margin-top: 20px;
    }

    .MusicList-followers-title {
      font-family: 'Montserrat';
      color: #fff;
      font-weight: 900;
      font-size: 1.8rem;
      line-height: 1.2;
      text-align: center;
      text-transform: uppercase;
      width: 70%;
      margin: auto;
      margin-bottom: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
      border-bottom: 7px solid #fff;
      border-top: 7px solid #fff;
    }

    .MusicList-item {
      position: relative;
      text-align: left;
      padding: 20px 0px;
      margin: auto;
      margin-top: 10px;
      background-color: #fff;
    }

    .MusicList-item--border {
      margin: 15px;
    }

    .MusicList-item-info {
      display: block;
    }

    .MusicList-picto {
      color: #424242;
      display: flex;
      float: left;
      width: 100%;
      height: 24px;
      margin-right: 15px;
      padding-right: 15px;
      font-size: 1.1rem;
    }

    .MusicList-picto--like {
      color:  #F5A623;
    }

    .MusicList-picto--play {
      color:  #3861D8;
    }

    .MusicList-picto-bar {
      display: block;
      float: left;
      width: 100%;
    }

    .MusicList-picto-bar-like {
      width: 80%;
      display: block;
      height: 15px;
      border-radius: 10px;
      background-color: #F5A623;
      margin-left: 10px;

      font-family: "Montserrat", sans-serif;
      text-align: center;
      color: #fff;
      text-transform: uppercase;
      font-size: 0.5rem;
      line-height: 1.9;
    }

    .MusicList-picto-bar-play {
      display: block;
      width: 60%;
      border-radius: 10px;
      height: 15px;
      background-color: #3861D8;
      margin-left: 10px;

      font-family: "Montserrat", sans-serif;
      text-align: center;
      color: #fff;
      text-transform: uppercase;
      font-size: 0.5rem;
      line-height: 1.9;
    }

    .MusicList-item:hover {
      cursor: pointer;
    }

    .MusicList-item-cover {
      width: 100%;
      border-radius: 50%;
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
      font-size: 1.8rem;
      float: right;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
    }

    .MusicList-title {
      display: block;
      color: #000;
      font-size: 0.8rem;
      line-height: 1.3;
      margin-bottom: 10px;
    }

    .MusicList-authors {
      display: block;
      font-weight: bold;
    }

    .MusicList-item-nb--lg {
      font-size: 3.5rem;
      color: #000;
      font-weight: 900;
      border-bottom: 7px solid #000;
      margin-right: 20px;
      line-height: 1.1;
      padding-left: 30px;
    }

    .MusicList-item-title {
      display: block;
      font-weight: 900;
    }

    .MusicList-item-title--MAV {
      display: block;
      position: relative;
      font-weight: 900;
      background-color: #fff;
    }

    .MusicList-item-author{
      display: block;
    }
</style>
