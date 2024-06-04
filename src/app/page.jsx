import Section from "@/components/section";
// const getProducts = async () => {
//   const { products } = await hygraphClient.request(
//     `{
//       products {
//         slug
//         name
//         id
//       }
//     }`
//   );

//   return products;
// };

export function generateMetadata() {
  return { title: "Home" };
}

export default async function Page() {
  return (
    <div className="container space-y-6 py-12">
      <Section slug="home" />
    </div>
    // <div>
    //   <h1>Products</h1>
    //   <ul>
    //     {products.map(({ slug, name, id }) => (
    //       <li key={id}>
    //         <Link key={slug} href={`/products/${slug}`}>
    //           {name}
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}
