import './App.css';
import Hero from './components/Hero/Hero';
import Program from './components/Program/Program';
import Reason from './components/Reason/Reason';
import Plan from './components/Plan/Plan';
import Testimonial from './components/Testimonial/Testimonial';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import Feedback from './components/Feedback/Feedback';
import JoinUser from './components/JoinUser/JoinUser';
import LoginUser from './components/LoginUser/LoginUser';
import { useState } from 'react';
function App() {
  const [showJoinUser, setShowJoinUser] = useState(false);
  const [showLoginUser, setShowLoginUser] = useState(false);
 
  const handleJoinUserClick = () => {
    setShowJoinUser(true);
    setShowLoginUser(false); // Ensure LoginUser is hidden
  };

  const handleLoginUserClick = () => {
    setShowLoginUser(true);
    setShowJoinUser(false); // Ensure JoinUser is hidden
  };

  const handleBackClick = () => {
    setShowJoinUser(false);
    setShowLoginUser(false); // Hide both components on back
  };

  return (
    <div className="App">
      {showJoinUser ? (
        <JoinUser onBack={handleBackClick} onSubmit={handleJoinUserClick} />
      ) : showLoginUser ? (
        <LoginUser onBack={handleBackClick} onSubmit={handleLoginUserClick} />
      ) : (
        <>
          <Hero onJoinUserClick={handleJoinUserClick} onLoginUserClick={handleLoginUserClick} />
          <Program />
          <Reason />
          <Plan />
          <Testimonial />
          <Join />
          <Feedback />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
