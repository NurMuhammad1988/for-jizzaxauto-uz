// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
//   params: {model: 'corolla'},
//   headers: {
//     // 'X-RapidAPI-Key': 'b24dd1ad3bmsh959c49b96b3e0dbp1024f2jsn34dde71fcae3',
//     'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',

//     'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

// //////////////////////////////////////////
// const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
// const options = {
//     method: "GET",
//     headers: {
//         // 'X-RapidAPI-Key': 'b24dd1ad3bmsh959c49b96b3e0dbp1024f2jsn34dde71fcae3',
//         "X-RapidAPI-Key": "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA",
//         "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//     },
// };

// try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }
// //////////////////////////////////////////

export async function fetchCars() {
    const headers = {
        "X-RapidAPI-Key": "b24dd1ad3bmsh959c49b96b3e0dbp1024f2jsn34dde71fcae3", //bu o'zimni keyim
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    const response = await fetch(
        "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",

        {
            headers: headers,
        }
    );

    const result = await response.json();
    return result;
}
// "X-RapidAPI-Key": "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA",//bu Adrianni api keyi !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! BU KEYHAM ISHLADI AGAR BIR OYDAN KEYIN O'ZIMNI KEYIM ISHLAMAY QOLSA ADRIANNI KEYINI ISHLATSAMHAM BO'LISHI MUMKUN CHUNKI ADRIANNI KEYIHAM ISHLADI BUGUN SANA 2024 YIL 24 CHI MART !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
