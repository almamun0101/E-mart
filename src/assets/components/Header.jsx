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
              <p className="text-white font-light">
                We pride ourselves on providing a curated of the finest,
                nutrient-rich products that cater to your health conscious
                lifestyle.
              </p>
              <button className="border py-2 px-5 my-5 bg-white text-pri-500 font-medium rounded-sm transition hover:bg-sec-500 ">
                LEARN MORE
              </button>
            </div>
            <img
              src="./Images/banner.png"
              alt="Banner"
              loading="lazy"
              className="mx-auto max-w-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </section>
      </header>
    </>
  );
}


export default Header;
