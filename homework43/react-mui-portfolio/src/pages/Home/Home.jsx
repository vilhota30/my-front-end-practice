import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';
import { Resume } from '../../components/Resume/Resume.jsx';
// import style from './Home.module.scss';

export function HomePage() {
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <div>
          <Resume />
        </div>
      )}
      renderFooter={() => <Footer />}
    />
  );
}
