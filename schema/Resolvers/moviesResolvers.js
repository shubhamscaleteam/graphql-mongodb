import { Movies } from "../../models/moviesModel.js";

export default {
  Query: {
    movies: async () => {
      const findMovies = await Movies.find();
      return findMovies
    },
    movie: async(_, {title}) => {
      // console.log(title)
      const findMovie = await Movies.findOne({title});
      return findMovie;
    },
  },
};
