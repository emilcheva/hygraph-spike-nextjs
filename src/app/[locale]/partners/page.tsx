import Partnerships from "@/components/partnerships";
import Section from "@/components/section";
import Stats from "@/components/stats";

export default async function Partners({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div className="container space-y-6">
      <Section slug="partners" locale={locale} />
      <Stats locale={locale} />
      <Section slug="partnership" locale={locale} />
      <Partnerships locale={locale} />
    </div>
  );
}
