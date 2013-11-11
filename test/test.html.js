suite('$.fn.html', function(){

  test('Should get the innerHTML string', function(done) {
    var value = 'foo';

    $('.sandbox')[0].innerHTML = value;

    $('.sandbox').html(function(result) {
      assert(result === value);
      done();
    });
  });

  test('Should set the innerHTML', function(done) {
    var value = 'foo';

    $('.sandbox').html(value, function(result) {
      assert($('.sandbox')[0].innerHTML === value);
      done();
    });
  });

});