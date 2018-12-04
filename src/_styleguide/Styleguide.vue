<template>
    <div class="">
        <!--<Header />-->
        <div class="col-md-6 col-md-12">
            <div class="SG-block">
                <span class="title title--lg">Titre large</span>
                <div class="SG-class">
                    .title.title--lg
                </div>
            </div>
            <div class="SG-block">
                <span class="title">Titre simple</span>
                <div class="SG-class">
                    .title
                </div>
            </div>
            <div class="SG-block">
                <span class="title text-color">Titre couleur</span>
                <div class="SG-class">
                    .title.text-color
                </div>
            </div>
            <div class="SG-block">
                <span class="text">texte simple</span>
                <div class="SG-class">
                    .text
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'

    export default {
        name: 'Styleguide',
        components: {
            Header
        },
        data () {
            return {
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .SG-block {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        margin-top: 20px;
    }

    .SG-class {
        display:block;
        background-color: #424242;
        color: white;
        font-size: 10px;
        width:100%;
        padding: 5px 20px;
        margin-top: 10px;
        text-align: left;
    }

</style>
