import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main
            className={`bg-gray-100 min-h-screen w-screen`}
        >
            <main className={'max-w-screen-2xl m-auto bg-white'}>
                {/* NAVBAR */}
                <nav className={'bg-white p-2 flex justify-between'}>
                    <a href={''} className={'font-bold text-gray-700 text-2xl'}>
                        OpenTable
                    </a>
                    <div>
                        <div className={'flex'}>
                            <button className={'bg-blue-400 text-white border p-1 px-4 rounded mr-3'}>
                                SignIn
                            </button>
                            <button className={'border p-1 px-4 rounded'}>
                                SignUp
                            </button>
                        </div>
                    </div>
                </nav>
                {/* NAVBAR */}
                {/* HEADER */}
                    <div className={'h-96 overflow-hidden'}>
                        <div className={'bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6985] h-full flex justify-center items-center'}>
                            <h1 className={'text-7xl text-white capitalize text-shadow text-center'}>
                                Milestones Grill (Tornto)
                            </h1>
                        </div>
                    </div>
                {/* HEADER */}
                {/* DESCRIPTION PORTION*/}
                <div className={'flex m-auto w-2/3 justify-between items-start 0 -mt-11'}>
                    <div className={'bg-white w-[70%] rounded p-3 shadow'}>
                        {/* Restaurant Nav */}
                            <nav className={'flex text-reg border-b pb-2'}>
                                <a href={''} className={'mr-7'}>Overview</a>
                                <a href={''} className={'mr-7'}>Menu</a>
                            </nav>
                        {/* Restaurant Nav */}
                        {/* Title */}
                        <div className={'mt-4 border-b pb-6'}>
                            <h1 className={'font-bold text-6xl'}>Milestones Grill</h1>
                        </div>
                        {/* Title */}
                        {/* Rating */}
                        <div className={'flex items-end'}>
                            <div className={'ratings mt-2 flex items-center'}>
                                <p>*****</p>
                                <p className={'text-reg ml-3'}>4.9</p>
                            </div>
                            <div>
                                <p className={'text-reg ml-4'}>600 Reviews</p>
                            </div>
                        </div>
                        {/* Rating */}
                        {/* Description */}
                        <div className={'mt-4'}>
                            <p className={'text-lg font-light'}>
                                Welcome to Greg Norman Australian Grille – an Australian heritage restaurant on the waterfront at Barefoot Landing in Myrtle Beach, SC. Our innovative menu features exotic Australian fare and a wine list that has received the Wine Spectator Award of Excellence for more than 15 years, consistently ranking us as Myrtle Beach’s premier steak and seafood restaurant. We didn’t invent waterfront dining. We only mastered it.
                            </p>
                        </div>
                        {/* Description */}
                        {/* Images */}
                        <div>
                            <h1 className={'font-bold text-3xl mt-10 mb-7 border-b pb-5'}>
                                5 Photos
                            </h1>
                            <div className={'flex flex-wrap'}>
                                <img className={'w-56 h-44 mr-1 mb-1'} src={'https://resizer.otstatic.com/v2/photos/xlarge/3/28689912.jpg'} alt={""} />
                                <img className={'w-56 h-44 mr-1 mb-1'} src={'https://resizer.otstatic.com/v2/photos/xlarge/3/28689912.jpg'} alt={""} />
                                <img className={'w-56 h-44 mr-1 mb-1'} src={'https://resizer.otstatic.com/v2/photos/xlarge/3/28689912.jpg'} alt={""} />
                                <img className={'w-56 h-44 mr-1 mb-1'} src={'https://resizer.otstatic.com/v2/photos/xlarge/3/28689912.jpg'} alt={""} />
                                <img className={'w-56 h-44 mr-1 mb-1'} src={'https://resizer.otstatic.com/v2/photos/xlarge/3/28689912.jpg'} alt={""} />
                            </div>
                        </div>
                        {/* Images */}
                        {/* Reviews */}
                        <div>
                            <h1 className={'font-bold text-3xl mt-10 mb-7 border-b pb-5'}>
                                What 100 people are saying
                            </h1>
                            <div>
                                {/*Review Card */}
                                <div className={'border-b pb-7 mb-7'}>
                                    <div className={'flex'}>
                                        <div className={'w-1/6 flex flex-col items-center'}>
                                            <div className={"rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center"}>
                                                <h2 className="text-white text-2xl">MJ</h2>
                                            </div>
                                            <p className={'text-center'}>Michael Jordan</p>
                                        </div>
                                        <div className="ml-10 w-5/6">
                                            <div className="flex items-center">
                                                <div className="flex mr-5">
                                                    *****
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <p className="text-lg font-light">
                                                    Great views, great service, and great food. Drinks were really good. Would definitely go back.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Review Card */}
                            </div>
                        </div>
                        {/* Reviews */}
                    </div>
                </div>
                {/* DESCRIPTION PORTION*/}
            </main>
        </main>
    );
}