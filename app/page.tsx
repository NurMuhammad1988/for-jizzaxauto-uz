import Image from "next/image";
import { CustomFilter, Hero, SearchBar, CarCard } from "@/components";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";

//nextda tsda shunday import export qilinarkan @ bu degani shu asosiy failni ichidan degani yani har bitta papkani alohida yozib o'tirish shart emas ekan bu import,export qilishda qulay degani

//nextda tsda shunday import export qilinarkan yani dasturchi component papkani o'zi ochib ichiga hamma componentni yozadi bu huddi reactni o'zidagi asosiy app.jsx papkaga o'hshaydi lekin sintaksiz sal boshqacha

export default async function Home({ searchParams }) {
    const allCars = await fetchCars({
        manufacturer: searchParams.manufacturer || "",
        year: searchParams.year || 2022,
        fuel: searchParams.fuel || "",
        limit: searchParams.limit || 10,
        model: searchParams.model || "",
    });
    const isDataEmpty =
        !Array.isArray(allCars) || allCars.length < 1 || !allCars;
    // bu repid apidan kelgan databazalarni chaqirish kodi
    //search siystem
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
                    <div className="home__filter-container">
                        <CustomFilter title="fuel" options={fuels} />
                        <CustomFilter
                            title="year"
                            options={yearsOfProduction}
                        />
                    </div>
                </div>

                {!isDataEmpty ? (
                    <section>
                        <div className="home__cars-wrapper">
                            {allCars?.map((car) => (
                                <CarCard car={car} />
                            ))}
                        </div>
                    </section>
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
