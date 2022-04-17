const dotenv = require('dotenv').config()
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: 'secret_7aupubsDm6DyJk3PFmE9t5SLRqgf1qU7PjB11N5DnMk' });

(async () => {
    const response = await notion.databases.retrieve({ database_id: '9d30f1bf98004106856e741e2139a81d' });
    console.log(response);
})();
