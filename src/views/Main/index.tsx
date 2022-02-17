import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
/**
 * Components
 */
import Movies from '../../components/Movies';
import Layout from '../../layouts/MainLayout';


function Main(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Movies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  ); 
}

export default Main;