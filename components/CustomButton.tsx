"use client";//"use-client" busiz loyiha ishlamaydi sababini yahshilab o'qi savol next jsda use client nima va nima uchun usiz loyiha ishlamaydi???????????????????????????????????????
// import React from 'react'
import { CustomButtonProps } from "@/ts";
import Image from "next/image";

const CustomButton = ({
    title,
    containerStyles,
    handleClick,
    btnType
}: CustomButtonProps) => {
    return (
        <button
        // yani bu joyda alohida CustomButton file yaratildi va ichiga oddiy button yozildi buttonni parametiriga esa kerakli parametrlar chaqirildi clasnamega globals.cssdan custom-btn root clasi chaqirildi uoniga esa shu clasniishlatadigan containerStiyyle chaqirilidi containerstylega index.ts failida CustomButtonProps o'zgaruvchi yoziliv bu yerga import qilindi CustomButtonPropsda malumot turlari qanday ko'rinishda kelishkerakligi yozildi va CustomButton failini propisiga CustomButtonPropsdagi malumotlar chaqirildi va kerakli joylarga qo'yildi va hero filega bu ButtonCustom file chaqirildi hero failda chaqirilgan buttonni parametrilga yozilgan class va boshqa parametrlar CustomButtonProps failida render qilindi
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>{title}</span>
        </button>
    );
};

export default CustomButton;
