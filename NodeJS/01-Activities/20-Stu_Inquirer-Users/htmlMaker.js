const htmlMaker = (answers) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${answers.name}</title>
</head>
<body>
    <h1>Hi my name is ${answers.name}</h1>
    <h2>Here are some languages I know</h2>
    <ul>
        ${
            answers.languages.map(answer => `<li>${answer}</li>`).join('\n')
        }
</body>
</html>
`;
};

module.exports = htmlMaker;