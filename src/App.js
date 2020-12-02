import './App.css';
import requests from './request';
import Row from './Row'
import Banner from './Banner'
import Nav from './NavBar'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row isLarge
       title="NETFLIX ORIGINALS" fetchUrl={requests.fetchMetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Documentries Movies" fetchUrl={requests.fetchDocumentryMovies} />
    </div>
  );
}
export default App;
