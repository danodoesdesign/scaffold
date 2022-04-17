const dotenv = require('dotenv').config()
const { Client } = require('@notionhq/client');

const notionKey = process.env.NOTION_KEY
const notionDatabase = process.env.NOTION_DATABASE

const notion = new Client({ auth: notionKey });

(async () => {
    const response = await notion.search({
        filter: {
            property: 'object',
            value: 'database',
        },
    });
    console.log(response);
})();
