// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'remixicon/fonts/remixicon.css';

import './App.css';
import BackToTop from './Components/BackToTop';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import SideBar from './Components/SideBar';

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Main />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App;