"use client";
// import React from 'react'
import { useState, Fragment } from "react";
import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";
// combobox va transiton headlessUI saytidan npm i @headlessui/react shunday yuklab olib kelindi va pastga chaqirildi bu ui yani user interface bunda tayyor react tailwind componentlar bo'lar ekan yuqoridagidan yuklab import qilib ishlatsa bo'lar ekan
import { manufacturers } from "@/constants"; //yani qidiruv yani quey so'rovi jo'natilganda shu o'zgaruvchi ichidagi malumotlardan qidaradi qizig'i constantsni ichida index.tsni ichida turipti bu manufactuters nextda papkani ichidagi filelardan topib kelib lekin import qilishda  asosiy papkani adresi yozilarkan buham import export qilishda qulay ekan
import { SearchManufactuterProps } from "@/ts";//ts papkani ichidagi ichidagi index.ts fileda yozilib chaqirildi bu props

const SearchManufactuter = ({
    manufacturer,
    setManufacturer,
}: SearchManufactuterProps) => {
    const [query, setQuery] = useState("");

    const filtredManufacturers =
        query === ""
            ? manufacturers
            : manufacturers.filter((item) =>
                  item
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              );

    return (
        <div className="search-manufacturer">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full ">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image
                            src="/car-logo.svg"
                            width={20}
                            height={20}
                            className="ml-4"
                            alt="Car Logo"
                        />
                    </Combobox.Button>

                    <Combobox.Input
                        className="search-manufacturer__input"
                        placeholder="Volkswagen"
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <Transition
                        as={Fragment}
                        leave="transiton ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options>
                            {filtredManufacturers.map((item) => (
                                <Combobox.Option
                                    key={item}
                                    className={({ active }) => `
                                        relative search-manufacturer__option
                                        ${
                                            active
                                                ? "bg-primary-blue text-white"
                                                : "text-gray-900"
                                        }`}
                                    value={item}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    selected
                                                        ? "font-medium"
                                                        : "font-normal"
                                                }`}
                                            >
                                                {item}
                                            </span>
                                            {selected ? (
                                                <span
                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                        active
                                                            ? "text-white"
                                                            : "text-teal-600"
                                                    }`}
                                                ></span>
                                            ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};

export default SearchManufactuter;
