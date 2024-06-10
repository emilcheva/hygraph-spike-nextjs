import { hygraphClient } from "@/lib/hygraphClient";
import { cn } from "@/lib/utils";
import { gql } from "graphql-request";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type Partnership = {
  id: string;
  title: string;
  description: string;
  cardImage: {
    url: string;
    width: number;
    height: number;
  };
};

const getPartnerships = async (locale: string, id: string) => {
  const query = gql`
    query Partnerships($id: ID!, $locale: Locale!) {
      partnerships(where: { id: $id }, locales: [$locale]) {
        id
        title
        description
        cardImage {
          locale
          url
          width
          height
        }
      }
    }
  `;
  const { partnerships } = await hygraphClient.request<{
    partnerships: Partnership[];
  }>(query, { locale, id });
  return partnerships;
};

const Partnership = async ({
  className,
  locale,
  id,
  ...restProps
}: {
  locale: string;
  className?: string;
  id: string;
}) => {
  const partnerships = await getPartnerships(locale, id);

  return (
    <>
      {partnerships.map((partnership, index) => (
        <Card className={cn(className)} {...restProps} key={partnership.id}>
          <div
            className={cn("flex flex-col items-center lg:flex-row", {
              "lg:flex-row-reverse": index % 2 !== 0,
            })}
          >
            <div
              className={cn("flex flex-1 w-full", {
                "justify-end": index % 2 !== 0,
              })}
            >
              <Image
                alt={partnership.cardImage?.url}
                src={partnership.cardImage?.url}
                width={partnership.cardImage?.width}
                height={partnership.cardImage?.height}
              />
            </div>
            <div className="flex-1">
              <CardHeader className="gap-6">
                <CardTitle className="text-4xl font-semibold">
                  {partnership.title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {partnership.description}
                </CardDescription>
              </CardHeader>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default Partnership;
