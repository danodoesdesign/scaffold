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


### Initial setup and auth
Follow steps 1 and 2 in the [Notion API Getting Started](https://developers.notion.com/docs/getting-started) to create the Databases you'll be reading from, and to generate the API key.

Create a .env file in the root folder of the project with the following contents:
```
NOTION_KEY=<your-api-key>
NOTION_DATABASE_<NAME>=<each-unique-database-id>
```


### Mapping the data
The return you get from the Notion database has heaps of attributes, but you likely only need a few.

To map the data you need, edit the `src/scripts/notionToJson.js` file, and follow the instructions in the comments.


### Running the script

```
npm run notion
```
