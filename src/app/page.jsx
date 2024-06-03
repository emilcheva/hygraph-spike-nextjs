import { hygraphClient } from "@/app/lib/hygraphClient";
import Link from "next/link";
const getProducts = async () => {
  const { products } = await hygraphClient.request(
    `{
      products {
        slug
        name
        id
      }
    }`,
  );

  return products;
};

export function generateMetadata() {
  return { title: "Products" };
}

export default async function Page() {
  const products = await getProducts();
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(({ slug, name, id }) => (
          <li key={id}>
            <Link key={slug} href={`/products/${slug}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
