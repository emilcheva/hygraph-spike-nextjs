import Partnerships from "@/components/partnerships";
import Section from "@/components/section";
import Stats from "@/components/stats";

export default async function Partners() {
  return (
    <div className="container space-y-6">
      <Section slug="partners" />
      <Stats />
      <Section slug="partnership" />
      <Partnerships />
    </div>
  );
}