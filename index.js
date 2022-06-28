const callback = () => console.log("Holla back, girl!");

const receivesAFunction = (callback) => callback();

const returnsANamedFunction = (callback) => callback();

const returnsAnAnonymousFunction = (anon) => anon();