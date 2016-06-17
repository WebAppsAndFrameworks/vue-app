// Require static content
require.context('./', true, /\.(html|webmanifest|te?xt)$/);
require.context('./', true, /\.(png|jpe?g|gif|svg|ico)$/);

// Require styles
require('./css/styles.scss');

const Vue = require('vue');

new Vue({ // eslint-disable-line no-new
  el: '#app',
  data: {
    message: 'Package Tracking App',
  },
});
