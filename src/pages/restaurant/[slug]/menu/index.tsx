import Header from "@/pages/restaurant/components/Header";
import RestaurantNav from "@/pages/restaurant/components/RestaurantNav";
import Menu from "@/pages/restaurant/components/Menu";

export default function RestaurantMenu() {
    return (
        <>
            <Header/>
            <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                <div className="bg-white w-[100%] rounded p-3 shadow">
                    <RestaurantNav/>
                    <Menu/>
                </div>
            </div>
            {/* DESCRIPTION PORTION */}
        </>
    )
}