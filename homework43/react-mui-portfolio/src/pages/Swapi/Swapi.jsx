import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';
import UserList from '../../swapiComponents/src/components/UserList';
import SearchBar from '../../swapiComponents/src/components/SearchBar';
import galaxy from '../../swapiComponents/src/assets/galaxy.jpg';
import './Swapi.scss';

export const Swapi = () => {
  const userId = 1;

  return (
    <PageLayout
    renderHeader={() => <Header />}
    renderContent={() => (
        <div className='app'>
        <div style={{ backgroundImage: `url(${galaxy})`, width: "1200px", height: "700px", backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: "cover", }} >
          <h1>-The Star Wars-</h1>
          <SearchBar />
          <h2>movie-character-data</h2>
          <UserList userId={userId} />
        </div>
      </div> 
    )}
    renderFooter={() => <Footer />}
  />
  );

};

