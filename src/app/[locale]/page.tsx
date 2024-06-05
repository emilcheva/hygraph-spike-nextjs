import Section from "@/components/section";

export default async function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div className="container space-y-6 py-12">
      <Section slug="home" locale={locale} />
    </div>
  );
}
