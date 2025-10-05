
// JavaScript functionality can be added here.
function aktualizujZegar() {
    const data = new Date();
    const godziny = data.getHours();
    const minuty = data.getMinutes();
    const sekundy = data.getSeconds();
  
    // Dodaj zer przed pojedyncze cyfry dla lepszego formatu
    const godzinyStr = godziny < 10 ? "0" + godziny : godziny;
    const minutyStr = minuty < 10 ? "0" + minuty : minuty;
    const sekundyStr = sekundy < 10 ? "0" + sekundy : sekundy;
  
    const czas = godzinyStr + ":" + minutyStr + ":" + sekundyStr;
    document.getElementById("zegar").innerHTML = czas;
  }
  
  // Aktualizuj zegar co sekundę
  setInterval(aktualizujZegar, 1000);