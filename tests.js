const test = QUnit.test;

function fizzBuzz(number) {
    if(number % 5 === 0 && number % 3 === 0) {
        return 'fizzbuzz';
    }

    else if(number % 3 === 0) {
        return 'fizz';
    }
    
    else if(number % 5 === 0) {
        return 'buzz';    
    }
}
 

test('numbers divisible by 3 replaced by fizz', function(assert) {
    const result = fizzBuzz(3);
    assert.equal(result, 'fizz'); 
});

test('numbers divisible by 5 replaced by buzz', function(assert) {
    const result = fizzBuzz(5);
    assert.equal(result, 'buzz');
});
 
test('numbers divisible by 3 and 5 replaced by fizzbuzz', function(assert) {
    const result = fizzBuzz(15);
    assert.equal(result, 'fizzbuzz');

});