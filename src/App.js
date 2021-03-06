import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Jobs from "./components/Jobs/Jobs";
import Header from "./Header";
import Footer from "./Footer";
import JobDetail from "./components/Jobs/JobDetail";

function App() {
  const [jobs, setJobs] = useState([]);

  return (
    <div className="App bg-gray-100">
      <Header />
      <Router basename="/github-jobs">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Jobs {...props} jobs={jobs} setJobs={setJobs} />
            )}
          />
          <Route
            path={`/job/:jobId`}
            render={(props) => <JobDetail {...props} />}
          />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
