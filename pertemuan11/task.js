/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
    console.log("Download selesai");
    console.log(`Hasil Download: ${result}`);
  };

/**
 * Fungsi untuk download file
 * @returns {Promise<string>} - Promise yang menyelesaikan nama file
 */
const download = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = "windows-10.exe";
        resolve(result);
      }, 3000);
    });
  };

/**
 * Fungsi utama untuk menjalankan proses download menggunakan async/await
 */
const main = async () => {
    try {
      const result = await download();
      showDownload(result);
    } catch (error) {
      console.error("Download gagal:", error);
    }
  };
  
  main();
  