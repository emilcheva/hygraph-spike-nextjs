import { hygraphClient } from "@/lib/hygraphClient";
import { cn } from "@/lib/utils";
import { stat } from "fs";
import { gql } from "graphql-request";

type Stat = {
  id: string;
  label: string;
  value: string;
  description: string;
};

const getStatById = async (locale: string, id: string) => {
  const query = gql`
    query StatsQuery($id: ID!, $locale: Locale!) {
      stats(where: { id: $id }, locales: [$locale]) {
        id
        label
        value
        description
      }
    }
  `;
  const { stats } = await hygraphClient.request<{ stats: Stat[] }>(query, {
    locale,
    id,
  });
  return stats;
};

const Stat = async ({
  className,
  locale,
  id,
  ...restProps
}: {
  locale: string;
  className?: string;
  id: string;
}) => {
  const stats = await getStatById(locale, id);

  return (
    <>
      {stats.map((stat) => (
        <div key={id} className={cn("space-y-4", className)} {...restProps}>
          <h3 className="text-5xl font-bold">{stat.value}</h3>
          <p>{stat.label}</p>
          <p>{stat.description}</p>
        </div>
      ))}
    </>
  );
};

export default Stat;
