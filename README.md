# NodeJS ES6 Starter Project

Jose Miranda's NodeJS ES6 Starter 😎

### Setup
```
git clone https://github.com/jsmirandaiii/nodejs-es6-starter.git
cd nodejs-es6-starter
npm run install
npm run start
```

### Production Use

```
npm install -g pm2
npm run build && cd build
pm2 start index.js -i max
```

### Dependencies/Presets

```
"@babel/cli": "^7.1.5",
"@babel/core": "^7.1.6",
"@babel/node": "^7.0.0",
"@babel/plugin-proposal-object-rest-spread": "^7.0.0",
"@babel/preset-env": "^7.1.6",
```