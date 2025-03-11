function Header() {
  return (
    <>
      <header className="container">
        <section id="banner">
          <div className="bg-pri-500 w-full p-5 flex flex-col lg:flex-row items-center justify-between">
            <div className="">
              <h1 className="text-white font-bold text-5xl pb-5">
                Healthy and Fresh Grocery
              </h1>
              <p className="text-white font-light w-75">
                We pride ourselves on providing a curated of the finest,
                nutrient-rich products that cater to your health conscious
                lifestyle.
              </p>
              <Button Name="LEARN MORE" />
            </div>
            <img src="./Images/banner.png" alt="Banner" />
          </div>
        </section>
      </header>
    </>
  );
}

function Button({ Name }) {
  return (
    <>
      <button className="border-1 py-2 px-5 my-5 bg-white text-pri-500 font-medium rounded-sm transition hover:bg-sec-500 ">
        {Name}
      </button>
    </>
  );
}
export default Header;
