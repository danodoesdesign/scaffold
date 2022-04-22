const dotenv = require('dotenv').config()
const { Client } = require('@notionhq/client');


//=================== STEP 1 ============================
// Enter your database name here, same as in .env, CamelCase

const databaseName = 'Dropdown';

//-------------------------------------------------------


/* maps env variables */
const notionKey = process.env.NOTION_KEY
const notionDatabaseId = process.env['NOTION_DATABASE_' + databaseName.toUpperCase()];

/* inits with unique key */
const notion = new Client({ auth: notionKey });

/* Notion API: Query a database: https://developers.notion.com/reference/post-database-query */
(async () => {
    const id = notionDatabaseId;
    const response = await notion.databases.query({
        database_id: id,
        // This is where any specific query, filter or sorting parameters would go
    });
    console.log("✅ Queried Notion API");


    /* =================== STEP 2 =========================
    To map your data from the API response:
    - Define the variable, start at page.properties, throw in a console.log and run the script
    - Keep drilling down through "page.properties.<NotionColumnName>.<DataType>"
    - Hint: At DataType you may have to enter the array index, like <DataType>[0]
    */

    const dataMapped = response.results.map((page) => {

        const name = page.properties.Name.title[0].text.content;
        const age = page.properties.Age.number;

        return {
            id: page.id,
            name: name,
            age: age,
        }

    });

    //-----------------------------------------------------


    console.log("✅ Data mapped into custom object from Notion API");

    // Writes a JSON file with the data
    jsonData = JSON.stringify(dataMapped);
    var fs = require('fs');
    fs.writeFile("./src/data/data" + databaseName + ".json", jsonData, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("✅ data" + databaseName + ".json was written successfully into the src/data/ folder");
    });
})();
