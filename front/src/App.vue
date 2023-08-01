<template>
  <v-app>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

  @import '@/assets/styles/global-styles.scss';

<script lang="ts">
 import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
    },
  })
  export default class App extends Vue {

  }
</script>

<style lang="css">
  @import '@/assets/styles/global.css';



  html {
    font-size: 62.5% !important;
  }

  .view-content {
    background-color: #d1fde8;
    height: 100%;
  }

  .v-application {
    overflow-y: hidden !important;
  }

</style>
