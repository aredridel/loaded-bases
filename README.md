loaded-bases
============

A module to diagnose double callbacks

Use
-------

```
var lb = require('loaded-bases');

functionToDiagnose('arg', lb(function(err, result) {
    // Will only be called once, and a warning will be emitted if something tries to call it again. Stacks will be included.
}));

functionToDiagnose('arg', lb(function(err, result) {
    // Will only be called once
}, function (last, now) {
    // last is the stack of the first call, now is the stack of the second call
});
```
