# Phase 98
Tower defense prototypes only dependent on Phaser v3.

## Development
- `npm install`
- `npm install --only=dev`
- Ensure index.html does **not** have `<base href="/Phase98/">`
- `npm run dev` will start the local server and reload on change

## Deployment
- We are using github hosted pages
- Ensure index.html has `<base href="/Phase98/">`
- `npm run build`
- Copy `/dist` into `/docs`

## ToDos
**Tower**
- [Factor method](https://en.wikipedia.org/wiki/Factory_method_pattern) for creation
- Tower placement
- Shooting Strategy Manager
- Basic Selection (Info/Actions(Sell))

**Enemy**
- Pathing
- Effect stacking (slow, burn, etc)

**Overall**
- Spritesheets
