import { gql } from "graphql-request";
import { useCatQuery, CatQuery } from "../graphql/generated";
import React from "react";
import CardGrid from "./CardGrid";

gql`
  query crocodiles {
    crocodiles {
      type
      name
      img
    }
  }
`;

const Dashboard = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__headline">
          <h1>The Pet store CPH</h1>
        </div>
        <div className="navigation">This is where the navigation would be.</div>
      </div>

      <div className="navbar__nav">This is where the filters will be</div>

      <CardGrid />
    </>
  );
};

export default Dashboard;
