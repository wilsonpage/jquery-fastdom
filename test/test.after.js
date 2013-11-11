suite('$.fn.after', function(){

  test('Should insert the given html after', function(done) {
    $('.sandbox')[0].innerHTML = "<div></div>";

    $('.sandbox div').after('<p>foo</p>', function(res) {
      assert($('.sandbox')[0].children[1].tagName === 'P');
      done();
    });

    // Make sure the class hasn't been added sync
    assert($('.sandbox p').length === 0);
  });

});