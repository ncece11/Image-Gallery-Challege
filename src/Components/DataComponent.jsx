const mockData = [
  {
    id: 0,
    img: "https://m.media-amazon.com/images/M/MV5BNTZkYmI0MmEtNGFlZC00OWZjLWFjMmItMjk1OWZkOWJiZGVjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    title: "Princess Mononoke",
    description:
      "In the 14th century, the harmony that humans, animals and gods have enjoyed begins to crumble. The protagonist, young Ashitaka - infected by an animal attack, seeks a cure from the deer-like god Shishigami. In his travels, he sees humans ravaging the earth, bringing down the wrath of wolf god Moro and his human companion Princess Mononoke. Hiskattempts to broker peace between her and the humans brings only conflict.",
  },
  {
    id: 1,
    img: "https://cdn.waterstones.com/bookjackets/large/9781/4215/9781421582726.jpg",
    title: "Castle in the Sky",
    description:
      "Young orphan Sheeta and her kidnapper, Col. Muska, are flying to a military prison when their plane is attacked by a gang of air pirates led by the matronly Dola. Escaping from a mid-air collision via a magic crystal around her neck, Sheeta meets fellow orphan Pazu and the pair join forces to discover the mystical floating city of Laputa while pursued by both Muska and the pirates, who lust for the city's myriad treasures.",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    title: "Howl's Moving Castle",
    description:
      "Sophie (Emily Mortimer) has an uneventful life at her late father's hat shop, but all that changes when she befriends wizard Howl (Christian Bale), who lives in a magical flying castle. However, the evil Witch of Waste (Lauren Bacall) takes issue with their budding relationship and casts a spell on young Sophie, which ages her prematurely. Now Howl must use all his magical talents to battle the jealous hag and return Sophie to her former youth and beauty.",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/M/MV5BYTQ1ZTM1ZTgtN2Q2Ny00YjFkLTliNjEtN2I1ZmY5ZTY1OTEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    title: "Kiki's Delivery Service",
    description:
      "In this anime feature, 13-year-old Kiki moves to a seaside town with her talking cat, Jiji, to spend a year alone, in accordance with her village's tradition for witches in training. After learning to control her broomstick, Kiki sets up a flying courier service and soon becomes a fixture in the community. But when the insecure young witch begins questioning herself and loses her magic abilities, she must overcome her self-doubt to get her powers back.",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/M/MV5BZTlmYTJmMWEtNDRhNy00ODc1LTg2OTMtMjk2ODJhNTA4YTE1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    title: "When Marnie Was There",
    description:
      "A young girl is sent to the country for health reasons, where she meets an unlikely friend in the form of Marnie, a young girl with flowing blonde hair. As the friendship unravels Marnie has closer ties to the protagonist than we might expect.",
  },
  {
    id: 5,
    img: "https://i.pinimg.com/564x/30/91/ec/3091ec58bcaa018a011869e9dfd06bb5.jpg",
    title: "Pom Poko",
    description:
      "Isao Takahata's film uses the tanuki, creatures of myth, as his heroes. Beloved folk-tale characters, they are viewed as bringers of fortune with shape-changing abilities. In this film, their forest home is threatened by urban development and, to save it, they must use all their supernatural talents.",
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/M/MV5BZDBhYThkMWMtZTBlMi00NzMyLWE3YTktMjVjOWUwOTEyMjNlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    title: "My Neighbors the Yamadas",
    description:
      "The Yamadas are a normal Japanese family. Father Takashi and his wife Matsuke argue over a TV remote control, Grandma Shige always brightens the day with her proverbs and daughter Nanoko likes to get lost in a shopping centre.",
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/M/MV5BZTI3NmJmYTQtNDg4NS00M2VlLTgzZDAtZWIwZDcyOWY5YzIzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    title: "Nausicaä of the Valley of the Wind",
    description:
      "Far in the future, after an apocalyptic conflict has devastated much of the world's ecosystem, the few surviving humans live in scattered semi-hospitable environments within what has become a toxic jungle. Young Nausicaä lives in the arid Valley of the Wind and can communicate with the massive insects that populate the dangerous jungle. Under the guidance of the pensive veteran warrior, Lord Yupa, Nausicaä works to bring peace back to the ravaged planet.",
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    title: "Spirited Away",
    description:
      "In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park. After her mother and father are turned into giant pigs, Chihiro meets the mysterious Haku (Miyu Irino), who explains that the park is a resort for supernatural beings who need a break from their time spent in the earthly realm, and that she must work there to free herself and her parents.",
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/M/MV5BZDg0MWNmNjktMGEwZC00ZDlmLWI1MTUtMDBmNjQzMWM2NjBjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    title: "Whisper of the Heart",
    description:
      "Based on the manga with the same title, this animated film follows Shizuku, an inquisitive young girl and a voracious reader, who longs to be a writer when she grows up. One day she notices that all of her library books have previously been taken out by one Seiji Amasawa. Amid chasing after a large cat, befriending an eccentric antiques dealer and writing her first novel, Shizuku aims to find this mysterious boy who may well be her soul mate.",
  },
  {
    id: 10,
    img: "https://www.tallengestore.com/cdn/shop/products/Ponyo-StudioGhibliJapanaeseAnimatedMoviePoster_486d31da-e739-41a7-9c5d-ac4a3bb9680c.jpg?v=1642160515",
    title: "Ponyo",
    description:
      "During a forbidden excursion to see the surface world, a goldfish princess encounters a human boy named Sosuke, who gives her the name Ponyo. Ponyo longs to become human, and as her friendship with Sosuke grows, she becomes more humanlike. Ponyo's father brings her back to their ocean kingdom, but so strong is Ponyo's wish to live on the surface that she breaks free, and in the process, spills a collection of magical elixirs that endanger Sosuke's village.",
  },
  {
    id: 11,
    img: "https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_.jpg",
    title: "The Wind Rises",
    description:
      "A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi (Hideaki Anno), whose storied career includes the creation of the A6M World War II fighter plane.",
  },
  {
    id: 12,
    img: "https://m.media-amazon.com/images/M/MV5BZDY3ZGI0ZDAtMThlNy00MzAxLTg4YjAtNjkwYTkxNmQ4MjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    title: "The Secret World of Arrietty",
    description:
      "Arrietty, a tiny teenager, lives with her parents in the recesses of a suburban home, unbeknown to the homeowner and housekeeper. Like others of her kind, Arrietty remains hidden from her human hosts, but occasionally ventures forth from beneath the floorboards to borrow sugar cubes and other supplies. A secret friendship forms when 12-year-old Shawn meets Arrietty, but their relationship could spell danger for Arrietty's family.",
  },
  {
    id: 13,
    img: "https://m.media-amazon.com/images/M/MV5BZGFlN2FhYTktZGYzNi00MzllLWFlOTAtY2ExNjRjZjhkZWM2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    title: "Tales from Earthsea",
    description:
      "Tales from Earthsea is a 2006 Japanese anime epic fantasy film co-written and directed by Gorō Miyazaki. It was animated by Studio Ghibli for the Nippon Television Network, Dentsu, Hakuhodo DY Media Partners, Buena Vista Home Entertainment, Mitsubishi and Toho, and distributed by the latter company.",
  },
  {
    id: 14,
    img: "https://m.media-amazon.com/images/M/MV5BNThmMWMyMWMtOWRiNy00MGY0LTg1OTUtNjYzODg2MjdlZGU5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    title: "The Tale of Princess Kaguya",
    description:
      "A tiny nymph found inside a bamboo stalk grows into a beautiful and desirable young woman, who orders her suitors to prove their love by completing a series of near-impossible tasks.",
  },
  {
    id: 15,
    img: "https://m.media-amazon.com/images/M/MV5BMTIwYmQyNjctNmJhYi00NDg0LWJlYzktNjE0OGE0OTIxNzAzXkEyXkFqcGdeQXVyMTI0NTE1Njg4._V1_FMjpg_UX1000_.jpg",
    title: "Earwig and the Witch",
    description: "",
  },
  {
    id: 16,
    img: "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_645/ijmuciy2p6cg6tp6bqab.jpg",
    title: "My Neighbor Totoro",
    description:
      "A headstrong orphan discovers a world of spells and potions while living with a selfish witch.",
  },
  {
    id: 17,
    img: "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    title: "Grave of the Fireflies",
    description:
      "A devastating meditation on the human cost of war, this animated tale follows Seita (Tsutomu Tatsumi), a teenager charged with the care of his younger sister, Setsuko (Ayano Shiraishi), after an American firebombing during World War II separates the two children from their parents. Their tale of survival is as heartbreaking as it is true to life. The siblings rely completely on each other and struggle against all odds to stay together and stay alive.",
  },
  {
    id: 18,
    img: "https://m.media-amazon.com/images/M/MV5BNTZjMDc2N2UtZTdjZi00ODljLTgyZmEtNDljZDAwODY4NDVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    title: "Porco Rosso",
    description:
      "In Italy in the 1930s, sky pirates in biplanes terrorize wealthy cruise ships as they sail the Adriatic Sea. The only pilot brave enough to stop the scourge is the mysterious Porco Rosso (Shuichiro Moriyama), a former World War I flying ace who was somehow turned into a pig during the war. As he prepares to battle the pirate crew's American ace, Porco Rosso enlists the help of spunky girl mechanic Fio Piccolo (Akemi Okamura) and his longtime friend Madame Gina (Tokiko Kato).",
  },
  {
    id: 19,
    img: "https://m.media-amazon.com/images/M/MV5BMTY5NjI2MjQxMl5BMl5BanBnXkFtZTgwMDA2MzM2NzE@._V1_.jpg",
    title: "Only Yesterday",
    description:
      "Unmarried career woman Taeko Okajima (Miki Imai) takes her first extended trip outside her native Tokyo when she travels to rural Yamagata to visit her sister's family during the annual safflower harvest. On the train, Taeko daydreams about her pre-adolescent self. As her vacation progresses, she has extended flashbacks about the frustrations and small pleasures of her childhood, and wonders if her stress-filled adult life is what the young Taeko would have wanted for herself.",
  },
  {
    id: 20,
    img: "https://flxt.tmsimg.com/assets/p8985898_p_v8_ac.jpg",
    title: "The Cat Returns",
    description:
      "High school student Haru (Chizuru Ikewaki) rescues a cat that was about to be run over by a truck and discovers the cat is actually a prince named Lune. Out of gratitude, Lune's father, the Cat King, asks her to marry Lune. Haru is brought to the Cat Kingdom, where she starts to develop feline features. When she is prevented from leaving, the Baron (Yoshihiko Hakamada) and Toto, two statues that have magically been given life, provide assistance in gaining her freedom.",
  },
  {
    id: 21,
    img: "https://static.wikia.nocookie.net/studio-ghibli/images/d/dd/From_Up_On_Poppy_Hill.jpg",
    title: "From Up on Poppy Hill",
    description:
      "It's 1963 and Japan is in the midst of swift modernisation, leaving behind the Second World War's painful memories and focusing on a brighter future, symbolised by the coming year's Tokyo Olympics.",
  },
  {
    id: 22,
    img: "https://static.wikia.nocookie.net/studio-ghibli/images/e/e1/Ocean_Waves_English.jpg",
    title: "Ocean Waves",
    description:
      "As he journeys back from Tokyo to his high school for a reunion, Taku Morisaki recounts his memories of his school days, focussing in particular on a love triangle that developed between him and two of his friends.",
  },
];

export const fetchData = () => {
  return new Promise((resolve) => {
    // Simulate an asynchronous API call with a setTimeout
    setTimeout(() => {
      resolve(mockData);
    }, 1000); // Delay of 1 second to mimic network request
  });
};
