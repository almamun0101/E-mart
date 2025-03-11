function Product(){
    return (
      <>
        <div className="container">
          <div className="py-10">
            <h2 className="text-2xl font-bold">Product</h2>
          </div>

          <div className="grid lg:flex w-full gap-5">
            <div className="lg:flex-1/3 bg-[#C8A938] p-10 text-center pt-25">
            <h3 className="text-2xl pb-3 font-medium">FRESH VEGETABLES </h3>
            <h2 className="text-4xl pb-5 font-bold">BIG SALE</h2>
                <img src="./Images/product3.png" alt="" />
            </div>
            <div className="lg:flex-2/3">
                <div className=" bg-[#FD5151]/67 flex items-center justify-around">
                    <img src="./Images/product2.png" alt="" />
                    <div className="text-center ">
                        <h2>FRESH FRUIT SUPER SALE</h2>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className=" bg-[#FF9564] mt-10 flex justify-around items-center">
                  <img src="./Images/Frame.png" alt="" />
                <img src="./Images/product1.png" alt="" />
                </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default Product