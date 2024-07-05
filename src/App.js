import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Routes } from "./services/routing";
import { MeetupsProvider } from "./services/store/MeetupsContext";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div data-test="app">
      <MeetupsProvider>
        <Router>
          <Switch>
            <Routes />
          </Switch>
        </Router>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </MeetupsProvider>
    </div>
  );
}

export default App;
