# Boiler plate expo app

Boiler plate for an expo app with context authentification handle.

## How to use it

1. Install project's dependencies with `npm install`
2. Create and add secret config in `app.config.ts` file 
  
```js
module.exports = {
  name: "expo_boiler_plate",
  version: "1.0.0",
  extra: {
    API_URL : "YOUR_API_URL"
    ...
  }
} 
```

3. Run with `npx expo start`