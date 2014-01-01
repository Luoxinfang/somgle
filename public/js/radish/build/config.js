/**
 * Created by luoxinfang on 13-10-18.
 */
seajs.config({
  base:'/js',
  alias:{
    'text':'radish/build/seajs-text',
    'jquery':'radish/lib/jquery-2.0.3',
    'jPlayer':'radish/lib/jquery.jplayer',
    'jquery.cookie':'radish/lib/jquery.cookie',
    'lodash':'radish/lib/lodash',
    'underscore':'radish/lib/underscore',
    'backbone':'radish/lib/backbone',
    'bootstrap':'radish/lib/bootstrap',
    'Form':'radish/core/form',
    'Date':'radish/core/date',
    'Key':'radish/core/key'
  },
  preload:['text']
});

