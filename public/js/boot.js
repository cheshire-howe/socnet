require.config({
  paths: {
    jQuery: '/js/libs/jquery-1.11.0.min',
    Underscore: '/js/libs/underscore-min',
    Backbone: '/js/libs/backbone-min',
    text: '/js/libs/text',
    templates: '../templates'
  },

  shim: {
    'Backbone': ['Underscore', 'jQuery'],
    'SocialNet': ['Backbone']
  }
});

require(['SocialNet'], function(SocialNet) {
  SocialNet.initialize();
});
