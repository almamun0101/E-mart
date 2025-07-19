function Product() {
  return (
    <>
      <div className="container mx-auto px-4 py-5 ">
        <div className="py-10">
          <h2 className="text-3xl font-bold text-gray-800 text-center "> Our Product</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="rounded-2xl shadow-lg hover:shadow-2xl duration-300 lg:w-1/3 bg-gradient-to-br from-yellow-400 to-yellow-600 p-10 text-center pt-25">
            <h3 className="text-2xl pb-3 font-medium">FRESH VEGETABLES </h3>
            <h2 className="text-4xl pb-5 font-bold">BIG SALE</h2>
            <img src="./Images/product3.png" alt="" loading="lazy" className="mx-auto max-w-full transition-transform duration-300 hover:scale-105"/>
          </div>
          <div className="lg:w-2/3">
            <div className=" p-8 text-white  rounded-2xl shadow-lg hover:shadow-2xl duration-300 bg-[#FD5151]/80 flex items-center justify-between ">
              <img src="./Images/product2.png" alt=""  loading="lazy" className="mx-auto  transition-transform duration-300 hover:scale-105" />
              <div className="text-center font-bold ">
                <h2>FRESH FRUIT SUPER SALE</h2>
                <button className="border text-base  border-white rounded-lg px-5 py-2 text-white m-5">Shop Now</button>
              </div>
            </div>
            <div className="rounded-2xl p-8 shadow-lg hover:shadow-2xl duration-300 bg-[#FF9564] mt-10 flex flex-col lg:flex-row justify-around items-center">
              <img src="./Images/Frame.png" alt="" />
              <img src="./Images/product1.png" alt=""  loading="lazy" className="mx-auto max-w-full transition-transform duration-300 hover:scale-105"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
