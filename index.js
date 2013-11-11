
(function($){

  // Replace easy ones
  $.fn.html = readWrite($.fn.html);
  $.fn.addClass = write($.fn.addClass);
  $.fn.append = write($.fn.append);
  $.fn.prepend = write($.fn.prepend);
  $.fn.before = write($.fn.before);
  $.fn.after = write($.fn.after);
  $.fn.replaceWith = write($.fn.replaceWith);

  // Wrap similar methods
  $.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function(name, original) {
    $.fn[name] = function(selector, done) {
      done = done || function(){};

      var insert = $(selector);
      var l = insert.length;
      var last = l - 1;
      var ret = [];
      var elems;

      for (var i = 0; i < l; i++) {
        elems = i === last ? this : this.clone(true);
        $(insert[i])[original](elems, done);
      }
    };
  });

  function write(original) {
    return function(param, done) {
      var ctx = this;
      fastdom.write(function() {
        original.call(ctx, param);
        if (done) done();
      });
    };
  }

  function readWrite(original) {
    return function(str, done) {

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
        done(original.apply(ctx, args));
      });
    };
  }
})(jQuery);
