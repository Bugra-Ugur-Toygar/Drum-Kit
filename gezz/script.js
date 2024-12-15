document.addEventListener("DOMContentLoaded", () => {
  const sounds = {
    kick: "kick.wav",
    snare: "snare.wav",
    hihat: "hihat.wav",
    openhat: "openhat.wav",
    tom: "tom.wav",
    tink: "tink.wav",
    ride: "ride.wav",
  };

  // Tüm butonları seçin
  const buttons = document.querySelectorAll(".drum-pad button");

  // Butonlara tıklama olaylarını ekleyin
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const soundName = button.getAttribute("data-sound");
      const soundPath = sounds[soundName];

      if (!soundPath) {
        console.error(`Ses dosyası bulunamadı: ${soundName}`);
        return;
      }

      // Ses dosyasını çal
      const audio = new Audio(soundPath);
      audio.play().catch((error) => {
        console.error(`Ses çalma hatası: ${error}`);
      });
    });
  });
});
