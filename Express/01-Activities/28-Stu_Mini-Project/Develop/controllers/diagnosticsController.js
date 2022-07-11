const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

module.exports = {

    getAllDiagnostics: (req, res) => {
        // TODO: Logic for sending all the content of db/diagnostics.json
        readFromFile('./db/diagnostics.json').then((data) => res.json(JSON.parse(data)));
    },

    createDiagnostic: (req, res) => {
        // TODO: Logic for appending data to the db/diagnostics.json file
        // Destructuring assignment for the items in req.body
        const { tip, topic, username } = req.body;
        console.log(req.body);
        // If all the required properties are present
        if (tip || topic || username) {
            // Variable for the object we will save
            const time = Date.now();
            const newDiagnostic = {
                time,
                error_id: uuidv4(),
                errors: {
                    tip,
                    topic,
                    username
                }
            };

            readAndAppend(newDiagnostic, './db/diagnostics.json');

            const response = {
                status: 'success',
                body: newDiagnostic,
            };

            res.json(response);
        } else {
            res.json('Error in posting feedback');
        }
    }
}