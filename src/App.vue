<template>
  <div class="game-container">
    <h1 style="@import url('https://fonts.cdnfonts.com/css/agency-fb'); font-family: 'Agency FB', sans-serif;">LE COOKIE CLICKER</h1> <img src="/CookieCat.gif" style="width:100px; position: sticky">
    <h2 style="font-family: 'Agency FB', sans-serif; font-size:small; font-weight:lighter"> Par Joao Gabriel MARQUES DINIS</h2>
    <p style="font-size:50px; font-family: 'Agency FB', sans-serif;">COOKIES<br> {{ cookies }}</p>
    <p style="font-style: italic; color:gray">[{{ productionAuto }} COOKIE/s]</p>
    <button @click="addCookie">🍪 CREER UN COOKIE 🍪</button>
    <div>
      <h2>AUTOMATISATION</h2>
      <hr>
      <button v-for="upgrade in upgrades" :key="upgrade.id" @click="buyUpgrade(upgrade)">
        {{ upgrade.name }} (+{{ upgrade.boost }}) - {{ upgrade.cost }} cookies
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['cookies', 'productionAuto']),
    ...mapGetters(['getUpgrades']),
    upgrades() {
      return this.getUpgrades;
    }
  },
  methods: {
    ...mapMutations(['ADD_COOKIE', 'BUY_UPGRADE']),
    ...mapActions(['startAutoProduction']),
    addCookie() {
      this.ADD_COOKIE();
    },
    buyUpgrade(upgrade) {
      this.BUY_UPGRADE(upgrade);
    }
  },
  mounted() {
    this.startAutoProduction();
  }
};
</script>

<style>


body, .game-container {
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #0f0f0f;
  color:azure;
}
button {
  margin: 5px;
  padding: 10px;
  background-color: #0b0b0b;
  color:azure;
  border: 2px solid azure;
  border-radius: 4px;
  font-size: 16px;
}
</style>
