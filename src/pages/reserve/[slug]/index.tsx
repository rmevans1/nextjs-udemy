import Header from "@/pages/reserve/components/Header";
import Form from "@/pages/reserve/components/Form";
import Head from "next/head";


export default function ReserveRestaurant() {
    return (
        <>
            <Head>
                <title>Make a reservation | Test Restaurant | OpenTable</title>
            </Head>
            <div className="border-t h-screen">
                <div className="py-9 w-3/5 m-auto">
                    <Header/>
                    <Form/>
                </div>
            </div>
        </>
    )
}