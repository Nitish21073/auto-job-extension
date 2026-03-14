import { useEffect, useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    chrome.storage.local.get(["jobs"], (data) => {
      setJobs(data.jobs || []);
    });
  }, []);

  return (
    <div>
      <h2>Saved Jobs</h2>

      {jobs.map((job, index) => (
        <div key={index}>
          <h4>{job.role}</h4>

          <p>{job.company}</p>

          <p>{job.location}</p>
        </div>
      ))}
    </div>
  );
}
export default App;
