import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import { routes } from './routes.config'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route {...routes.home} />
      </Routes>
    </BrowserRouter>
  );
};
