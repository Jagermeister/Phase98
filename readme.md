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