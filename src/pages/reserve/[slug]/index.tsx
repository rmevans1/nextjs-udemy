import Link from "next/link";
import NavBar from "@/components/NavBar";
import Header from "@/pages/reserve/components/Header";
import Form from "@/pages/reserve/components/Form";


export default function ReserveRestaurant() {
    return (
        <>
            <div className="border-t h-screen">
                <div className="py-9 w-3/5 m-auto">
                    <Header/>
                    <Form/>
                </div>
            </div>
        </>
    )
}