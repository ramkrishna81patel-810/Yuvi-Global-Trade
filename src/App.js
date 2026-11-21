import { ToastContainer } from 'react-toastify';
import './App.css';
import AllRouter from './router/Router';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="colored"
        />
        <AllRouter />
      </div>
    </div>
  );
}

export default App;
