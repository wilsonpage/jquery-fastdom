
suite('$.fn.prependTo', function(){

  test('Should append the element to the given parent (async)', function(done) {

    $('<p>foo</p>').prependTo('.sandbox', function() {
      assert($('.sandbox p').length === 1, 'the sandbox has a paragraph element in it');
      done();
    });

    // Make sure the html hasn't been added sync
    assert($('.sandbox p').length === 0, 'the sandbox is still empty');
  });

});