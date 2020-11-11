<template>
  <v-app>
    <v-main>
      <div class="header">
        <router-link to="/vuetify">
          <v-btn
              elevation="2"
          >Vuetify</v-btn>
        </router-link>
        <router-link to="/antd">
          <v-btn
              elevation="2"
          >Antd</v-btn>
        </router-link>
        <router-link to="/element-ui">
          <v-btn
              elevation="2"
          >Element UI</v-btn>
        </router-link>
        <router-link to="/syncfusion">
          <v-btn
              elevation="2"
          >Syncfusion</v-btn>
        </router-link>
      </div>
      <div class="view">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.header {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;

  & button {
    margin-right: 20px;
    }
}
.view {
  padding: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
</style>
