import { hygraphClient } from "@/lib/hygraphClient";
import { gql } from "graphql-request";
import * as Blocks from "@/components/index";

type Page = {
  id: string;
  slug: string;
  blocks: {
    id: string;
    __typename: string;
  }[];
  __typename: string;
};

const getPageBySlug = async (slug: string, locale: string) => {
  const query = gql`
  query PageQuery($slug: String!) {
    page(
      where: { slug: $slug }
      locales: [${locale}]
    ){
      id
      slug
      blocks {
        __typename
        ... on Section{
          id
        }
        ...on Partnership{
          id
        }
        ... on Stat {
          id
        }
        ... on Partner {
          id
        }
      }
      __typename
    }
  }
`;

  const { page } = await hygraphClient.request<{ page: Page }>(query, {
    slug,
    locale,
  });
  return page;
};

export default async function Page({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  const page = await getPageBySlug(slug, locale);

  return (
    <div className="container space-y-6">
      {page.blocks.map((block, index) => {
        // @ts-ignore
        const Component = Blocks[block.__typename];

        if (!Component) return null;

        return <Component key={index} locale={locale} slug={slug} {...block} />;
      })}
    </div>
  );
}
