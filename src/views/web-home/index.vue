<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{ '測試 - ' | filterDemo }}
    <comp1></comp1>
    <comp2></comp2>
  </div>
</template>

<script>
import comp1 from './components/comp-1'
import comp2 from './components/comp-2'

export default {
  name: 'home',
  components: {
    comp1,
    comp2
  },
  created() {
    this.$store.dispatch('SETDATEPICKERDATE', { starttime:'123', endtime:'123'})
    console.log(this.getVuexData);
    console.log(this.getVuexStaticTime);
    console.log(process.env.VUE_APP_DEMO);
    this.imMixinMethod();
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
