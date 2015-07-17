var test = require('tap').test;
var lb = require('./');

test('should call back the first time', function (t) {
    t.plan(1);
    var cb = function (arg) {
        t.equal(arg, 'good');
        t.end();
    };

    lb(cb)('good');
});

test('should error back the second time', function (t) {
    t.plan(3);
    var f = lb(function (arg) {
        t.equal(arg, 'good');
    }, function (last, now) {
        t.ok(last);
        t.ok(now);
        t.end();
    });

    f('good');
    f('boom');
});
