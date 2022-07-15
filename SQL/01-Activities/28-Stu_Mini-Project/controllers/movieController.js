// Render list of all movies
// Post a new movie in the database
// Delete a movie by id
const connection = require('./../db/connection');

module.exports = {

    // Get All movies request
    getAllMovies: async (req, res) => {
        try {
            const getMovies = 'SELECT movieName FROM movies;';
            const [ movies ] = await connection.query(getMovies);
            res.json(movies);
        } catch (err) {
            console.log(err);
            res.json(err);
        }
    },

    // Post movie request
    postMovie: async (req, res) => {
        const { movie } = req.body;

        if (movie.trim().length === 0) {
            throw new Error('Must enter valid movie name.');
        }

        const insertMovieQuery = 'INSERT INTO movies (movieName) VALUES(?);';
        const getMovieById = 'SELECT * FROM movies WHERE id = ?;';

        try {
            const [queryResult] = await connection.query(insertMovieQuery, [movie]);
            const [movies] = await connection.query(getMovieById, [queryResult.insertId]);
            console.log(movies);
            res.json(movies[0]);

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // DELETE request to remove movie from list
    deleteMovieById: async (req, res) => {
        const { id } = req.params;

        if (id.trim().length === 0) {
            throw new Error('Must enter valid movie name.');
        }

        const deleteMovieQuery = 'DELETE FROM movies WHERE id = ?;';

        try {
            const [queryResult] = await connection.query(deleteMovieQuery, [id]);
            console.log(queryResult);
            res.json(queryResult);

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

}