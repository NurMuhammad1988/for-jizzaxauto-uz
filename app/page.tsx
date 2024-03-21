import Image from "next/image";

import { Hero } from "@/components"; //nextda tsda shunday import export qilinarkan @ bu degani shu asosiy failni ichidan degani yani har bittapapkani alohida yozib o'tirish shart emas ekan bu import export qilishda qulay degani

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Hero />
        </main>
    );
}
