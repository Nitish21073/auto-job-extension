export function saveJob(job) {
  chrome.storage.local.get(["jobs"], (data) => {
    const jobs = data.jobs || [];

    const exists = jobs.find((j) => j.link === job.link);

    if (!exists) {
      jobs.push(job);

      chrome.storage.local.set({ jobs });
    }
  });
}
