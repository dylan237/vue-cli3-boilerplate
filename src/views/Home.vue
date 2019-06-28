<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created() {
    this.$store.dispatch('SETDATEPICKERDATE', { starttime:'123', endtime:'123'})
    console.log(this.getVuexData);
    console.log(this.getVuexStaticTime);
    console.log(process.env.VUE_APP_DEMO);
  },
  computed: {
    getVuexData() {
      return this.$store.getters.GETDATE;
    },
    getVuexStaticTime() {
      return this.$store.getters.GETORIGINDATA;
    }
  }
}
</script>
