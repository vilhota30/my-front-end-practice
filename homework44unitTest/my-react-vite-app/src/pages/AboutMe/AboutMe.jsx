import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';
import bgFlowersPhoto from '../../assets/bgflowers2.jpg';

import style from './AboutMe.module.scss';
import { Link } from 'react-router-dom';

export function AboutMe() {
  
    return (
       <PageLayout
         renderHeader={() => <Header />}
         renderFooter={() => <Footer />}
         renderContent={() => (
           <div style={{ backgroundImage: `url(${bgFlowersPhoto})`, widht: "800px", height: "600px", backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: "cover", padding: "20px 20px", }}>
             <div className={style['container-group']}>
               <h2 className={style['title']}>I like flowers</h2>
               <Link to="/" className={style['btn-go-main']} style={{backgroundColor: "darksalmon", color: "white"}}>Go to the Main Page</Link>
             </div>
           </div>
         )}
       />
    );
}