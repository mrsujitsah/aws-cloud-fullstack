
import Login from "./Login";
import Notices from "./Notices";
import Products from "./Products";

function App() {
  const isSessionActive = true
  return (
    <div>
     {!isSessionActive && <Login />}
      {/* <Products /> */}
      <p>Main App</p>
      <Notices/>
    </div>

  );
}

export default App;
