import { hygraphClient } from "@/lib/hygraphClient";
import { cn } from "@/lib/utils";
import { gql } from "graphql-request";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const query = gql`
  query Partnerships {
    partnerships {
      id
      title
      description
      cardImage {
        url
        width
        height
      }
    }
  }
`;

const getPartnerships = async () => {
  const { partnerships } = await hygraphClient.request(query);
  return partnerships;
};

const Partnerships = async ({
  className,
  ...restProps
}: {
  className: string;
}) => {
  const partnerships = await getPartnerships();

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
              className={cn("flex flex-1", {
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

export default Partnerships;
