import NavBar from "@/components/NavBar";
import Header from "@/pages/search/components/Header";
import SideBar from "@/pages/search/components/SideBar";
import RestaurantCard from "@/pages/search/components/RestaurantCard";

export default function Search() {
    return (

        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                <NavBar />
                <Header />
                <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                    <SideBar />
                    <div className="w-5/6">
                        <RestaurantCard />
                    </div>
                </div>
            </main>
        </main>

    )
}