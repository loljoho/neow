import Dashboard from './containers/Dashboard/Dashboard';
import API from './utils/API';

API.getRaces()
  .then(res => {
    console.log(res);
  });

function App() {
  return (
    <Dashboard />
  );
}

export default App;
