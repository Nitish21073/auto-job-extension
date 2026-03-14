import { getText } from "../../utils/domUtils";
export function parseLinkedInJob() {
  const role = getText(".job-card-list__title--link strong");
  const company = getText(".artdeco-entity-lockup__subtitle span");
  const location = getText(".job-card-container__metadata-wrapper li span");
  return {
    role,
    company,
    location,
    link: window.location.href,
  };
}
