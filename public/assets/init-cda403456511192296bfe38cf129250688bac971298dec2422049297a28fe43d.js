(function() {
  window.App || (window.App = {});

  App.init = function() {
    return $("a, span, i, div").tooltip();
  };

  $(document).on("page:change", function() {
    return App.init();
  });

}).call(this);
