<template>
  <div class="switch" :class="{'on': activate }">
    <div class="ball" @click="changeState" :class="{'on': activate, 'off': dactivate }"></div>
  </div>
</template>

<script>
export default {
  name: 'Switch',
  props: {
    on: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activate: false,
      dactivate: false,
    };
  },
  methods: {
    changeState() {
      this.activate = !this.activate;
      this.dactivate = !this.activate;
      this.$emit('update:on', this.activate);
    },
  },
  mounted() {
    this.activate = this.on;
  },
};
</script>
<style scoped>
  .switch {
    width: 100px;
    height: 25px;
    border: solid black 2px;
    border-radius: 12px;
    background-color: white;
  }

  .switch.on {
    background-color: skyblue;
  }

  .ball {
    position: relative;
    width: 30px;
    height: 30px;
    background: lightgray;
    border: solid black 2px;
    box-shadow: 4px 2px 2px black;
    border-radius: 15px;
    top: -5px;
    left: -5px;
  }

  .ball:hover {
    transform: scale(1.1);
  }

  .ball.on {
    animation: switchon 0.5s linear;
    left: 75px;
    background-color: lightskyblue;
    box-shadow: -2px 2px 2px black;
  }

  .ball.off {
    animation: switchoff 0.5s linear;
    left: -5px;
    box-shadow: 2px 2px 2px black;
    background: lightgray;
  }

  @keyframes switchon {
    0% {
      left: -5px;
      box-shadow: 2px 2px 2px black;
      background: lightgray;
    }
    100% {
      left: 75px;
      box-shadow: -2px 2px 2px black;
      background-color: lightskyblue;
    }
  }

  @keyframes  switchoff {
    0% {
      left: 75px;
      box-shadow: -2px 2px 2px black;
      background-color: lightskyblue;
    }
    100% {
      left: -5px;
      box-shadow: 2px 2px 2px black;
      background: lightgray;
    }
  }
</style>
