import { useState } from 'react';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Skills from './components/Skills';
import StoryLine from './components/StoryLine';
import Message from './components/Message';
import Login from './components/Login';

function App() {
  const [hasUser, setHasUser] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
      // else {
      //   reveals[i].classList.remove("active");
      // }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div>
      <Navigation setIsLoginPage={setIsLoginPage} hasUser={hasUser} setHasUser={setHasUser} />
      <Intro />
      <Skills hasUser={hasUser} />
      <StoryLine hasUser={hasUser} />
      <Message hasUser={hasUser} />
      {isLoginPage ? <Login isLoginPage={isLoginPage} setIsLoginPage={setIsLoginPage} setHasUser={setHasUser} /> : null}
    </div>
  );
}

export default App;
