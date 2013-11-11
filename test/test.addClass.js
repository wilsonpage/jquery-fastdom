suite('$.fn.addClass', function(){

  test('Should add the given class async', function(done) {

    $('.sandbox').addClass('foo', function(res) {
      assert($('.sandbox')[0].className.indexOf('foo') > -1);
      done();
    });

    // Make sure the class hasn't been added sync
    assert($('.sandbox')[0].className.indexOf('foo') === -1);
  });

});