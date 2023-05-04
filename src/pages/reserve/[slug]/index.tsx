import Link from "next/link";
import NavBar from "@/components/NavBar";
import Header from "@/pages/reserve/components/Header";
import Form from "@/pages/reserve/components/Form";


export default function ReserveRestaurant() {
    return (

        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                <NavBar />
                <div className="border-t h-screen">
                    <div className="py-9 w-3/5 m-auto">
                        <Header />
                        <Form />
                    </div>
                </div>
            </main>
        </main>

)
}