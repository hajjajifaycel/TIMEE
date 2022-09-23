<!-- eslint-disable no-unused-expressions -->
<!-- eslint-disable no-unused-expressions -->
<!-- eslint-disable no-unused-expressions -->
<template>
  <div>
    <Timer
      :timer="formattedTime"
      :state="timerState"
      :laps="laps"
      :periodCurrentTimes="periodCurrentTimes"
      @start="start"
      @pause="pause"
    />
  </div>
</template>

<script>
import Timer from '@/components/Timer';

export default {
  name: 'App',
  components: {
    Timer,
  },
  data() {
    return {
      timerState: 'stopped',
      currentTimer: 0,
      formattedTime: '00:00:00',
      ticker: undefined,
      laps: [],
      latestLap: '',
      snackbar: false,
      periodCurrentTimes: [],
    };
  },
  methods: {
    start() {
      if (this.timerState !== 'running') {
        this.tick();
        this.timerState = 'running';
      } else if (this.currentTimer !== 0) {
        this.currentTimer = 0;
      }
    },
    pause() {
      // eslint-disable-next-line no-sequences, no-unused-expressions
      (this.timerState = 'stopped'),
      this.laps.push(this.formatTime(this.currentTimer));
      this.periodCurrentTimes.push(this.currentTimer);
    },
    tick() {
      this.ticker = setInterval(() => {
        // eslint-disable-next-line no-plusplus
        this.currentTimer++;
        this.formattedTime = this.formatTime(this.currentTimer);
      }, 250);
    },
    formatTime(seconds) {
      const measuredTime = new Date(null);
      measuredTime.setSeconds(seconds);
      const MHSTime = measuredTime.toISOString().substr(11, 8);
      return MHSTime;
    },
  },
};
</script>
