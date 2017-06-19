<template>
  <transition @afterLeave="afterLeave">
    <div class="vue-sui-toast" :class="extraClass" v-if="shown">
      {{ msg }}
    </div>
  </transition>
</template>

<style scoped>
  .vue-sui-toast{
    display: inline-table;

    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;

    position: fixed;
    top: 50%;
    left: 50%;
    text-align: center;
    z-index: 11000;
    transform: translate3d(-50%, -50%, 0);

    background: rgba(0, 0, 0, 0.8);
    border-radius: 20px;
    color: white;
    padding: 0 16px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    width: auto;
    max-width: 100%;
  }
  .vue-sui-toast.v-enter{
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(1.185);
  }
  .vue-sui-toast.v-enter-active{
    transition-property: transform, opacity;
    transition-duration: .4s;
  }
  .vue-sui-toast.v-leave-active{
    opacity: 0;
    z-index: 10999;
    transform: translate3d(-50%, -50%, 0) scale(0.815);
    transition-property: transform, opacity;
    transition-duration: .4s;
  }
</style>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true
    },
    extraClass: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      shown: false
    }
  },
  methods: {
    activate(){
      this.shown = true;
    },
    deactivate(){
      this.shown = false;
    },
    afterLeave(){
      this.$el.parentNode.removeChild(this.$el);
      this.$destroy();
    }
  }
}
</script>
