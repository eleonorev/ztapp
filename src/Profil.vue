<template>
      <div class="container">
        <Header />

        <div class="row">
          <div class="ZT-container-white Login-content">
          <div class="">
            <img class="Profil-photo"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIVFRUVGBYWFRUVFRUVFRUVFRUXFxYVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQFy0fHSUtLS0tLS0tLS0rLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tNzctLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAGAQIDBAUAB//EAEEQAAEDAQQHBQQIBQMFAAAAAAEAAgMRBAUhMQYSQVFhcYEikaGxwRMy0fAjM0JSYnLh8QcUgpKyNHOiFSRDU8L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAiEQEBAAIDAAICAwEAAAAAAAAAAQIRAyExEkETMiJCUQT/2gAMAwEAAhEDEQA/ACwhKQntao35qkmuITA9OcE0MwQC0VaVuKndVRvGKARjdijtswY0nd6KZjll3g3XIZsGJU2qxmwLaL5Y20e1naX6oAjaKard5odqz9JdITPQNqGbBvO0lTaVXcWkup9oDpisP2FS3r31U7XrSi1qeRsCmdHQADMqw+wkNG/M9NinZ6Z5FE0hWnWYqExlBIaJCpSzekFFWwiKRTFw3JQ5v3fFBIFMLS6mqTUbjjRSCNh3jqmvs+4oAg0UvMh/s9fUr7pOLdbc4bij2yXhV3s5BqyDZ9lw3sO0Lx5pLcRgiy47+EgEUxxGLH7WnYR8E5Sseja2FUjDgs267w16sf77e5zdjmq/7UZKknBKSo4+CWqZOAUhamUUiAbRcuouQBBLgEjWpH4paoCJya0p781FigHFqr2qdrRiaKS0S6o47Aha9LaKkuNdw9Apyul447XpbeXYNFBvXWaoNTjv3oOvHSB7cGnV5epWazSacGpeSNzsR3FQ1moMb8gD2n5yyKDJQ1tW86cN4WlHe7pRTIuwHVJLcEjzUmqm5aXMbl4GmHt13K8bSKDlTxr6rWbo4ONdxUM9ykbFPzh/iqix7afPP4dya9rSK7/ROluxw3hVJ43tptATlibhYitEW755rPkwVt73bQVWeCditmhLklVN7F3A9Ux7CMxRMtG6ynilVZK0oJfljriFVIoahXrMahQzx0qEAS3JeRe1uP0kWLPxN+0wo2s8we0PGTgCOq8ksU5Y4OH2TXptXoejVta5rmDIHWbwa7Z0NVUTW80p7VExyldsVILVP1lEClOCAckTddKgCFrErsE1z01z0GUuqodYCpJwCkqqktC/gM+aKajelooNbacBwCEre4gE/aOXAcFvX1J2qbkNXhJuWOV7dGE1A/bQBjt2D1KpRwl5rsC2P+mvkOA5nZ0UjLIXOEMQqTmfU8Als/isaKXeZJK7G+a9DbYaBP0WuIRRjDvzPH16ralhWWXbfHroNTWRVJbKiGaJUpI1m1lYUliG5VJbtadiIXRKF8KJQGZLpbuVd90s3ImkhVWSFVulqBuS7GblRtN1tOxFE0KpTRI+VK4ygq2XcWrPLaFG88AKHrzsFMQtsc9+ufk4tdxXsRwUtoCgsJzCtPyVudQyKI9EbXSUNJzq31Hkh+QKawS6kjHcQqFesAqcnAKjYpdZoKsEq2aXWXayYClqgi0XJEqBtvOkTqYJksacwEIMjsqqo1vZrtOKtWj3T1UOrRvT0U2nJsKXu7tFZ9jsvtDU+6Nm9Xr0FX0U9nGqyu4E9cgubLJ244q9uBNIYm4nAnYOA+KINGdGmx54uNNc/wDyFQ0fGvIabOzreZG818gjmzgNAA/fiUodqwGgDBVp1KZVWmkTpSKc4VJ7VakmaTSoruqKqByzrbFAWqN7VYITHNUxalIxVpGLQkCrPamTOkjVSaJaj2qpaKDMgdUwx54lnWuGoK25mrPnamAhJHqSc1I/Iq3fEG0KnG6oXRjdxw8mPxyROFVEFJkaJXMVMx9o1a9Zg4jxC3KoK0TtFKDc6nfgjHWVxnYmanKJjk5MHLk1cghOAkcpQFC7NBmPNQQq7n9jHd5KyWqhertWNx4eiy5L024Z2FTLrPceJU9pmDYSdwPfU09FQhOZ3pl5T/Qv4Op4grn+3VvoQ6HDAcsVu3ne2p2WirsgOXp8Fh6Jijei1fZBhLs3HM+gTp447Z04tUmbiBurqjuBBVKW4pTnIB/U4+dVqT21VTbVO2s42YdH5f8A2N73fBbFy2SZmEjqgYt7ROdajHoohalbgtSWx8NLrk1cHVSJGjkVSYqzKVn2mRAZl6CQ+4adaZfusG0XbIftjvPyVt2mZZ8syqWxN45kx5Lqk++O8hQOhnZkSRzJHcStZ8qic9V86n8M+mV/Na4LXijvPl8FmjsuI2FblqgD+YyKzrys+FVeOU2x5MLrtWmbtTWroJaihT9VauZpXJJqyc6HuIXoDCvO7v8Afbzp3r0CB2CrGpqcBLrJmskqqSlokSLkAVzHBcAmOITqoBlMVl3/APVO4rWI2rKv76sD5wBWHK6OH7BowoOIWXbZqxScX+gqtRxWFM6rKb3E95AHkso3y8ehaMjsVT72tgbmaAmlTg0E5VOxBFv0jtdkGqxrNR1dWTVJ/pONA4biheSWe0ucXOc6pqcaNryGCuce+x+eY9SdvQP55ri4e0jBYaEF4FdxG8HgnAPI1hRw3tIcPBBMOjbnNcddlWCpB2YVpzWNDK5hqxxad7SR5J3in1RP+qz2PUY51bhlXn1j0mkFBL2x94AB450wci67Le2QAtIIWWWFxdOHLjyeCqxy1CskLKu+TFbFMFAyipaCsW1yLYtiH7Y5AkZ9pkWfLIpbbNSpyG07OqxWWuSZ/s7O3Ha92HcDl5q8cbSz5McJ20HV5c8FWltLRjrA1pQA71gW9j2yOa92s4GhNajom2WEPOrrapPuk5E7juqtpxT7rnv/AFX6gjZODkfgktLKtKH57O+M41CuWO3Sv7OHEkZDipvHruD88y6sUJOy4q1G+oqFBeIo5JZHbFrPHNl60bNLqkO3EHuKOLqtrZG1aa+Y5oBBzW3opYpHSCSpDBWuPvHdxTiKNmJwCQFPaVaHaq5LrLkAThlF0hUb3ppekDwVm3/7n93ktCuI5hVL5ZrMPzmsOV08AKtJ1Wk7gT8PFDzG1LB+JvmiC+hRlN5p3Yn0WLZW/SR8Se4D9VGLXJtX9ZGGzOOr2yA0EEjEkCpAwNATmqD4mQWfWa0Va2tTteaAA/1EIgvWCsI4UPcQVi6QRf8AbOpvYemuFeHic+qBDM7EaxoTU45k5k8VGUtF2rxWzn7NWhcl4GGQY9kmjh6qgWpqLNzR4243cewXdLWhRTDHVoKBNFpS6JhOdAvR7oFY1xfenpZZbmw9eZoENWx6JL9FKoPvSSjSeaX2cvQRv23F7iwHsg48T+izo5C33SRXdgmk1PNLqrtxmpp5ueVyy2bVcnaqaQmgVWYCeEF2JxaTtqMj1BCpXdZQ0kEZHD40V7RuM+xNdrjT+1qUDtu5rLO9Onjm7sP3wO2Oqq2Y4rRvyPEFZkKrHxln+1X6r0HRyz6kDGkY5nmTVAVkp7QA5VHmvSrOcArxZZLFFwCYSpGKkk1SlT1yA3nFMLlLRM1KoBDJ5hLaWVBG8Jro0r3YLDmdHBewRpE3GnzUn9Fh3fjag3Y0avXb41RBfZ7ZOwVPRoQlckx/m48cHuoeNQfVZ4+NsvXqU9j1oaAVNMAhGGUPDrPM3UkoWlh+0DhVh24L0SwDshZ9+aPR2htHDI1qKBw5HYnjdDObeJXvYHQvLXDrvGxw4FZ69UvHRKWmqHiVoyEtddv5ZW4jrVDU+hU1fqz/AElrvGrfJazOMbx0Igq5dtgMrgKdkULjuHxKJbJoW6vbZLyDWj/kXHyRDZtHXABoaI2cDV3Xj3pZckPDitrtG4uyd1TTvR9dbqMQ/YLCI2hrRl81RBZITRc293bts60xb/b2SUD3jiPnevQ78gJjdwxQPJCHYbCl5T+gXfF2lji5o7LjUcCcS352LJqvRXWNwBBaHtOYOaxbbcMZxaJG8C0O/wCQcD31XVjyRxZ8N31AorFjszpHBjRUnIfOxawuKh91x5hrfHWPktCCzSMFGUiBzLe1IeBeRgOAATvJEziyv0s2mVlmjbEDrPpg0ZuJzcRsbWqq2VppjntSRWJrK0xJxJOJJ4nMqwwLHPLfjp48Lj6yb+Z2VhQ7Vq6SzH2upXANGHE1/RZMS1w8c3Jf5VeiPaB5L0e7X1YDwHkvOYD2m8wju4Xdgs2sJHTMeCuMcmuCpGFQtClruVpSVXKPFKgaEqULiUhSMuqq8qsMxUNoFAVlzeN+CdgbSOSjZOVO8/ugiG0ezex/3Hh2GeBBIRjpP9W473DwqgafJZ4eNeR75YpgWtcDUOAIO8EVCvxyBAP8N77E1m9g4/SQZfiiPukcsu7eikWhTl1V4/yjTdQqMtCpC0rjaFG1zFYcAoJAm+2SF6W1yELVfgtuq0CmQFafNVQqntjO5LZ2RSvq9n6pbGw1NRWmQWNYLtIaNbP4mqJXQncoZGopxizwKg+NbdoasycJGz5GqpMrcxVGZycCs9OgbUphKq3rbPZRGnvP7LfU9Fcm2eVkm6G71n15nuGRNByGA8lBEmBOizXVHn27u15p90/OaOLuOrL+dlerf0KBjkOCNLK6r4DvB/x/ROJogaE4JgKkCtDqlKuqlQBICuTnZriEBIwBUb0fRjjwV5uSyr7d2KbyB6+i5+aungn2CNK3dinEeSCrRtRjpM6rTzQdaUsPF8hl0XnJZpmzRGjmno4bWu3ghevXZfEdqjEsRpsew+8x248Nx2rxSTMq1dt5SQPEkTtV23aHD7rhtCrPD5RHHyfCvaTIlEiFbk0rjtFGu+jk+6Tg4/gO3kcUQMlXLlLL278cplNxea9TAqnG5WWFI1O1WOYAmKeQfhqD3Eivisv+RLgTJapWyDIFrXA8yaEImamSQNdmFUq8c9Bj+Tc3EWmRztmqAFpWSyzltZZ5DubUZfiIFfFajYGtyFFHK9Foyz2gncsq0vVq1TLHtU6TNDaJFQkenTSrNt94sizNXfdGfXcqk34nLKSbqxPO2Npc40A7zwHFClvtjpX6x5NGwDcm2y1ukNXHkNg5BQLoww04+Tk+XU8LsToswk2J0GYVsV52RRhcz9Yw/hYT34DyKEN6L9GGfRNdtrToMAE4WQgBUgKYAnBWg6q5JVcgCpKSkCR/BBlBr0WHpDLQDhU9TgFuBtAhXSmSrmsG1wHQfqubl/Z18P6hjSPBpQnbQivSA1B5n0QpbfVGA5FGYbVEpHOxITCFqwIVt3VpRPDQE+0b915xHJ2Y61WIuSsl9PHK49x6ddOlcEtAXezd919B3OyKJIrQvD0T6H2iSrmte7ChDa1HQHJY5cX+OnDnt6r1Jsyf7ZCIviRuDmg8sPipBf7drXDuPqsvjXR8oJZLQqFotSxZL8bsDvD4qhab1ccm05mqPjS+UaVrtSHrwvmNmbqnc3E/osO97dI4kF5puGA8FlALbHi/1z58/wBSNK13y9+DeyOGfes1yRctZJPHPcrfXLly5NJ4GCdZ80rR2eqbDn3+SDX2ot0Wd9BTc/4IRairRB30bx+IH57k4miVpTyokoKuIPquTdZKgCyq4ppTkA+qB74l1p/ynyxRnLJQd68/nlq9x3up44+S5uT9nXw/qz75OA5/BCtpx70TX0ez/chi0eqMRmoPzKQJXDErjl1WrE1cntbtXMbVBERf/DyGsrjswCEnjFeh/wAObLqjWIwO3ipz8XhO2ret39o0CxZ7IQja3xglZk1kXNt2SBQxJupv3Lbnsaz7TBQHkqmQ0C7zb2lU1VqXtFShVWaGncFvL048p2pFIppGbVFRUkgXJWrmhBLTG9lQMwKsWfFqh1e11SNcCJ9DDhIOXqhdpwRJoc7tPG8A9x/VVE0WEJWBISnAq0HUXJFyAKClSUTo0Gq2zJ35XHwQIWUdjsr4o6tf2/yHyQZPv3/sufl9dXD4wr8dRo+fnNDM5x71u35JU04+Q/VYZbVwCMfCz9QSMTxZXEDDeiW47j9oauyGKs3vZmsGq0cE/kXwoWdD2fBRwx+C0bbHSjdybBZSWGmZIA6p7L4qQs5LmjeAV6TozJ7OLU70LSWT2ZjJGIAB8lu2SWizzu23HhoTRzVwPyFKQsyB3FWWS/PzsWOm7p41lWuLBakr1nzMLs8AnCBt82YkV3BVpoey3i0edET3jZwRT5oMvngsi3Wf6M0+yD6EeRWsrHPHvbBkh2KlI2i2B2hXbtVS1RbVpKxyxUWBTS2VzACWkA5HYRwKjAW7cE2vWE0IIwa7I/A8U7dJk2yrEMxwSauOtuH7KzaLN7KQtxFDhXPko7U2jeePTZ88Ej10bDkiHRfsvad4cD3j9EOQFEdyD3BvD6c64eIVxnRjmuqo43VAO/FPpVWguslSaq5AFwSJQFzggKto+1xa4eCCLQaA/h9Ua251ATwPjggK8ZaOcOdVz8vrq4vA1b31dyqo7ns/tJabgT3LrVgSptF5aTn8p8wj6P8AtBLZLUImnks8ya5cTsx6/JXWw9qiiL9UeJ67O5RGlZs/aceCI9GrBrubhgMfh6rC9lQnw4jYe5ei6HWH6ISUzcAOQH7q53Wd6jE0huwlmu3HU1tYb2axBPSg6VWdZnVR7DEA8A0oXPad3aJI8kH3zdRs0lR9S89k/dO1h9OHJTlj01wy+k9mkWlZS0ka+XDPv2LGhdt3+e3071bZJRZfbWzcXK+u2vimuYpoI6qZ7K0aNufLaj0tajIms5pWmaz2WIu1jTs6oqfnqjAWMu7IGatXRd7REWmhOs5h6HPuotMMbWfJlJHjckBieWnZ5JZ2VFQinSy6MSQPdJaTyyPchiJpBLSrrKf4x5hTBPsUxY4OGYIKfbI8VXYr+mV6ogv+j3RyDItqTyosqd+tj802eqdbp/omMrlWvhQKtC6oSkO3ssaJ7lP1J4v9EM7UQXDP9WNxd40VxFF1nFAW7iR0OI81KAom4PPEA+nwUrirZlolTarkAY7Vzkq5AZ97e6eRXnt7++9cuWHJ66uP9Q9bfQeSj0f+v/pPmFy5L6H9o2rR75Udsy+dyVcpjWo5ch+Ueq9T0Y/0kXTzXLleDPMsvvj/AHB/mVS0s/0cv5mf5hIuTvhT2BSD3W8/RWHZdUq5ctdjcsuSlh+s6fBcuTia3bs+3+RLY83f7jvJq5cujj8cvJ7QrpF/5OY9UBWz3xySrk6J6ybVtVOL3hzXLkTxGXpJ/V3oks2feuXJ/SUxWzo977evouXJwsho73/6fVSLly0ZlXLlyA//2Q==" alt="">
          </div>
          <div class="">
            <div class="Profil-Section">
              <span class="text-color">Mon profil</span>
            </div>
          </div>
          <div class="">
          <div class="input-label text-color">
            Choisir son pseudo
          </div>
            <input type="text" placeholder="" class="input" name="" value="">
          </div>
          <div class="">
          <div class="input-label text-color">
            A propos de moi
          </div>
            <textarea class="input" name="" value=""></textarea>
          </div>

          <a class="Profil-action" href="#">Se déconnecter</a>
          <a class="Profil-action" href="#">Supprimer son compte</a>

          </div>
        </div>
          <ButtonMAJ />
      </div>

</template>

<script>

import Header from '@/components/Header'
import ButtonMAJ from '@/components/ButtonMAJ'

    export default {
        name: 'Profil',
        components: {
          Header,
          ButtonMAJ,
        },
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


    .Login-content {
        display: block;
        text-align: left;
    }

    .Profil-photo {
      display: block;
      border-radius: 50%;
      text-align: center;
      max-width: 300px;
      margin: auto;
      margin-bottom: 40px;
      margin-top: 30px;
    }

    .Profil-Section {
      display: block;
      text-align: center;
      margin-bottom: 20px;
      font-weight: 900;
      font-size: 1.7rem;
      width: 100%;
      padding: 0 10px;
      text-transform: uppercase;
      background-color: rgba(0,0,0,0.03);
    }

    .Profil-action {
      display: block;
      padding-bottom: 7px;
      padding-top: 7px;
      margin-bottom: 30px;
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      color: #424242;
      text-align: center;
    }

    .input {
      border-radius: 0;
      border-left: none;
      border-right: none;
    }

    .input-label {
      padding-left: 20px;
    }

</style>
