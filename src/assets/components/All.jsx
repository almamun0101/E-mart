const items = [
    {
       name:"Cabbage",
       url:"./Images/items1.png",
       price:"70tk"
    },
    {
       name:"Cauliflower",
       url:"./Images/items2.png",
       price:"75tk"
    },
    {
       name:"RadishBean",
       url:"./Images/items3.png",
       price:"40tk"
    },
    {
       name:"Radish",
       url:"./Images/items4.png",
       price:"70tk"
    },
    {
       name:"Wal Nut",
       url:"./Images/items5.png",
       price:"70tk"
    },
    {
       name:"Cashew Nut",
       url:"./Images/items6.png",
       price:"70tk"
    },
    {
       name:"Almond",
       url:"./Images/items7.png",
       price:"70tk"
    },
    {
       name:"China Peanuts",
       url:"./Images/items8.png",
       price:"70tk"
    },
    {
       name:"Stew Beef Meat",
       url:"./Images/items9.png",
       price:"70tk"
    },
    {
       name:"Chicken Meat",
       url:"./Images/items10.png",
       price:"70tk"
    },
    {
       name:"Fresh Fish",
       url:"./Images/items11.png",
       price:"70tk"
    },
    {
       name:"Mix Fish",
       url:"./Images/items12.png",
       price:"70tk"
    },
    {
       name:"Mix Fish",
       url:"./Images/items13.png",
       price:"70tk"
    },
    {
       name:"Mix Fish",
       url:"./Images/items14.png",
       price:"70tk"
    },
    {
       name:"Mix Fish",
       url:"./Images/items15.png",
       price:"70tk"
    },
    {
       name:"Mix Fish",
       url:"./Images/items14.png",
       price:"70tk"
    },
 
]

function All(){
    return(
        <> 
        <section className="container">
            <div className="py-10">
        <h2 className="text-2xl font-bold">All Product</h2>
      </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-5">
               {
                items.map((itemsvalue)=>(

                    <div className="p-10 text-center border border-pri-500/50 ">
                    <img src={itemsvalue.url} alt="" />
                    <h2 className="p-2">{itemsvalue.name}</h2>
                    <h3 className="p-2">1kg</h3>
                    <p className="p-2">{itemsvalue.price}</p>
                    <button className="bg-pri-500 px-5 py-2 text-white border-2 border-transparent transition hover:border-2 hover:border-pri-500 hover:bg-transparent hover:text-pri-500">Add To chart</button>
                </div>

                )
            )}
            </div>
            
            </section>

        </>
    )
}

export default All