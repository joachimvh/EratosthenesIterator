
var AsyncIterator = require('asynciterator');

function EratosthenesIterator()
{

    var primes = [2];

    var iterator = new AsyncIterator.IntegerIterator({start: 3, end: Infinity, step: 2});
    iterator = iterator.filter(function (n) { return filter(n, primes); });
    iterator = iterator.prepend([2]);
    return iterator;
}

function filter (n, primes)
{
    for (var i = 0; i < primes.length; ++i)
    {
        var prime = primes[i];
        if (prime*prime > n)
            break;
        if (n % prime === 0)
            return false;
    }
    primes.push(n);
    return true;
}

module.exports = EratosthenesIterator;