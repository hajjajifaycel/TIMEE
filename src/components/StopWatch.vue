<template>
  <div>
    <p>{{ time | secondsInMinutes }}</p>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'stopwatch',
  props: {
    running: {
      type: Boolean,
      default: false,
    },
    resetWhenStart: {
      type: Boolean,
      default: false,
    },
    restWhenStop: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    running(newVal, oldVal) {
      if (newVal) this.startT();
      else this.stopT();
    },
  },
  mounted() {
    if (this.running) this.startT();
  },
  data() {
    return { time: 0, timer: null };
  },
  methods: {
    stopT() {
      clearInterval(this.timer);
      if (this.restWhenStop) this.resetT();
    },
    startT() {
      if (this.resetWhenStart) this.resetT();
      this.timer = setInterval(() => {
        // eslint-disable-next-line no-plusplus
        this.time++;
      }, 1000);
    },
    resetT() {
      this.time = 0;
    },
  },
  filters: {
    secondsInMinutes(seconds) {
      return moment('2015-01-01')
        .startOf('day')
        .seconds(seconds)
        .format('HH:mm:ss');
    },
  },
};
</script>

<style scoped>
p {
  font-weight: bold;
  font-size: 40px;
}
</style>
