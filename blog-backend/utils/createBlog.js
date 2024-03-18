const fs = require('fs');

const HOST = 'http://127.0.0.1:3000';
const URL = `${HOST}/api/v1/blog/create`;
const data = fs.readFileSync('C:\\Users\\Rupinder\\Documents\\ReactProjects\\blog-backend\\blog_data.txt');

(async function () {

    const requestBody = {
        "title": "Java and Spring Boot: A Comprehensive Guide",
        "blogContent": data,
        "tags": [
            "java", "spring"
        ],
        "favourite": true,
        "secreteKey": [
            "d704244c-71e5-464c-866f-a8b5268f0b2e",
            "21f9e76d-ac83-4488-896b-e0b5c0b0264e"
        ]
    }

    try {
        const response = await fetch(`${URL}`, {
            method: 'POST',
            body: JSON.stringify(requestBody)
        });
        return await response;
    } catch (error) {
        console.log(error);
    }
})().then((res) => {
    console.log(res);
});