const prompt = require('prompt-sync')();

function calculateSqrtOf2PowerX(x) {
  // Cek apakah input bilangan negatif
  if (x < 0) {
    return "Tidak bisa input bilangan negatif";
  }

  // Jika bilangan genap dan tidak negatif, hitung akar pangkat 2 dari 2^x
  else {
    let result = Math.sqrt(Math.pow(2, x));
    return `Hasil akar pangkat 2 dari 2^${x} adalah ${result}`;
  }
}

// Fungsi untuk meminta input bilangan genap
function getEvenNumber() {
  let x;
  while (true) {
    x = prompt("Masukkan bilangan genap: ");
    
    // Cek apakah input adalah angka
    if (isNaN(x)) {
      console.log("Input tidak valid, harus berupa angka.");
    } 
    else {
      x = parseInt(x); // Konversi input menjadi bilangan bulat

      // Cek apakah bilangan ganjil
      if (x % 2 !== 0) {
        console.log("Tidak bisa input bilangan ganjil.");
      } 
      else {
        break; // Keluar dari loop jika bilangan genap dan valid
      }
    }
  }
  return x;
}
// Meminta input bilangan genap dari user
let x = getEvenNumber();
console.log(calculateSqrtOf2PowerX(x));
