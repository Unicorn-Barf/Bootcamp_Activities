DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

USE movie_db;

CREATE TABLE movies (
    id INT AUTO_INCREMENT,
    movieName VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE reviews (
    id INT AUTO_INCREMENT,
    movieId INT NOT NULL,
    review VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (movieId) REFERENCES movies(id) ON DELETE CASCADE
);