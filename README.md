# ListaViaje

App Android to make list for your travels. Don't forget anything!

## Getting Started

### Prerequisites

Before proceeding, make sure the latest version of Node.js and npm are installed. Check with:

```
$ node --version
$ npm --version
```

For run the app in devices, Android Studio is required. Also, you need to install Java.

### Installing

Firstly, we need to install Ionic and Cordova

```
$ sudo npm i -g ionic cordova
```

and chek if is installed with correct version(ionic>4,cordova>8):

```
$ ionic --version
$ cordova --version
```

Then, install other packages:

```
$ npm i
```

## Running the tests

### Break down into unit tests

For Unit Testing, the Angular/Ionic framework provide us a set of testing tools with Karma and Jasmine. We don't need to make extra steps to install. All files with extension .spec.ts is a unit test.

With the next command we can see the results:

```
$ npm run test
```

### And end to end tests

For execute the e2e test, write this command in terminal.


## Devices Builds

### Localhost

If you want to check the app in your PC(localhost):

```
$ ionic serve
```

In localhost mode with livereload in your device, install first DevApp in AppStore or PlayStore, connect the mobile in the same network and run this command:

```
$ ionic serve -c
```

Then, in DevApp you can see in realtime the progress of My-people.

** Environments **

- (local mocks)

```
$ npm run ionic:serve:local-mocks
```

- (local back)

```
$ npm run ionic:serve:local-back
```

- (prod)

```
$ npm run ionic:serve:prod
```

### Android

1. Generate the native project, if it does not already exist.

```
$ ionic cordova prepare android
```

2. Set the Package ID. Open the config.xml file and modify the id attribute of the root element "widget". See the Cordova documentation for more information.

3. Run the following to start a long-running CLI process that boots up a live-reload server:

```
$ ionic cordova run android -l
```


## Built With

- [Ionic v4](https://ionicframework.com/)
- [Cordova](https://cordova.apache.org/)
- [Angular 7](https://angular.io/)
- [Typescript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Karma/Jasmine](https://jasmine.github.io/)

## Authors

- **2PaeDev** - _Initial work_ - [GitHub](https://github.com/2paedev) - [Contact](2paedev@gmail.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
