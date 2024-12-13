# url params example

to set up
1. clone this repo (make sure you're not already inside an existing repo) `git clone {repo url}`
2. cd into the repo `cd paramarams`
3. install dependancies `npm i` or `pnpm i`
4. start dev server `npm dev` or `pnpm dev`

The home page has a list of currently selected items. These are hard-coded in `src/main.js`, but could be dynamic based on some kind of user choices. 
whatever those user choices are, the share button creates a hyperlink to the `showList.html` page with the ids inserted as search params. 

the process for using the share button:
1. a user opens the main page and their list is generated (in our case it's hard-coded)
2. the user clicks the share button and the share url is copied to their clipboard
3. the user sends the share url to their friend
4. the friend opens the url and is presented with a view of the ids the person wanted to share. 

NOTE: the ids might look something like "items=1%2C2%2C3%2C4%2C5". this is because the [searchParams.append function](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/append) converts comma-separated string of ids into a [url encoded string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent). (each instance of `,` is replaced with `%2C`, which is the url escape code for the `,` character).

ALSO NOTE: the sharability of the links in this project depend on if it's hosted. you will have to deploy your site and make sure the links point to the domain of your deployed site if you want to use this in a real project. (here, `window.location.origin` is used to determine the domain of the link that's generated, so that it will use localhost if in a dev server or the production host if in a deployed production environment)