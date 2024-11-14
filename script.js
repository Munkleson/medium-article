// import { articleContent } from "./articleContent";

const articleContent = {
  title: "So long and thanks for all the fish",
  writer: "Written by Joby Talbot",
  movie: "From the movie: Hitchhiker's Guide to the Galaxy",
  paragraphHeaders: [
    '<a href="http://genius.com/Joby-talbot-so-long-and-thanks-for-all-the-fish-lyrics" target="_blank">Lyrics</a>',
    '<a href="https://worldwildlife.org/threats/overfishing" target="_blank">Fishing is destroying our seas</a>',
    "But....."
  ],
  paragraphs: [
    [
      "So long and thanks for all the fish \nSo sad that it should come to this \nWe tried to warn you all but oh dear?",
      "You may not share our intellect \nWhich might explain your disrespect \nFor all the natural wonders that \nGrow around you",
      "So long, so long, and thanks \nFor all the fish",
      "The world's about to be destroyed \nThere's no point getting all annoyed \nLie back and let the planet dissolve",
      "Despite those nets of tuna fleets \nWe thought that most of you were sweet \nEspecially tiny tots and your pregnant women",
      "So long, so long, so long, so long, so long \nSo long, so long, so long, so long, so long",
      "So long, so long, and thanks \nFor all the fish"
    ],
    [
      "Overfishing is the process of catching fish faster than the rate that a natural ecosystem can replenish its numbers. This can result in a severe imbalance in the ecosystem, causing many species to be affected, both on land or sea.",
      "Overfishing is becoming more and more of a serious threat to our ecosystem. We are at a tipping point from which there may be no return. Hell, even the dolphins are leaving Earth.",
      "Japan, being one of the leading offenders of this issue, has the highest seafood consumption rates in the world. Sushi and sashimi are common foods in Japan, and it is easy to see why Japan is slow to regulate and revise their laws regarding overfishing.",
    ],
    [
      "Honestly, sushi is too delicious. Oh well ¯\\_(ツ)_/¯",
    ]
  ],
};

const body = document.body;
const contentDiv = body.querySelector(".content-div");

function setTitle() {
  const titleElement = body.querySelector(".title-text");
  titleElement.innerHTML = articleContent.title;
  // titleElement.addEventListener("mouseover", (event) => {
  //   const iframe = document.createElement("iframe");
  //   iframe.src = "http://genius.com/Joby-talbot-so-long-and-thanks-for-all-the-fish-lyrics";
  //   body.append(iframe);
  // });
  // titleElement.addEventListener("click", () => {
  //   const pageDiv = document.createElement("div");
  //   pageDiv.classList.add("external-webpage-div");
  //   const objectElement = document.createElement("object");
  //   objectElement.type = "text/html";
  //   // objectElement.data = "https://genius.com/Joby-talbot-so-long-and-thanks-for-all-the-fish-lyrics";
  //   objectElement.data = "https://google.com";
  //   console.log(objectElement);
  //   objectElement.classList.add("external-webpage");
  //   pageDiv.append(objectElement);
  //   contentDiv.append(pageDiv);
  //   // contentDiv.append(objectElement);
  // });
}
setTitle();

function setContent() {
  // const lyrics = articleContent.paragraphs[0];
  articleContent.paragraphHeaders.forEach((title, index) => {
    const header = document.createElement("p");
    header.classList.add("paragraph-headers");
    header.innerHTML = title;
    contentDiv.append(header);

    articleContent.paragraphs[index].forEach((lyric) => {
      const section = document.createElement("p");
      section.classList.add("lyric-paragraphs");
      section.textContent = lyric;
      contentDiv.append(section);
    });
    if (index === 2) {
      const picture = document.createElement("img");
      picture.src = "https://i.pinimg.com/736x/db/66/e1/db66e1c85f95abcc5ea2373244763458.jpg";
      picture.classList.add("sushi-picture");
      contentDiv.append(picture);
      const caption = document.createElement("p");
      caption.innerText = "Picture approved by Sarah Chu";
      caption.classList.add("image-caption");
      contentDiv.append(caption);
    }
    const br = document.createElement("br");
    contentDiv.append(br);
  });

  // for (let index = 0; index < lyrics.length; index += 1) {
  //   const header = document.createElement("p");
  //   header.classList.add("paragraph-headers");
  //   header.textContent = articleContent.paragraphHeaders[index];
  //   contentDiv.append(header);

  //   const section = document.createElement("p");
  //   section.classList.add("lyric-paragraphs");
  //   section.textContent = lyrics[index];
  //   contentDiv.append(section);
  //   // const br = document.createElement("br");
  //   // contentDiv.append(br);
  // }
}
setContent();
