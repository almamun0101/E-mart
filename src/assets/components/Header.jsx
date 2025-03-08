function Header() {
  return (
    <>
      <header className="container">
        <div className="flex justify-between items-center p-5">
          <img src="./Images/logo.png" alt="logo" />
          <ul className="flex items-center gap-10">
            <li className="hover:text-pri-500 hover:font-medium">
              <a href="">Home</a>
            </li>
            <li className="hover:text-pri-500 hover:font-medium">
              <a href="">About</a>
            </li>
            <li className="hover:text-pri-500 hover:font-medium">
              <a href="">Service</a>
            </li>
            <li className="hover:text-pri-500 hover:font-medium">
              <a href="">Product</a>
            </li>
            <li className="hover:text-pri-500 hover:font-medium">
              <a href="">Contact</a>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sec-500 flex justify-center items-center ">
              <i class="fa-solid fa-user"></i>
            </div>
            <div className="w-10 h-10 rounded-full bg-sec-500 flex justify-center items-center ">
              <i class="fa-solid fa-bell"></i>
            </div>
          </div>
        </div>

        <section id="banner">
          <div className="bg-pri-500 w-full p-5 flex items-center justify-between">
            <div className="text">
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
