// // Definisi fungsi persiapan

// PRODUCING PROMISE

// const persiapan = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("menyiapan bahan....");
//         }, 3000);
//     });
// };

// // Definisi fungsi rebusAir
// const rebusAir = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("merebus air....");
//         }, 7000);
//     });
// };

// // Definisi fungsi masak
// const masak = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("masak mie....");
//         }, 5000);
//     });
// };

// // Ekspor semua fungsi
// module.exports = { persiapan, rebusAir, masak };
// const Persiapan = () => {
//     console.log("Mempersiapkan bahan....");
//     // return new Promise((resolve) => {
//     //     setTimeout(() => {
//     //         resolve("Menyiapkan Bahan ...");
//     //     }, 3000);
//     // });
// };

// const rebusAir = () => {
//     console.log("Mempersiapkan....");
//     // return new Promise((resolve) => {
//     //     setTimeout(() => {
//     //         resolve("Merebus Air ...");
//     //     }, 7000);
//     // });
// };

// const masak = () => {
//     console.log("Masak mie...");
//     // return new Promise((resolve) => {
//     //     setTimeout(() => {
//     //         resolve("Masak Mie ...");
//     //     }, 5000);
//     // });
// };
// module.exports = {persiapan, rebusAir, masak};

// CONSUMING PROMISE
const main = () => {
    persiapan()
        .then((res) => {
            console.log(res);
            return rebusAir();
        })
        .then((res) => {
            console.log(res);
            return masak();
        })
        .then((res) => {
            console.log(res);
        });
};

main();
