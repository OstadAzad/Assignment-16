import Brands from "@/components/Brands";
import FeatureProjects from "@/components/FeatureProjects";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import States from "@/components/States";

const page = () => {
  return (
    <>
      <Hero/>
      <Brands/>
      <HowWorks/>
      <States/>
      <FeatureProjects/>
    </>
  );
};

export default page;