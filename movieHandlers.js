// // const movies = [
// //   {
// //     id: 1,
// //     title: "Citizen Kane",
// //     director: "Orson Wells",
// //     year: "1941",
// //     colors: false,
// //     duration: 120,
// //   },
// //   {
// //     id: 2,
// //     title: "The Godfather",
// //     director: "Francis Ford Coppola",
// //     year: "1972",
// //     colors: true,
// //     duration: 180,
// //   },
// //   {
// //     id: 3,
// //     title: "Pulp Fiction",
// //     director: "Quentin Tarantino",
// //     year: "1994",
// //     color: true,
// //     duration: 180,
// //   },
// // ];

const database = require("./database");

const getMovies = (req, res) => {
  database
.query("SELECT * FROM movies")
.then(([movies]) => {
    res.json(movies);
})
.catch((err) => {
    console.log(err);
    res.status(500).send("Error retreiving data from database");
});
};

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query('SELECT * FROM movies WHERE ID = ?', [id])
    .then(([movies]) => {
      if (movies [0] != null){
        res.json(movies[0]);
      } else {
        res.status(404).send('Not Found');
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error retreiving data from database');
    });
};


const getUsers = (req, res) => {
  database
  .query("SELECT * FROM users")
  .then(([users]) => {
      res.json(users);
      res.status(200);
  })
  .catch((err) => {
      console.log(err);
      res.status(500).send("Error retreiving data from database");
  });
  };
  
  
  const getUsersById = (req, res) => {
      const id =  parseInt(req.params.id);
  
      database
      .query('SELECT * FROM users WHERE ID = ?', [id])
      .then(([users]) => {
          if (users[0] != null) {
          res.json(users[0]); 
          res.status(200); 
      }else{
          res.status(404).send("Not Found")
      }
      })
      .catch((err) => {
      console.log(err);
      res.status(500).send('Error retreiving data from database');
      });
  
  }


module.exports = {
  getMovies,
  getMovieById,
  getUsers,
  getUsersById,
};


