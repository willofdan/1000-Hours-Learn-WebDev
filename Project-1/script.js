const pilihan = document.querySelector("#feel");
const tampil1 = document.querySelector(".output");
const tampil2 = document.querySelector(".output2");

pilihan.addEventListener("change", setQuotes);

function setQuotes(){
    const choice = pilihan.value;

    if(choice === "senang"){
        tampil1.textContent = 
        '"Jika kamu bersyukur, Aku akan tambahkan (nikmat) kepadamu."(QS. Ibrahim: 7)'
        tampil2.textContent = 'Umar bin Khattab radhiyallahu \‘anhu berkata: "Jika engkau merasa senang, bersyukurlah. Dan jika engkau diuji, bersabarlah. Karena Allah selalu dekat dengan hamba-Nya yang bersabar dan bersyukur."'
    } else if(choice === "sedih"){
        tampil1.textContent = '"Janganlah kamu bersikap lemah, dan janganlah (pula) kamu bersedih hati, padahal kamulah orang-orang yang paling tinggi (derajatnya), jika kamu orang-orang yang beriman."(QS. Ali Imran: 139)'
        tampil2.textContent = '"Ketika kamu merasa sedih, ingatlah bahwa Allah telah menyiapkan sesuatu yang lebih baik setelah kesabaranmu."(Ulama)'
    } else if(choice === "marah"){
        tampil1.textContent = 'Rasulullah ﷺ bersabda: "Orang yang kuat bukanlah yang pandai bergulat, tetapi orang yang kuat adalah yang dapat mengendalikan dirinya ketika marah."(HR. Bukhari dan Muslim)'
        tampil2.textContent = '"Diam adalah senjata orang yang bijak ketika marah. Jangan biarkan lidahmu melukai hati yang seharusnya kamu jaga."(Ulama)'
    } else if(choice === "gelisah"){
        tampil1.textContent = '"Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram."(QS. Ar-Ra’d: 28)'
        tampil2.textContent = '"Ya Allah, aku berlindung kepada-Mu dari kegelisahan dan kesedihan, dari kelemahan dan kemalasan, dari rasa takut dan kekikiran, serta dari tekanan utang dan dominasi orang lain."(HR. Abu Dawud)'
    } else{
        tampil1.textContent = ""
        tampil2.textContent = ""
    }
}