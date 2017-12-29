<template>
  <div class="app">
  	<!-- <transition name="fade" appear> -->
  		<router-view/>
  	<!-- </transition> -->
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.app{
  height: 100%;
}
</style>
<style lang="scss">
@import './assets/scss/style.scss';
/*.fade-enter-active {
  animation: fade-in .2s linear;
}
.fade-leave-active {
  animation: fade-in .2s linear reverse;
}
@keyframes fade-in {
  0% {
    opacity : 0;
  }
  50% {
    opacity : 0.5;
  }
  100% {
    opacity : 1;
  }
}*/
</style>
