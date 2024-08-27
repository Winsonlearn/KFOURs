const categoryPhoto = document.getElementById("category-photo");
const memberCards = document.getElementById("member-cards");
const filterDropdown = document.getElementById("team-filter");

const members = [
  {
    name: "Kellen Nataline",
    dob: "07 des 2008",
    instagram: "klln.ntlne",
    categories: ["chairperson"] //
  },
  {
    name: "Lavenia Sherlifany",
    dob: "18 Okt 2008",
    instagram: "laveniash_",
    categories: ["event", "lineup-cleanliness", "art-appreciation"]
  },
  {
    name: "Muhammad Rafie Khalaf Faith",
    dob: "9 September 2008",
    instagram: "ravvie._",
    categories: ["event", "security", "lineup-cleanliness"]
  },
  {
    name: "Frizzy Alnaufal Lenggana",
    dob: "4 Februari 2009",
    instagram: "7rizzyall",
    categories: ["documentation"]
  },
  {
    name: "DL. Milka Lim",
    dob: "18 Desember 2009",
    instagram: "dmilkal",
    categories: ["event", "lineup-cleanliness"]
  },
  {
    name: "Winson",
    dob: "20 Agustus 2008",
    instagram: "winson.liee",
    categories: ["multimedia"]
  },
  {
    name: "Abdul Atha Mori",
    dob: "28 Juni 2009",
    instagram: "thawrld__",
    categories: ["communication"]
  },
  {
    name: "Kelly Louis Alpendo",
    dob: "27 April 2008",
    instagram: "louissss_ssss",
    categories: ["event", "lineup-cleanliness"]
  },
  {
    name: "Fatiyyah Alphahasanah Deka",
    dob: "31 Mei 2008",
    instagram: "fatiyyahd",
    categories: ["documentation"]
  },
  {
    name: "Muhammad Athallah Rasya",
    dob: "05 Desember 2008",
    instagram: "athallah_rasya12",
    categories: ["security"]
  },
  {
    name: "Calysta Setiawan",
    dob: "15 Mei 2008",
    instagram: "clystaww",
    categories: ["art-appreciation", "security", "event"]
  },
  {
    name: "Catherine Novia Hartanto",
    dob: "11 November 2009",
    instagram: "nviaa_cath",
    categories: ["treasurer", "security"]
  },
  {
    name: "Syiezha Naiyra Qanieta Rasyid",
    dob: "5 Maret 2009",
    instagram: "not_zizi_",
    categories: ["design", "shoe-guards"]
  },
  {
    name: "Rumaysha Jasmine Aurelia Juraijin",
    dob: "19 Juni 2009",
    instagram: "_.jasmine.tea._",
    categories: ["design"]
  },
  {
    name: "Cheryl Vincentia",
    dob: "3 Desember 2009",
    instagram: "chervinn_",
    categories: ["design", "languages"]
  },
  {
    name: "Kayyisah Putri Khairani",
    dob: "13 Januari 2010",
    instagram: "ky.khair",
    categories: ["documentation", "lineup-cleanliness"]
  },
  {
    name: "Nadhifa Hilaliyah",
    dob: "19 Agustus 2009",
    instagram: "alnadhist",
    categories: ["shoe-guards"]
  },
  {
    name: "Adeline",
    dob: "19 Juni 2009",
    instagram: "adelineeau",
    categories: ["languages"]
  },
  {
    name: "Felicia Monica Christine",
    dob: "1 Mei 2008",
    instagram: "feliciiamonica",
    categories: ["documentation", "languages"]
  },
  {
    name: "Kheisya Mona Maharani",
    dob: "9 April 2008",
    instagram: "kheisyamaharani_",
    categories: ["communication", "secretary"]
  },
  {
    name: "Mishel Maretha Sunardi",
    dob: "29 Maret 2009",
    instagram: "mishells.z",
    categories: ["shoe-guards", "documentation"]
  }
];

const createMemberCard = ({ name, dob, instagram }) => `
  <div class="member-card">
    <h2>${name}</h2>
    <p>Date of Birth: ${dob}</p>
    <a class="instagram-link" href="https://www.instagram.com/${instagram}" target="_blank">
      <i class="fab fa-instagram"></i>@${instagram}
    </a>
  </div>
`;

const updateContent = (category) => {
  let filteredMembers = category === "all" ? members : members.filter(member => member.categories.includes(category));
  
  memberCards.innerHTML = filteredMembers.map(createMemberCard).join("");

  const categoryImages = {
    "chairperson": "chairperson.jpg",
    "secretary": "secretary.jpg",
    "event": "./assets/1.jpeg",
    "communication": "communication.jpg",
    "multimedia": "multimedia.jpg",
    "design": "design.jpg",
    "documentation": "documentation.jpg",
    "art-appreciation": "art-appreciation.jpg",
    "languages": "languages.jpg",
    "lineup-cleanliness": "lineup-cleanliness.jpg",
    "shoe-guards": "shoe-guards.jpg",
    "security": "security.jpg",
    "all": "./assets/1.jpeg"
  };

  // categoryPhoto.src = categoryImages[category];
  categoryPhoto.src = "./assets/1.jpeg";
};

updateContent("all");

filterDropdown.addEventListener("change", (e) => {
  updateContent(e.target.value);
});