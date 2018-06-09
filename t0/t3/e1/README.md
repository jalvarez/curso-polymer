Para generar contenido en out:

```
npm install -g es6-module-transpiler
compile-modules convert -I scripts -o out message_modules.js consume_modules.js -f commonjs
```

Para probar:
```
cd out/
node ./consume_modules.js
```
