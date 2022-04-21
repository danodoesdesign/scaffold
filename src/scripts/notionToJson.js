const dotenv = require('dotenv').config()
const { Client } = require('@notionhq/client');

/* map to env variables */
const notionKey = process.env.NOTION_KEY
const notionDatabaseDropdown = process.env.NOTION_DATABASE_DROPDOWN
const notionDatabaseList = process.env.NOTION_DATABASE_LIST

/* init with unique key */
const notion = new Client({ auth: notionKey });


/* 
========
Notion API: Query a database
Copy one of the following per each data file you want to create
https://developers.notion.com/reference/post-database-query
*/



(async () => {
    const databaseId = notionDatabaseDropdown;
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
    const dataDropdown = response.results.map((page) => {
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

    jsonData = JSON.stringify(dataDropdown);
    var fs = require('fs');
    fs.writeFile("./src/data/dataDropdown.json", jsonData, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("✅ dataDropdown.json was written successfully into the src/data/ folder");
    });


})();

/* 
End copy 
========
*/


/* 
========
Notion API: Query a database
Copy one of the following per each data file you want to create
https://developers.notion.com/reference/post-database-query
*/



(async () => {
    const databaseId = notionDatabaseList;
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
    const dataList = response.results.map((page) => {
        const fullName = page.properties.FullName.title[0].plain_text
        const applicationFor = page.properties.ApplicationFor.select.name;
        const emailAddress = page.properties.EmailAddress.email;
        const salaryExpectation = page.properties.SalaryExpectation.number;
        const about = page.properties.About.rich_text[0].plain_text;

        return {
            id: page.id,
            fullName: fullName,
            applicationFor: applicationFor,
            emailAddress: emailAddress,
            salaryExpectation: salaryExpectation,
            about: about,
        }

    });
    console.log("✅ Data mapped into custom object from Notion API");


    // Write a JSON file with the data

    jsonData = JSON.stringify(dataList);
    var fs = require('fs');
    fs.writeFile("./src/data/dataList.json", jsonData, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("✅ dataList.json was written successfully into the src/data/ folder");
    });


})();

/* 
End copy 
========
*/
