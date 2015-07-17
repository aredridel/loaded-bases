module.exports = function (cb, onErr) {
    var last;

    return function() {
        if (last) {
            var now = new Error();
            if (onErr) {
                onErr(last.stack, now.stack);
            } else {
                console.warn("callback called twice", last.stack, now.stack);
            }
        } else {
            last = new Error();
            cb.apply(this, arguments);
        }
    };
}
