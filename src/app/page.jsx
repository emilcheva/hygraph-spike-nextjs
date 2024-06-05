import Section from "@/components/section";

export function generateMetadata() {
  return { title: "Home" };
}

export default async function Page() {
  return (
    <div className="container space-y-6 py-12">
      <Section slug="home" />
    </div>
  );
}
