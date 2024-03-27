import { CarProps } from "@/ts";

export async function fetchCars() {
    const headers = {
        "X-RapidAPI-Key": "b24dd1ad3bmsh959c49b96b3e0dbp1024f2jsn34dde71fcae3", //bu o'zimni keyim
        // apidan kelayotgan malumotlar
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    const response = await fetch(
        "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3",
        // yane serverdan kelayotgan malumotlar har bir mashinada har hil ekan yani serverda har bir moshin uchun alohida malumotlar yozib qo'yilgan

        {
            headers: headers,
        }
    );

    const result = await response.json();
    return result;
}
// "X-RapidAPI-Key": "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA",//bu Adrianni api keyi !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! BU KEYHAM ISHLADI AGAR BIR OYDAN KEYIN O'ZIMNI KEYIM ISHLAMAY QOLSA ADRIANNI KEYINI ISHLATSAMHAM BO'LISHI MUMKUN CHUNKI ADRIANNI KEYIHAM ISHLADI BUGUN SANA 2024 YIL 24 CHI MART !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export const calculateCarRent = (city_mpg: number, year: number) => {
    // apidan kelayotgan malumotlarga qo'shildi
    const basePricePerDay = 50; // Dollarda kuniga asosiy ijara narxi
    const mileageFactor = 0.1; // Har bir milga qo'shimcha stavka
    const ageFactor = 0.05; // Avtomobil yoshi uchun qo'shimcha stavka

    // Kilometr va yoshga qarab qo'shimcha tarifni hisoblang
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Bir kunlik ijaraning umumiy stavkasini hisoblash
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};



export const genereteCarImageUrl = (car: CarProps, angle?: string) => {

    const url = new URL("https://cdn.imagin.studio/getimage");
    
    const { make,year, model  } = car;
  
    // url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');//bu radnoy key pastdagi esa 
    url.searchParams.append('customer','hrjavascript-mastery');

    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;

};

// 2:05:06 chi minutda qoldi shu joyida url manzillarini yozishiga etiborli bo'l            
