const items = [
  {
    name: "Cabbage",
    url: "./Images/items1.png",
    price: "70tk",
  },
  {
    name: "Cauliflower",
    url: "./Images/items2.png",
    price: "75tk",
  },
  {
    name: "RadishBean",
    url: "./Images/items3.png",
    price: "40tk",
  },
  {
    name: "Radish",
    url: "./Images/items4.png",
    price: "70tk",
  },
  {
    name: "Wal Nut",
    url: "./Images/items5.png",
    price: "70tk",
  },
  {
    name: "Cashew Nut",
    url: "./Images/items6.png",
    price: "70tk",
  },
  {
    name: "Almond",
    url: "./Images/items7.png",
    price: "70tk",
  },
  {
    name: "China Peanuts",
    url: "./Images/items8.png",
    price: "70tk",
  },
  {
    name: "Stew Beef Meat",
    url: "./Images/items9.png",
    price: "70tk",
  },
  {
    name: "Chicken Meat",
    url: "./Images/items10.png",
    price: "70tk",
  },
  {
    name: "Fresh Fish",
    url: "./Images/items11.png",
    price: "70tk",
  },
  {
    name: "Mix Fish",
    url: "./Images/items12.png",
    price: "70tk",
  },
  {
    name: "Mix Fish",
    url: "./Images/items13.png",
    price: "70tk",
  },
  {
    name: "Mix Fish",
    url: "./Images/items14.png",
    price: "70tk",
  },
  {
    name: "Mix Fish",
    url: "./Images/items15.png",
    price: "70tk",
  },
  {
    name: "Mix Fish",
    url: "./Images/items14.png",
    price: "70tk",
  },
];

function All() {
  return (
    <section className="container mx-auto px-5">
      <div className="py-10">
        <h2 className="text-2xl font-bold text-center lg:text-left">
          All Products
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-6 text-center border border-pri-500/50 flex flex-col items-center rounded-lg shadow-sm hover:shadow-lg transition"
          >
            <img
              src={item.url}
              alt={item.name}
              className="w-32 h-32 object-contain mb-4"
            />
            <h2 className="font-semibold">{item.name}</h2>
            <h3 className="text-sm text-gray-500">1kg</h3>
            <p className="text-pri-500 font-bold">{item.price}</p>
            <button className="mt-4 bg-pri-500 px-5 py-2 text-white border border-transparent rounded hover:bg-transparent hover:text-pri-500  hover:border-pri-500 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default All;
