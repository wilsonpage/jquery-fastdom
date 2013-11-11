
(function($){
  var html = $.fn.html;
  var addCLass = $.fn.addClass;

  $.fn.html = function(str, done) {

    // Accept callback as first
    // or second argument
    if (typeof str === 'function') {
      done = str;
      str = null;
    }

    // Callback is optional
    done = done || function(){};

    var ctx = this;
    var type = str ? 'write' : 'read';

    // If a string is not provided
    // we don't want to call the
    // original method with any args
    var args = str ? [str] : [];

    // Perform the original jquery
    // method, but wrapped inside
    // a fastdom callback
    fastdom[type](function() {
      done(html.apply(ctx, args));
    });
  };

  $.fn.addClass = function() {
    var args = arguments;
    var ctx = this;

    fastdom.write(function() {
      addClass.apply(ctx, args);
    });
  };
})(jQuery);