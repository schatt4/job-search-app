import Hero from "../components/Hero";
import Homecards from "../components/Homecards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Homecards />
      {/* <!-- Browse Jobs --> */}
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
}
