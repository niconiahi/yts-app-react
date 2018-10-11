import list from "./listRaw";
const url = "https://crossorig.in/https://yts.am/api/v2/list_movies.json";

const yts = {
  list: async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      console.log(json.data.movies);
      return json.data.movies;
    } catch (error) {
      console.warn(error);
      return [...list];
    }
  },

  search: async (criteria, quality, genre, rating) => {
    try {
      const res = await fetch(
        `${url}?query_term=${criteria}&quality=${quality}&genre=${genre}&minimum_rating=${rating}`
      );
      const json = await res.json();

      return json.data.movies;
    } catch (error) {
      console.log(error);
    }
  }
};

export default yts;
