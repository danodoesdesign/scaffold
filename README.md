# ScaFFold
A basic Vue 3 project scaffold with a few sprinkles of joy.

## Features
- Plain Vue 3 and Vite
- [TailwindCSS](https://tailwindcss.com/), including imports to enable [HeadlessUI](https://headlessui.dev/) and [TailwindUI](https://tailwindui.com/)

### Backlog
- Notion API integration for data-driven prototyping
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
Follow steps 1 and 2 in the [Notion API Getting Started](https://developers.notion.com/docs/getting-started) to create the Database you'll be reading from, and to generate the API key.

Create a .env file in the root folder of the project with the following contents:
```
NOTION_KEY=<your-api-key>
NOTION_DATABASE_ID=<your-database-id>
```
