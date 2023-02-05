const key = "de5ba440cd63ebe6897ea432e7056810";
const Requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
  requestTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`,
};

export default Requests;
