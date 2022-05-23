## sr_podplayer_grupp4:

Deployed site: https://poddler.netlify.app/

The project is using the Swedish Radio open API:
https://sverigesradio.se/artikel/7591703

```sh
STEP-BY-STEP Instructions:
  1. Clone the repo.
  2. Open the repo in VSCode.
  3. Open a terminal
  4. npm install
  5. npm run dev (Compile and Hot-Reload for Development) 
  6. npm build (Compile and Minify for Production)
  7. npm run lint (Lint with ESLint - https://eslint.org/)
```

Nice-to-know:
There are some place-holder .svg files in the code, these are not meant to be clickable.

Known bugs:
- Some podcasts don't use the same JSON-structure as the rest 'listenpodfile.url', hence they won't load into the audio-player.
- Refreshing the page while on the 'PodView' (after selecting a pod) doesn't load the page properly.

## Recommended IDE Setup:
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).
