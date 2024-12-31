import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import { useState } from "react";
function App() {
  const [changeContent, setContent] = useState(true);
  const content = changeContent ? <Login /> : <Signup />;
  function handleChangeContent() {
    setContent((prevState) => !prevState);
  }
  return (
    <>
      <Header />
      <main>
        {content}
        <button  className="button" style={{marginLeft: "45%"}} onClick={handleChangeContent}>
          Change to {changeContent ? "Signup" : "Login"}
        </button>
      </main>
    </>
  );
}

export default App;
