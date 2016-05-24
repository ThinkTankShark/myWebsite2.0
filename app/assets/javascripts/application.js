// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery_ujs
//= require turbolinks

//FADEOUT FLASH MESSAGES
//= require flash
//= require homepage
//= require init
$(document).ajaxSend(function(event, request, settings) {
  // $(this).fadeIn('fast');
  $('#loading-indicator').show();
  // debugger;
});

$(document).ajaxComplete(function(event, request, settings) {
  // $(this).stop().fadeOut('fast');
  $('#loading-indicator').hide();
});


