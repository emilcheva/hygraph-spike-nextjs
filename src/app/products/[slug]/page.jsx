import { hygraphClient } from "@/app/lib/hygraphClient";
import Link from "next/link";

const getProduct = async (params) => {
  const { product } = await hygraphClient.request(
    `query ProductPageQuery($slug: String!) {
      product(where: { slug: $slug }) {
        name
        description
        price
      }
    }`,
    {
      slug: params.slug,
    },
  );

  return product;
};

export default async function Product({ params }) {
  const product = await getProduct(params);
  return (
    <>
      <Link href="/">Home</Link>
      <h1 className="text-primary">{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price / 100}</p>
    </>
  );
}
