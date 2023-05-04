import NavBar from "@/components/NavBar";
import Header from "@/pages/restaurant/components/Header";
import RestaurantNav from "@/pages/restaurant/components/RestaurantNav";
import Title from "@/pages/restaurant/components/Title";
import Rating from "@/pages/restaurant/components/Rating";
import Description from "@/pages/restaurant/components/Description";
import Images from "@/pages/restaurant/components/Images";
import Reviews from "@/pages/restaurant/components/Reviews";
import Reservations from "@/pages/restaurant/components/Reservations";

export default function RestaurantDetails() {
    return (

        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                <NavBar />
                <Header />
                {/* DESCRIPTION PORTION */}
                <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                    <div className="bg-white w-[70%] rounded p-3 shadow">
                        <RestaurantNav />
                        <Title />
                        <Rating />
                        <Description />
                        <Images />
                        <Reviews />
                    </div>
                    <div className="w-[27%] relative text-reg">
                        <Reservations />
                    </div>
                </div>
                {/* DESCRIPTION PORTION */}
            </main>
        </main>

    )
}