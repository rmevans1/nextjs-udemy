import Link from "next/link";
import NavBar from "@/components/NavBar";
import Header from "@/pages/restaurant/components/Header";
import RestaurantNav from "@/pages/restaurant/components/RestaurantNav";

export default function RestaurantMenu() {
    return (

        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                <NavBar />
                <Header />
                <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                    <div className="bg-white w-[100%] rounded p-3 shadow">
                        <RestaurantNav />
                        {/* MENU */}

                        {/* MENU */}
                    </div>
                </div>
                {/* DESCRIPTION PORTION */}
            </main>
        </main>

    )
}