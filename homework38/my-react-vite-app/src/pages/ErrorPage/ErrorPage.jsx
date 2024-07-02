import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

import style from "./ErrorPage.module.scss";

export function ErrorPage() {
  const { container, label } = style;
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderFooter={() => <Footer />}
      renderContent={() => (
        <div className={container}>
          <h1>Oops!</h1>
          <p className={label}>404</p>
          <p>Sorry, an unexpected error has occurred.</p>
        </div>
      )}
    />
  );
}