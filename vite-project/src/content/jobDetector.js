import { parseLinkedInJob } from "./parsers/linkedinParser";
export function detectJobPage() {
  const job = parseLinkedInJob();
  if (!job.role) return;
  chrome.runtime.sendMessage({
    type: "NEW_JOB_DETECTED",
    payload: job,
  });
}
setTimeout(detectJobPage, 4000);
