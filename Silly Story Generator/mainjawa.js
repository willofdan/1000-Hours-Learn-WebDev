const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Cerita baru
const storyText = "Hari itu suhu mencapai 34 derajat celcius di luar, jadi :insertx: memutuskan untuk pergi ke :inserty:. Ketika sampai di sana, mereka melihat sesuatu yang mengejutkan, lalu :insertz:. Pak Budi melihat semuanya, tapi tidak kaget — :insertx: memang terkenal sering membuat hal-hal aneh.";
const insertX = ["Pak Joko si Pelukis", "Bu Wati si Pemain Biola", "Kakang Bagus si Pendongeng"];
const insertY = ["pasar malam", "tepi sungai", "bukit yang tinggi"];
const insertZ = ["jatuh ke kubangan lumpur", "berlari sambil menjerit", "tiba-tiba berubah jadi kucing"];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertz:", zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Pak Budi", name);
  }

  if (document.getElementById("jawa").checked) {
    // Terjemahan Jawa
    newStory = newStory
      .replace("Hari itu suhu mencapai 34 derajat celcius di luar", "Dina iku suhune nganti 34 drajat celcius neng njobo")
      .replace("memutuskan untuk pergi ke", "mutusake kanggo lunga menyang")
      .replace("Ketika sampai di sana, mereka melihat sesuatu yang mengejutkan, lalu", "Pas tekan kana, dheweke weruh sing kagetke, banjur")
      .replace("Pak Budi melihat semuanya, tapi tidak kaget", "Pak Budi weruh kabeh, nanging ora kaget");
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
