// Kullanıcıdan kaç adet isim gireceğini soralım
// Girdiği her bir ismi "isimler" dizisine kaydedelim.
// Kaydettikten sonra bir listeleyelim.
// Daha sonra tüm girilen isimleri alfabetik olarak sıralayalım. (ipucu: sort() 'u araştırabilirsiniz)

function isimleriSirala() {
  let isimler = [];
  
  let adet = Number(prompt("Kaç adet isim girmek istersiniz?"));

  for (let i = 0; i < adet; i++) {
    let isim = prompt((i + 1) + ". ismi giriniz:");
    isimler.push(isim); 

    isimler.sort();
    console.log(`Alfabetik sıralama: ${isimler}`);
  }
}

isimleriSirala();
