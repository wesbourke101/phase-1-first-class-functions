function receivesAFunction(cb) {
    return cb();
}
receivesAFunction( function () {'This is a messages.'});

function returnsANamedFunction() {
    return function love() {'function'};
}

function returnsAnAnonymousFunction() {
    return  function () {'love'}
}