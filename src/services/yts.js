const url = "https://yts.am/api/v2/list_movies.json";

const yts = {
  list: async () => {
    const res = await fetch(url);
    const json = await res.json();

    return json.data.movies;
  },

  search: async (criteria, quality, genre) => {
    const res = await fetch(
      `${url}?query_term=${criteria}&movie_quality=${quality}&genre=${genre}`
    );
    const json = await res.json();

    return json.data.movies;
  }
};

export default yts;
