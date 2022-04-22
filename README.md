# ✨ Scaffold
A basic Vue 3 project scaffold with a few sprinkles of joy.

## Features
- Plain Vue 3 and Vite
- [TailwindCSS](https://tailwindcss.com/), including imports to enable [HeadlessUI](https://headlessui.dev/) and [TailwindUI](https://tailwindui.com/)
- Notion API import script for data-driven prototyping

### Backlog
- GOV.UK Design System integration for easy, accessible government form prototyping
- Easy integration with a number of Vue Tailwind libraries for easy UI prototyping

 
## Basic commands
### Run local
```
npm run dev
```
### Build for prod
```
npm run build
```
Saves files into the folder `./dist`


## Setting up Notion API

Scaffold uses an import script, connecting to a Notion database of your choosing and converting into JSON before reading it within the page.


### Initial setup and authentication

Follow steps 1 and 2 in the [Notion API Getting Started](https://developers.notion.com/docs/getting-started) to create the Databases you'll be reading from, and to generate the API key.

Create a .env file in the root folder of the project with your key as a variable:
```
NOTION_KEY=<your-api-key>
```
And for every unique database you're importing from Notion, create their ID's in the same .env:
```
NOTION_DATABASE_<name>=<database-id>
```

### Mapping the data

To map the data you need, make a copy of the `src/scripts/_template.js` file, and rename the file for your own sanity.

In `package.json` from the main directory, add a custom CLI command to run each copy you make:
```
{
  "scripts": {
    "name": "node ./src/scripts/name",
  }
}
```
You can now use `npm run name` to run the script.

Then go back to your file and follow the steps in the comments, running it a few times to see the data you're getting.

## Using the data in the page

With your commands now set up to import correctly, run `npm run name` every time a change is made in Notion to import the latest data.

In the relevant component or view, import the data and define it:
```
<script>
import dataName from "@/data/dataName.json"

export default {
    data() {
        return {
            data: dataName,
        }
    },
}
</script>
```

Now you should have access to the data in an object and be able to use it however is relevant with Vue syntax of `{{ data.property }}`.

### Direct use
Access data directly:
```
<button> {{ data.label }} </button>
```

### Loops
If database has multiple entries, loop to render each entry:
```
<div v-for="item in data">
    <div> {{ item.label }} </div>
</div>
```

### Render custom page
Coming soon
