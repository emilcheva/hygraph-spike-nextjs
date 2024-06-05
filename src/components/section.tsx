"use client";

import { hygraphClient } from "@/lib/hygraphClient";
import { cn } from "@/lib/utils";
import { gql } from "graphql-request";
import CtaButton from "./cta-button";
import { useLocale } from "next-intl";

type Section = {
  id: string;
  title: string;
  description: string;
  ctaButton?: {
    title: string;
    href: string;
  };
};

const getSectionBySlug = async (slug: string, locale: string) => {
  const query = gql`
  query SectionQuery($slug: String!) {
    sections(
      where: { slug: $slug }
      locales: [${locale}]
    ){
      id
      title
      description
      ctaButton {
        title
        href
      }
      __typename
    }
  }
`;

  const { sections } = await hygraphClient.request<{ sections: Section[] }>(
    query,
    { slug },
  );
  return sections;
};

type SectionProps = {
  slug: string;
  className?: string;
};

const Section = async ({ slug, className, ...restProps }: SectionProps) => {
  const locale = useLocale();
  const sections = await getSectionBySlug(slug, locale);

  return (
    <>
      {sections.map((section) => (
        <section
          key={section.id}
          className={cn("space-y-6 max-w-4xl mx-auto py-8", className)}
          {...restProps}
        >
          <div className="space-y-5 text-center">
            <h1 className="text-5xl font-semibold">{section.title}</h1>
            <p className="text-xl">{section.description}</p>

            {section.ctaButton && <CtaButton {...section.ctaButton} />}
          </div>
        </section>
      ))}
    </>
  );
};

export default Section;
