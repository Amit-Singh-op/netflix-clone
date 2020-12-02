const API_KEY="eaed4addb4d82f3b5e1842c3bdbd59da";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchMetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/tv?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/tv?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentryMovies:`/discover/tv?api_key=${API_KEY}&with_genres=99`,
}
export default requests;