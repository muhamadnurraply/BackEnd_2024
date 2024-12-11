/**
 * Membuat fungsi download
 * @returns {object} Promise
 */
const download = () => {
    /**
     * Promise dibuat menggunakan class Promise.
     * Promise menerima callback function/executor.
     * Executor menerima 2 params: resolve dan reject.
     * resolve dipanggil jika proses berhasil.
     * reject dipanggil jika proses gagal.
     */
    return new Promise((resolve, reject) => {
        const status = true;
        // output nya "donload berhasil"
        // "bisa juga gini" const status = false; output nya = " donload gagal"


        setTimeout(() => {
            if (status) {
                resolve("Download Selesai");
            } else {
                reject("Download Gagal");
            }
        }, 5000);
    });
};

// console.log(download());
download()
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})