import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import RegisterForm from '../../components/Form/Form.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';
import CAnimation from '../../components/AnimationTitle/AnimationTitle.jsx';

export function Contact() {
  
  return (
     <PageLayout
       renderHeader={() => <Header />}
       renderFooter={() => <Footer />}
       renderContent={() => (
         <div>
           <CAnimation />
           <RegisterForm />
         </div>
       )}
     />
  );
}
