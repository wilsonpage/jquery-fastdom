
suite('$.fn.append', function(){

  test('Should append the given html (async)', function(done) {

    $('.sandbox').append('<p>foo</p>', function() {
      assert($('.sandbox p').length === 1);
      done();
    });

    // Make sure the html hasn't been added sync
    assert($('.sandbox p').length === 0);
  });

});
