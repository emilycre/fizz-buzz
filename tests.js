const test = QUnit.test;

function fizzBuzz(number) {
    if(number % 3 === 0) {
        return 'fizz';
    }
    
    else if(number % 5 === 0) {
        return 'buzz';    
    }

    else if(number % 3 === 0 && number % 5 === 0)
        return 'fizzbuzz';
}
 

test('numbers divisible by 3 replaced by fizz', function(assert) {
    let result = 3;
    assert.equal(number, 'fizz'); 
});

test('numbers divisible by 5 replaced by buzz', function(assert) {
    let result = 5;
    assert.equal(number, 'buzz');
});
 
test('numbers divisible by 3 and 5 replaced by fizzbuzz', function(assert) {
    let result = 15;
    assert.equal(number, 'fizzbuzz');

});