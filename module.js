let currentIndex = 0;
let currentIndex2 = 0;
let itemsPerPage = 3;
let itemsPerPage2 = 2;

function updateItemsPerPage() {
  itemsPerPage = window.innerWidth > window.innerHeight ? 3 : 1;
  itemsPerPage2 = window.innerWidth > window.innerHeight ? 2 : 1;
}

const topic = [
  {
    imageUrl: "./assets/image/Biruni.png",

    title: "Matematikawan dan Fisikawan Al-Biruni",

    description:
      "Merupakan matematikawan Persia, astronom, fisikawan, sarjana, penulis ensiklopedia, filsuf, pengembara, sejarawan, ahli geografi, ahli farmasi dan guru, yang banyak menyumbang kepada bidang matematika, filsafat, obat-obatan.",

    link: "https://example.com/1",
  },

  {
    imageUrl: "./assets/image/Buzjani.png",

    title: "Astronom Abul Wafa Muhammad Al Buzjani",

    description:
      "Adalah seorang astronom dan matematikawan asal Persia. Pada tahun 959, Abul Wafa pindah ke Irak, dan mempelajari matematika khususnya trigonometri di sana. Dia juga mempelajari pergerakan bulan; salah satu kawah di bulan dinamai Abul Wáfa sesuai dengan namanya.",

    link: "https://example.com/2",
  },

  {
    imageUrl: "./assets/image/omar.png",

    title: "Matematikawan 'Umar Khayyam",

    description:
      "Sebagai seorang matematikawan, dia paling terkenal karena karyanya pada klasifikasi dan solusi persamaan kubik, di mana dia memberikan solusi geometris dengan perpotongan kerucut.[7] Khayyam juga berkontribusi pada pemahaman aksioma paralel.[8]:284 Sebagai seorang astronom, ia merancang kalender Jalali, kalender matahari dengan siklus interkalasi 33 tahun yang sangat tepat[9][10]:659 yang memberikan dasar untuk kalender Persia yang masih digunakan setelah hampir satu milenium.",

    link: "https://example.com/3",
  },

  {
    imageUrl: "./assets/image/hazan.png",

    title: "Sang inspirator Ibnu al-Haitsam",

    description:
      "Adalah seorang ilmuwan yang ahli dalam bidang sains, falak, matematika, geometri, pengobatan, dan filsafat. Ia banyak pula melakukan penelitian mengenai cahaya, dan telah memberikan banyak inspirasi pada ahli sains barat, seperti Roger Bacon, dan Kepler dalam menciptakan mikroskop serta teleskop.",

    link: "https://example.com/1",
  },

  {
    imageUrl: "./assets/image/sina.png",

    title: "Filsuf paling berpengaruh Ibnu Sina",

    description:
      "Bagi banyak orang, dia adalah Bapak Kedokteran Modern. Dari sekitar 450 judul yang ditulisnya, 240 di antaranya selamat dan bertahan hingga hari ini, yang di antaranya terdapat 240 judul dalam bidang filsafat dan 40 judul dalam pengobatan.",

    link: "https://example.com/2",
  },

  {
    imageUrl: "./assets/image/azar.png",

    title: "Astronom Abū Ishāq Ibrāhīm al-Zarqālī",

    description:
      "Salah satu karya terbesarnya adalah Al-Muqtabis (The Book of Gleanings), di mana ia menyajikan tabel perhitungan astronomi yang akurat dan metodologi pengukuran instrumen astronomi. Al-Zarqālī juga menciptakan astrolab, sebuah instrumen astronomi yang digunakan untuk mengukur posisi bintang dan planet di langit. Penemuan dan peningkatannya dalam astrolab telah mendukung perkembangan astronomi selama berabad-abad, memfasilitasi pengamatan dan perhitungan yang lebih tepat.",

    link: "https://example.com/3",
  },

  {
    imageUrl: "./assets/image/bajja.png",

    title: "Fisikawan dan sastrawan Ibnu Bajjah",

    description:
      "Pemikirannya memiliki pengaruh yang jelas pada Ibnu Rusyd dan Albertus Magnus. Kebanyakan buku dan tulisannya tidak lengkap (atau teratur baik) karena kematiannya yang cepat. Ia memiliki pengetahuan yang luas pada kedokteran, Matematika, dan Astronomi. Sumbangan utamanya pada filsafat Islam ialah gagasannya pada Fenomenologi Jiwa, tetapi sayangnya tak lengkap.",

    link: "https://example.com/1",
  },

  {
    imageUrl: "./assets/image/farabi.png",

    title: "Ilmuwan dan filsuf Al-Farabi",

    description:
      "Al-Farabi menulis karya yang beragam, mulai dari epistemologi, metafisika, logika, matematika, sains (filsafat alam), ilmu politik, tata bahasa, dan musik. Namun, minat Al-Farabi yang terbesar adalah soal pendidikan.[2] Karyanya yang berjudul Ihsa Al-'Ulum (Indonesia: Klasifikasi Ilmu; Latin: De Scientiis) merupakan pemikirannya yang paling banyak dikutip dan diterjemahkan dalam bahasa asing. Al-Farabi dijuluki sebagai Guru Kedua (al-Mu'allim al-Tsānī) setelah Aristoteles karena dipandang sebagai komentator terbaik Guru Pertama.",

    link: "https://example.com/2",
  },

  {
    imageUrl: "./assets/image/bj.png",

    title: "Profesor dan ilmuwan B. J. Habibie",

    description: "Dikenal luas sebagai seorang profesor dan ilmuwan dalam teknologi aviasi internasional dan satu-satunya presiden Indonesia hingga saat ini yang berlatarbelakang teknokrat.",

    link: "https://example.com/3",
  },
];

const blog = [
  {
    imageUrl: "./assets/image/astronomy.jpg",
    title: "Astronomy: Theory of eclipses by Ibnu Yunus",
    author: "Written by Abu Rayhan",
    link: "https://example.com/1",
  },

  {
    imageUrl: "./assets/image/dokter.jpg",
    title: "Medicine: Structure of the human body by Ibnu Sina",
    author: "Written by Ilham Nasrudin",
    link: "https://example.com/1",
  },

  {
    imageUrl: "./assets/image/fisika.jpg",
    title: "Physics: Calculating time and space by Ibnu Haitsam",
    author: "Written by Abdul Muqadar",
    link: "https://example.com/1",
  },

  {
    imageUrl: "./assets/image/optik.jpg",
    title: "Physics: The field of optics as the beginning of the camera by Ibnu Al Haitham",
    author: "Written by 'Aarif Faqiih",
    link: "https://example.com/1",
  },
];

function loadBoxes() {
  updateItemsPerPage();
  const container = document.getElementById("boxes");
  container.innerHTML = "";

  const startIndex = currentIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const topicsToShow = topic.slice(startIndex, endIndex);

  topicsToShow.forEach((item, index) => {
    const box = document.createElement("div");
    if (index === 1) {
      box.classList.add("box2");
    } else {
      box.classList.add("box");
    }

    const top = document.createElement("div");
    top.classList.add("top");
    top.style.backgroundImage = `url('${item.imageUrl}')`;
    box.appendChild(top);

    const bottom = document.createElement("div");
    bottom.classList.add("bottom");

    const heading = document.createElement("h3");
    heading.textContent = item.title;

    const paragraph = document.createElement("p");
    paragraph.textContent = item.description;

    const link = document.createElement("a");
    link.textContent = "Read More >";
    if (item.link) {
      link.href = item.link;
    }

    bottom.appendChild(heading);
    bottom.appendChild(paragraph);
    bottom.appendChild(link);

    box.appendChild(bottom);

    const img = document.createElement("img");
    if (itemsPerPage === 3 && index === 1) {
      img.src = "/assets/svg/topic/topic text background 2.svg";
    } else {
      img.src = "/assets/svg/topic/topic text background 1.svg";
    }

    img.alt = "";

    box.appendChild(img);

    container.appendChild(box);
  });
}

function loadBoxes2() {
  updateItemsPerPage();
  const container = document.getElementById("boxes2");
  container.innerHTML = "";

  const startIndex = currentIndex2 * itemsPerPage2;
  const endIndex = startIndex + itemsPerPage2;
  const blogToShow = blog.slice(startIndex, endIndex);

  blogToShow.forEach((item, index) => {
    const box = document.createElement("div");
    box.classList.add("blogbox");

    const top = document.createElement("div");
    top.classList.add("top");
    top.style.backgroundImage = `url('${item.imageUrl}')`;
    box.appendChild(top);

    const bottom = document.createElement("div");
    bottom.classList.add("bottom");

    const heading = document.createElement("h3");
    heading.textContent = item.title;

    const paragraph = document.createElement("p");
    paragraph.textContent = item.author;

    const link = document.createElement("a");
    link.textContent = "Open Blog >";
    if (item.link) {
      link.href = item.link;
    }

    bottom.appendChild(heading);
    bottom.appendChild(paragraph);
    bottom.appendChild(link);

    box.appendChild(bottom);

    const img = document.createElement("img");
    if (itemsPerPage2 === 2 && index === 1) {
      img.src = "/assets/svg/blog/blog background 2.svg";
    } else {
      img.src = "/assets/svg/blog/blog background 1.svg";
    }

    img.alt = "";

    box.appendChild(img);

    container.appendChild(box);
  });
}

function loadPageIndicators() {
  updateItemsPerPage();
  const pageIndicators = document.getElementById("pageIndicators");
  pageIndicators.innerHTML = "";

  const numOfPages = Math.ceil(topic.length / itemsPerPage);
  for (let i = 0; i < numOfPages; i++) {
    const pageIndicator = document.createElement("div");
    pageIndicator.classList.add("page-indicator");

    if (i === currentIndex) {
      pageIndicator.classList.add("active");
    }

    pageIndicator.addEventListener("click", () => {
      currentIndex = i;
      loadBoxes();
      loadPageIndicators();
    });

    pageIndicators.appendChild(pageIndicator);
  }
}

function loadPageIndicators2() {
  updateItemsPerPage();
  const pageIndicators = document.getElementById("pageIndicators2");
  pageIndicators.innerHTML = "";

  const numOfPages = Math.ceil(blog.length / itemsPerPage2);
  for (let i = 0; i < numOfPages; i++) {
    const pageIndicator = document.createElement("div");
    pageIndicator.classList.add("page-indicator");

    if (i === currentIndex) {
      pageIndicator.classList.add("active");
    }

    pageIndicator.addEventListener("click", () => {
      currentIndex2 = i;
      loadBoxes2();
      loadPageIndicators2();
    });

    pageIndicators.appendChild(pageIndicator);
  }
}

document.getElementById("next").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex * itemsPerPage >= topic.length) {
    currentIndex = 0;
  }
  loadBoxes();
  loadPageIndicators();
});
document.getElementById("previous").addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = Math.ceil(topic.length / itemsPerPage) - 1;
  }
  loadBoxes();
  loadPageIndicators();
});

document.getElementById("next2").addEventListener("click", () => {
  currentIndex2++;
  if (currentIndex2 * itemsPerPage2 >= blog.length) {
    currentIndex2 = 0;
  }
  loadBoxes2();
  loadPageIndicators2();
});
document.getElementById("previous2").addEventListener("click", () => {
  currentIndex2--;
  if (currentIndex2 < 0) {
    currentIndex2 = Math.ceil(blog.length / itemsPerPage2) - 1;
  }
  loadBoxes2();
  loadPageIndicators2();
});

window.addEventListener("resize", () => {
  loadBoxes();
  loadBoxes2();
  loadPageIndicators();
  loadPageIndicators2();
});

loadPageIndicators();
loadPageIndicators2();
loadBoxes();
loadBoxes2();
