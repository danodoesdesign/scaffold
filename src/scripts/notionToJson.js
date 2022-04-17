const dotenv = require('dotenv').config()
const { Client } = require('@notionhq/client');

/* map to env variables */
const notionKey = process.env.NOTION_KEY
const notionDatabase = process.env.NOTION_DATABASE

/* 
Notion API: Query a database
https://developers.notion.com/reference/post-database-query
*/

const notion = new Client({ auth: notionKey });

(async () => {
    const databaseId = notionDatabase;
    const response = await notion.databases.query({
        database_id: databaseId,
        // This is where any specific query, filter or sorting parameters would go
    });
    console.log("✅ Queried Notion API");

    /*
    To map your data from the API response:
    - Start at "page" and run the command
    - Keep drilling down through "page.properties.<NotionColumnName>.<DataType>"
    - At DataType you may have to enter the array index, like <DataType>[0]
    */
    const data = response.results.map((page) => {
        const name = page.properties.Name.title[0].text.content;
        const age = page.properties.Age.number;

        return {
            id: page.id,
            name: name,
            age: age,
        }

    });
    console.log("✅ Data mapped into custom object from Notion API");


    // Write a JSON file with the data

    jsonData = JSON.stringify(data);
    var fs = require('fs');
    fs.writeFile("./src/data/data.json", jsonData, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("✅ data.json was written successfully into the src/data/ folder");
    });


})();

