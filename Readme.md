## POC using Module Fedaration 

This is just a Micro Frontend Proof of Concept using `create-mf-app`. The [ModuleFederation plugin](https://webpack.js.org/concepts/module-federation/) is used to integrate the apps during runtime.

The `container` and `host-*` folders contains some attepmts of creating a shell applications, the fisrt one is made in React and the other two use versions 12 an 13 of NextJs. Through testing it was discovered that the new App routing system is [not fully compatible with the ModuleFederation](https://github.com/module-federation/universe/issues/1183) plugin to date.

The `mf1` folder contains a React app which works both as a stand alone application and as a module imported by any of the previously mentioned shell apps.
