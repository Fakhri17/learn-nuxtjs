import Vue from 'vue'
import moment from "moment";

Vue.filter('formatDate', (value, format) => {
  return moment(String(value)).format(format);
})