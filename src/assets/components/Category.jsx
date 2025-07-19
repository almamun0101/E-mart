const categories = [
  { url: "./Images/Category1.png", name: "Vegetable" },
  { url: "./Images/Category2.png", name: "Fruits" },
  { url: "./Images/Category3.png", name: "Drinks" },
  { url: "./Images/Category4.png", name: "Fresh Nuts" },
  { url: "./Images/Category5.png", name: "Fresh Fish" },
  { url: "./Images/Category6.png", name: "Meat" },
];

export default function Category() {
  return (
    <main className="container p-5 mx-auto">
      <div className="pt-10 text-center">
        <h2 className="text-2xl font-bold">Category</h2>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="p-2 text-center transition-transform duration-300 hover:scale-105 min-w-[80px]"
          >
            <img
              src={item.url}
              alt={item.name}
              loading="lazy"
              className="mx-auto max-w-full"
            />
            <h3 className="text-xs m-2 font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
