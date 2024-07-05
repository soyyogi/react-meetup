import React from "react";
import { Route } from "react-router-dom";
import Layout from "@components/layout/Layout";
import AllMeetupsPage from "../../pages/AllMeetupsPage";
import NewMeetupPage from "../../pages/NewMeetup";
import FavoritesPage from "../../pages/Favorites";
import { ROUTES } from "./constants";

const Routes = () => (
  <Layout>
    <Route path={ROUTES.HOME} exact>
      <AllMeetupsPage />
    </Route>
    <Route path={ROUTES.NEW_MEETUP}>
      <NewMeetupPage />
    </Route>
    <Route path={ROUTES.FAVORITES}>
      <FavoritesPage />
    </Route>
  </Layout>
);

export default Routes;
