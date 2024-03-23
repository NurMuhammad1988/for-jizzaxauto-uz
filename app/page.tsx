import Image from "next/image";
import { CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import { log } from "console";
//nextda tsda shunday import export qilinarkan @ bu degani shu asosiy failni ichidan degani yani har bitta papkani alohida yozib o'tirish shart emas ekan bu import,export qilishda qulay degani

//nextda tsda shunday import export qilinarkan yani dasturchi component papkani o'zi ochib ichiga hamma componentni yozadi bu huddi reactni o'zidagi asosiy app.jsx papkaga o'hshaydi lekin sintaksiz sal boshqacha

export default async function Home() {
    const allCars = await fetchCars();
    const isDataEmpty =
        !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    console.log(allCars);

    return (
        <main className="overflow-hidden">
            <Hero />
            <div className="mt-12 padding-x padding-y max-width" id="discover">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold ">Car Catalogue</h1>
                    <p>Exlore the car you might like</p>
                </div>
                <div className="home__filters">
                    <SearchBar />
                    <div className="home home__filter-container">
                        <CustomFilter title="fuel" />
                        <CustomFilter title="year" />
                    </div>
                </div>

                {!isDataEmpty ? (
                    <section>WE HAVE CARS</section>
                ) : (
                    <div className="home__error-container">
                        <h2 className="text-black text-xl font-bold">
                            Oops, no results
                        </h2>
                        <p>{allCars?.message}</p>
                    </div>
                )}
            </div>
        </main>
    );
}
