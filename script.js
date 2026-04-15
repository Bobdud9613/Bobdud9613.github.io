const nameBtn = document.getElementById("nameBtn");
const image = document.getElementById("myImage");
const homeBtn = document.getElementById("homeBtn");
const imageList = ["AnimeBA.webp", "middleIshy.webp", "roland.jpg"]



nameBtn.addEventListener("click", () => {
    const index = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    image.src = imageList[index];
    image.classList.remove("hidden");

    setTimeout(() => {
        image.classList.add("hidden");
    }, 100);
});