import { saveJob } from "../storage/jobStorage";

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "JOB_FOUND") {
    saveJob(message.payload);
  }
});
