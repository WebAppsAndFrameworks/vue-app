// Require static content
require.context('./', true, /\.(html|webmanifest|te?xt)$/);
require.context('./', true, /\.(png|jpe?g|gif|svg|ico)$/);

// Require styles
require('./css/styles.scss');

// Require dependencies
const Vue = require('vue');

// Define Constants
const BASE_API_URL = 'https://api.goshippo.com/v1/tracks';

new Vue({ // eslint-disable-line no-new
  el: '#app',
  data: {
    carrier: '',
    trackingNum: '',
    response: {},
  },
  methods: {
    getShippingInfo: function() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', [BASE_API_URL, this.carrier, this.trackingNum].join('/'), true);
      xhr.withCredentials = false;
      xhr.onload = () => {
        this.response = JSON.parse(xhr.responseText);
      }
      xhr.send();
    },
  },
});
