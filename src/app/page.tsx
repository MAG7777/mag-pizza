import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Filters */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Product list */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizza"
                items={[
                  {
                  id: 1,
                  name: "Peperoni",
                  imageUrl: "https://media.dodostatic.com/image/r:292x292/0194f612949f76c09578959b470ce492.avif",
                  print: 10,
                  items: [{ price: 10 }]
                },

                {
                  id: 2,
                  name: "Peperoni",
                  imageUrl: "https://media.dodostatic.com/image/r:292x292/0194f612949f76c09578959b470ce492.avif",
                  print: 10,
                  items: [{ price: 10 }]
                },

                {
                  id: 3,
                  name: "Peperoni",
                  imageUrl: "https://media.dodostatic.com/image/r:292x292/0194f612949f76c09578959b470ce492.avif",
                  print: 10,
                  items: [{ price: 10 }]
                },

                {
                  id: 4,
                  name: "Peperoni",
                  imageUrl: "https://media.dodostatic.com/image/r:292x292/0194f612949f76c09578959b470ce492.avif",
                  print: 10,
                  items: [{ price: 10 }]
                },
                {
                  id: 5,
                  name: "Peperoni",
                  imageUrl: "https://media.dodostatic.com/image/r:292x292/0194f612949f76c09578959b470ce492.avif",
                  print: 10,
                  items: [{ price: 10 }]
                },
                {
                  id: 6,
                  name: "Peperoni",
                  imageUrl: "https://media.dodostatic.com/image/r:292x292/0194f612949f76c09578959b470ce492.avif",
                  print: 10,
                  items: [{ price: 10 }]
                },
                {
                  id: 7,
                  name: "Peperoni",
                  imageUrl: "https://media.dodostatic.com/image/r:292x292/0194f612949f76c09578959b470ce492.avif",
                  print: 10,
                  items: [{ price: 10 }]
                },
                
              ]}
                categoryId={1}
              />

<ProductsGroupList
                title="Combo"
                items={[
                  {
                  id: 1,
                  name: "Peperoni",
                  imageUrl: "https://media.dodostatic.com/image/r:292x292/0194f612949f76c09578959b470ce492.avif",
                  print: 10,
                  items: [{ price: 10 }]
                },

                {
                  id: 2,
                  name: "Peperoni",
                  imageUrl: "https://media.dodostatic.com/image/r:292x292/0194f612949f76c09578959b470ce492.avif",
                  print: 10,
                  items: [{ price: 10 }]
                },

                {
                  id: 3,
                  name: "Peperoni",
                  imageUrl: "https://media.dodostatic.com/image/r:292x292/0194f612949f76c09578959b470ce492.avif",
                  print: 10,
                  items: [{ price: 10 }]
                },

                {
                  id: 4,
                  name: "Peperoni",
                  imageUrl: "https://media.dodostatic.com/image/r:292x292/0194f612949f76c09578959b470ce492.avif",
                  print: 10,
                  items: [{ price: 10 }]
                },
                {
                  id: 5,
                  name: "Peperoni",
                  imageUrl: "https://media.dodostatic.com/image/r:292x292/0194f612949f76c09578959b470ce492.avif",
                  print: 10,
                  items: [{ price: 10 }]
                },
                {
                  id: 6,
                  name: "Peperoni",
                  imageUrl: "https://media.dodostatic.com/image/r:292x292/0194f612949f76c09578959b470ce492.avif",
                  print: 10,
                  items: [{ price: 10 }]
                },
                {
                  id: 7,
                  name: "Peperoni",
                  imageUrl: "https://media.dodostatic.com/image/r:292x292/0194f612949f76c09578959b470ce492.avif",
                  print: 10,
                  items: [{ price: 10 }]
                },
                
              ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>

      </Container>
    </>
  );
}
