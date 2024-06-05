import { hygraphClient } from "@/lib/hygraphClient";
import { cn } from "@/lib/utils";
import { gql } from "graphql-request";
import bgImg from "@/public/images/partners-bg.jpg";

type Stat = {
  id: string;
  label: string;
  value: string;
  description: string;
};

const getStats = async (locale: string) => {
  const query = gql`
  query Stats {
    stats(locales: [${locale}]) {
      id
      label
      value
      description
    }
  }
`;
  const { stats } = await hygraphClient.request<{ stats: Stat[] }>(query);
  return stats;
};

const Stats = async ({
  className,
  locale,
  ...restProps
}: {
  locale: string;
  className?: string;
}) => {
  const stats = await getStats(locale);

  return (
    <section
      className="grid gap-14 px-20 py-28 text-white md:grid-cols-2 lg:grid-cols-3"
      style={{
        backgroundImage: `url(${bgImg.src})`,
      }}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={cn("space-y-4", className)}
          {...restProps}
        >
          <h3 className="text-5xl font-bold">{stat.value}</h3>
          <p>{stat.label}</p>
          <p>{stat.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
