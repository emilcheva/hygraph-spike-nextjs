import * as Columns from "@/components/blocks/columns/index";
import bgImg from "@/public/images/partners-bg.jpg";

type Column = {
  id: string;
  __typename: string;
};

type GridProps = {
  columns: Column[];
  numberOfColumns: number;
};

const Grid = ({ columns, numberOfColumns, ...restProps }: GridProps) => {
  return (
    <section
      className="gap-14 px-20 py-28 text-white md:grid"
      style={{
        backgroundImage: `url(${bgImg.src})`,
        gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
      }}
    >
      {columns.map((column) => {
        // @ts-ignore
        const Component = Columns[column.__typename];

        if (!Component) return null;

        return <Component key={column.id} {...restProps} {...column} />;
      })}
    </section>
  );
};

export default Grid;
