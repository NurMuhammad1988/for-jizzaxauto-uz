import Image from "next/image";

import { Hero } from "@/components"; //nextda tsda shunday import export qilinarkan @ bu degani shu asosiy failni ichidan degani yani har bitta papkani alohida yozib o'tirish shart emas ekan bu import,export qilishda qulay degani

//nextda tsda shunday import export qilinarkan yani dasturchi component papkani o'zi ochib ichiga hamma componentni yozadi bu huddi reactni o'zidagi asosiy app.jsx papkaga o'hshaydi lekin sintaksiz sal boshqacha 

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Hero />
        </main>
    );
}
