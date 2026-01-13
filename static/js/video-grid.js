function buildGallery(folder, elementId) {
  fetch(`./static/videos/${folder}/index.json`)
    .then(r => r.json())
    .then(list => {
      const gallery = document.getElementById(elementId);

      list.forEach(name => {
        const card = document.createElement("div");
        card.className = "video-card";

        const video = document.createElement("video");
        video.src = `./static/videos/${folder}/` + name;
        video.muted = false;
        video.loop = true;
        video.playsInline = true;
        video.preload = "metadata";

        card.appendChild(video);
        gallery.appendChild(card);

        card.addEventListener("mouseenter", () => video.play());
        card.addEventListener("mouseleave", () => video.pause());
        card.addEventListener("touchstart", () => {
          if (video.paused) video.play();
          else video.pause();
        });
      });
    });
}

buildGallery("eb5", "gallery-eb5");
buildGallery("videoar", "gallery-videoar");