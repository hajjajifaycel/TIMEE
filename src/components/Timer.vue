<template>
    <b-container>
      <b-row class="mt-5">
        <b-col lg="3" sm="3" md="3">
          <b>{{ toDay }}</b>
        </b-col>
        <b-col lg="5" sm="5" md="5"> </b-col>
        <b-col lg="4" sm="4" md="4">
          <b-button
            class="stop-button mr-2"
            variant="outline-secondary"
            @click="$emit('pause')"
          >
            <font-awesome-icon icon="stop" />
            Stop
          </b-button>
          <b-button
            class="start-button mr-2"
            variant="outline-success"
            @click="$emit('start')"
          >
            Start new
          </b-button>
          <b class="primary-color">{{ timer }}</b>
        </b-col>
      </b-row>
      <hr class="col-11 mt-4 primary-color" />
      <b-row class="mt-3 ">
        <b-col lg="2" sm="2" md="2"
          ><b> Period {{ laps.length + 1 }} </b><br /><b class="secendry-color">
            Current period</b
          ></b-col
        >
        <b-col lg="6" sm="6" md="6"> </b-col>
        <b-col lg="4" sm="4" md="4">
          <b class="primary-color">{{ timer }} </b>
        </b-col>
      </b-row>
      <hr class="mt-2 col-11 primary-color" />
      <b-row v-for="(lap, index) in laps" :key="index">
        <b-col lg="2" sm="2" md="2"
          ><b>Period {{ laps.length - index }}</b></b-col
        >
        <b-col lg="6" sm="6" md="6"> </b-col>
        <b-col lg="4" sm="4" md="4"
          ><b>{{ lap }}</b></b-col
        >
        <hr class="mt-4  col-11" />
      </b-row>
      <hr class="mt-5  col-11" />
      <b-row>
        <b-col lg="2" sm="2" md="2"></b-col>
        <b-col lg="6" sm="6" md="6"> </b-col>
        <b-col lg="4" sm="4" md="4">
          <b class="mr-2">Total</b
          ><b class="primary-color margin-total">{{
            computedTotalPeriods
          }}</b></b-col
        >
      </b-row>
      <hr class="mt-3  col-11" />
    </b-container>
  </template>

<script>
import moment from 'moment';

export default {
  name: 'Timer',
  props: ['timer', 'state', 'laps', 'periodCurrentTimes'],
  data() {
    return {
      toDay: moment(Date.now()).format('[Today,] D MMM '),
    };
  },
  computed: {
    computedTotalPeriods() {
      let sum = 0;
      // eslint-disable-next-line no-return-assign
      this.periodCurrentTimes.map(item => (sum += item));
      const measuredTime = new Date(null);
      measuredTime.setSeconds(sum);
      const MHSTime = measuredTime.toISOString().substr(11, 8);
      return MHSTime;
    },
  },
};
</script>
  <style lang="css" scoped>
  .primary-color{
    color:#60b669
  }
  .secendry-color{
    color:#999999
  }
  .stop-button{
    color:#cc5252;
    border-color: #cc5252;
    margin-right:15px;
  }
  .stop-button:hover{
    background-color:#fff !important;
    color:#cc5252 !important;
    border-color: #cc5252 !important;
    margin-right:15px;
  }
  .start-button{
    color:#60b669;
    border-color: #60b669;
    margin-right:15px;
  }
  .start-button:hover{
    background-color:#fff !important;
    color:#60b669 !important;
    border-color: #60b669 !important;
    margin-right:15px;
  }
  .margin-total{
    margin-left: 30px;
  }
  </style>
