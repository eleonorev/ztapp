<template>
  <div class="ZT-Background Index">
    <div class="container">
      <div class="row">
            <div class="col-md-6 col-md-12">
      <div class="Block">
        <img class="Logo img-fluid"
        src="@/assets/images/zt-logo.png" />
      </div>

            <div class="BlockChoice text-bold">
              <router-link to="Arrondissements" class="btn BlockChoice-item">Go !</router-link>
            </div>
    </div>
  </div>
</div>

</div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      connect: false,
      suscribe: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Index {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #fff;
    background-image: url('assets/images/background.png');
    background-size: cover;
  }

  .Login-content {
    display: block;
    margin-top: 40px;
    width: 100%;
  }

  .Logo {
    display: block;
    margin: auto;
    max-width: 800px;
    width: 80%;
    margin-top: 80px;
  }

  .BlockChoice {
    text-align: center;
    display: block;
    color: #fff;
  }

  .BlockChoice-item {
    text-transform: uppercase;
    cursor: pointer;
    color: #fff;
    font-size: 2.5rem;
    line-height: 1.1;
    margin-top: 90px;
    border-top: 6px solid #fff;
    border-bottom: 6px solid #fff;
  }

  .BlockChoice-separator {
    display: block;
    position: relative;
    width: 100%;
  }

  .BlockChoice-separator::before,
  .BlockChoice-separator::after {
    display: block;
    content: " ";
    width: 43%;
    height: 4px;
    background-color: #fff;
    position: absolute;
    top: 9px;
  }

  .BlockChoice-separator::before {
    right: 0;
  }

</style>
