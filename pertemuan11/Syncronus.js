const { persiapan, rebusAir, masak } = require("./Persiapan.js");

const main = () => {
    setTimeout(() => {
        persiapan();
        setTimeout(() => {
            rebusAir();
            setTimeout(() => {
                masak();
            }, 3000);
        }, 7000);
    }, 5000);
};

main();
