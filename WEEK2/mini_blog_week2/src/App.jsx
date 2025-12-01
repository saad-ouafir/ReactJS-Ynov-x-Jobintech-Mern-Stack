import Layout from "./Layouts/Layout";
import Router from "./routes/Router";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Layout />
        </Router>
      </Provider>
    </>
  );
}

export default App;
