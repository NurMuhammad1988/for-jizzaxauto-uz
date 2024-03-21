import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";


export const metadata: Metadata = {
    title: "Car Hub",
    description: "Discover the best cars in the world.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="relative">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

//nextda tsda shunday import export qilinarkan yani dasturchi component papkani o'zi ochib ichiga hamma componentni yozadi bu huddi reactni o'zidagi asosiy app.jsx papkaga o'hshaydi lekin sintaksiz sal boshqacha 
//yani html shunday render qilinarkan huddi reactni o'zida index.htmlda root chaqirib qo'yganday yani bu asosiy raect next ts component hisoblanadi
