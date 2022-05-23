## sr_podplayer_grupp4:

Deployed site: https://poddler.netlify.app/

The project is using the Swedish Radio open API:
https://sverigesradio.se/artikel/7591703

```sh
STEP-BY-STEP Instructions:
  1. Clone the repo.
  2. Open the repo in VSCode.
  3. Open a terminal in VSCode.
  4. > npm install
  5. > npm run dev     (Compile and Hot-Reload for Devs) 
  
  -- Optional 1: 
  > npm run lint   (ESLint - https://eslint.org/)
  -- Optional 2: 
  > npm run build   (or Deploy to Netlify)
```

NICE-TO-KNOW:
There are some placeholder .svg files in the code, these are not meant to be clickable.

KNOWN BUGS:
- Some podcasts do not share the same structure for JSON-responses as the rest, being 'listenpodfile.url'. These will not load to the player.
- Refreshing the page while on the view 'PodView.vue' (after selecting a pod) does not reload the page properly.

## Recommended IDE Setup:
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

© 2022 Yrgo, higher vocational education, Gothenburg
