
let item1 = "./Images/Category1.png";
let item2 = "./Images/Category2.png";
let item3 = "./Images/Category3.png";
let item4 = "./Images/Category4.png";
let item5 = "./Images/Category5.png";
let item6 = "./Images/Category6.png";


function Category(){
    return(
        <>
            <main className="container">
            <Heading title="CATEGORY"/>

                <div className="flex gap-2 lg:gap-5 justify-between pt-5">
                    <Menu item={{url:item1, name:"Vagetable"}}/>
                    <Menu item={{url:item2, name:"FRUITS"}}/>
                    <Menu item={{url:item3, name:"DRINKS"}}/>
                    <Menu item={{url:item4, name:"FRESH NUTS"}}/>
                    <Menu item={{url:item5, name:"FRESH FISH"}}/>
                    <Menu item={{url:item6, name:"MEAT"}}/>

                </div>
        <div className="flex justify-center gap-5 pt-10">
                    <Dots/>
                    <Dots/>
                    <Dots/>
                    <Dots/>
        </div>
            </main>
        </>
    )
}

function Menu({item}){
    return(
        <>
       
            <div className="p-2 text-center">
                <img src={item.url} alt="" />
                <h3>{item.name}</h3>
            </div>
        
        </>
    )
}

function Dots(){
    return(
        <>
        <div className="bg-slate-400 w-4 h-4 rounded-full hover:bg-pri-500 transition">

        </div>
        </>
    )
}

function Heading({title}){
    return(
        <>
        <div className="pt-10">
                    <h2 className="text-2xl font-bold">{title}</h2>
                </div>
        </>
    )
}
export default Category