import { RouteProps } from 'react-router-dom';

interface IRoutes {
  home?: RouteProps,
}

export const paths = {
  home: "/",
};

export const routes: IRoutes = {
  home: {
    path: paths.home,
  },
}
