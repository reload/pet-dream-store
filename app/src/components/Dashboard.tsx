import { gql } from "graphql-request";
import { useAllAnimalsQuery } from "../graphql/generated";
import CardGrid from "./CardGrid";
import About from "./About";
import Contact from "./Contact";
import Oopsie from "./Oopsie";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// graphQL query definition
// TODO - move this to its own file
gql`
  query allAnimals {
    animals {
      type
      animal
      name
      img
      description
      size
      weigth
    }
  }
`;

const Dashboard = () => {
  // call for data + status of the transaction
  const { status, isFetching, data } = useAllAnimalsQuery();

  // navbar, filters, content(CardGrid component)
  return (
    <>
      <BrowserRouter>
        <div className="navbar">
          <div className="navbar__headline">
            <h1>The Pet store CPH</h1>
          </div>
          <div className="navbar__nav">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <hr />
        </div>
        <div className="filters">This is where the filters will be</div>
        <Routes>
          <Route
            path="/"
            element={
              <CardGrid status={status} isFetching={isFetching} data={data} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Oopsie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Dashboard;
