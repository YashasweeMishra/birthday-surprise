/* PERSONALIZE YOUR SURPRISE: update the details below, then save this file. */
const CONFIG = {
  friendName: "My Best Bro",
  birthdayMessage: [
    "Happy Birthday to the one who makes even the most ordinary moments memorable. 🥳🤜🏻🤛🏻",
    "Honestly, words can never explain how much your friendship means to me. I'm genuinely glad to have a friend like you in my life. Thanks for all the laughs, stupid conversations, random plans, unforgettable memories, sarthuu you always undersatnds me..!! and all those little moments that have become some of my favourite memories. ❤️‍🩹",
    "Life will keep changing, and we might get busy with our own things someday, but I hope we never lose the bond we've built please.?. No matter where life takes us, I hope you keep growing, achieving everything you dream of, and finding a reason to smile even on your toughest days.",
    "Always stay the same crazy, genuine, and amazing person you are. Never stop chasing your dreams, and never forget that you've got a friend who genuinely wishes the best for you. 🫂❤️",
    "I'm really lucky to have you as my best friend. Here's to more crazy memories, endless laughter, and a friendship that stays strong no matter how much life changes. 🧿🤝🏻",
    "SARTHUU YOU'RE FUCKING CRAZYYYYYYYYYY",
    "Happy Birthday once again, mere bhai! 🎂🎉❤️",
    "LALLLAAAAAA",
  ],
  photos: [
    { src: "1.jpeg", caption: "One of my favourite memories ❤️", style: "polaroid" },
    { src: "images/memory-02.jpeg", caption: "A little mountain adventure together ⛰️", style: "scrapbook" },
    { src: "images/memory-03.jpeg", caption: "My favourite partner in crime 🫂", style: "floating" },
    { src: "images/memory-04.jpeg", caption: "Memories I would live a thousand times again 🥹", style: "polaroid" },
  ],
  memories: [
    { date: "The beginning", title: "Our first talk from the bottom of my heart", story: "The first day in my life when I was high, and I said, “tuu bhaut accha bandhaa haai.”" },
    { date: "The first belly laugh", title: "That really good laugh", story: "The kind of laugh where neither of us can finish the story. Still one of my favourite sounds. There are so many more I can't even write them all." },
    { date: "An all-time classic", title: "Our funniest memory", story: "Jab Mishraji ne Junior ko Ganesh pandal ki balcony se dekh liya tha, tab apan 3rd-floor bathroom mein chhupe the!" },
    { date: "A moment to keep", title: "Our most unforgettable moments", story: "Anti-ragging, Bhopal, weed, and so many more unforgettable moments—we could never fit them all into one little story!" },
    { date: "Today & always", title: "Your special day", story: "Happy birthday, Sarthuuuu! Just a small effort from my side to put a smile on your face. I love you so much 🫂" },
  ],
  reasons: [
    { icon: "🫶🏻", title: "You make ordinary moments feel special.", text: "Even the simplest moments become beautiful when you're a part of them." },
    { icon: "🥹", title: "You understand me without needing too many words.", text: "Sometimes, you just get me in ways that are difficult to explain." },
    { icon: "😂", title: "You make me laugh like nobody else.", text: "Our silly conversations and random jokes are memories I'll always cherish." },
    { icon: "🫂", title: "You make me feel less alone.", text: "Just knowing that you're a part of my life makes some days a little easier." },
    { icon: "💌", title: "I can be myself around you.", text: "I don't have to pretend to be someone else or hide my silly side." },
    { icon: "🌷", title: "You genuinely matter to me.", text: "Your happiness, your dreams, and your feelings mean more to me than you know." },
    { icon: "🧿", title: "You have a special place in my life.", text: "No matter how many people I meet, our friendship will always mean something unique to me." },
    { icon: "🥰", title: "You turn little things into unforgettable memories.", text: "From random conversations to the smallest moments, you make them worth remembering." },
    { icon: "🌙", title: "You make my bad days feel a little better.", text: "Sometimes, talking to you is enough to make things feel less complicated." },
    { icon: "❤️", title: "You're simply YOU.", text: "I don't need a hundred reasons to choose you as my favourite person. The way you are is already enough." },
    { icon: "🧸", title: "You're someone I'm genuinely grateful for.", text: "Having you in my life is one of those little blessings I never want to take for granted." },
    { icon: "♾️", title: "Our memories mean the world to me.", text: "If I could keep certain moments forever, so many of them would have you in them." },
    { icon: "🤍", title: "You make friendship feel beautiful.", text: "You remind me that some people come into our lives and become a part of our favourite memories." },
    { icon: "🥹", title: "You're important to me in ways I can't always explain.", text: "Maybe I don't say it enough, but I'm really glad that I have you." },
    { icon: "🎂", title: "Because life is a little more beautiful with you in it.", text: "And honestly, that's my favourite reason of all. ❤️" },
  ],
  // Optional: set this to a local audio file, such as "audio/our-song.mp3".
  // Keep it empty to use the gentle, locally generated instrumental instead.
  musicSrc: "",
};

const ambient = document.querySelector("#ambient");
const bottleLayer = document.querySelector("#bottle-layer");
const gallery = document.querySelector("#memory-grid");
const timeline = document.querySelector("#timeline");
const reasonsGrid = document.querySelector("#reasons-grid");
const birthdayMessage = document.querySelector("#birthday-message");
const lightbox = document.querySelector("#lightbox");
const musicToggle = document.querySelector("#music-toggle");
const musicLabel = document.querySelector("#music-label");
const confettiLayer = document.querySelector("#confetti-layer");
let messageHasTyped = false;
let synthContext;
let musicInterval;
let audioElement;
let musicOn = false;

const decorativeSymbols = ["♡", "✧", "✦", "·", "❋"];
const particleColors = ["#e8c879", "#c7b6e8", "#a8d2e6", "#f0dfb0", "#d5c4f1"];

function createAmbient() {
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < 27; index += 1) {
    const particle = document.createElement("span");
    particle.className = "ambient-particle";
    particle.textContent = decorativeSymbols[index % decorativeSymbols.length];
    particle.style.left = `${(index * 37 + 8) % 100}%`;
    particle.style.setProperty("--particle-color", particleColors[index % particleColors.length]);
    particle.style.setProperty("--particle-size", `${10 + (index % 4) * 4}px`);
    particle.style.setProperty("--particle-duration", `${15 + (index % 8) * 2}s`);
    particle.style.setProperty("--particle-delay", `${-(index % 19)}s`);
    particle.style.setProperty("--particle-drift", `${(index % 2 ? 1 : -1) * (18 + (index % 5) * 13)}px`);
    fragment.append(particle);
  }
  for (let index = 0; index < 5; index += 1) {
    const bottle = document.createElement("span");
    bottle.className = "ambient-bottle";
    bottle.textContent = "🍾";
    bottle.style.left = `${(index * 23 + 14) % 100}%`;
    bottle.style.setProperty("--bottle-duration", `${24 + index * 3}s`);
    bottle.style.setProperty("--bottle-delay", `${-index * 6}s`);
    bottle.style.setProperty("--bottle-drift", `${index % 2 ? -24 : 24}px`);
    bottleLayer.append(bottle);
  }
  ambient.append(fragment);
}

function renderGallery() {
  gallery.innerHTML = CONFIG.photos.map((photo, index) => `
    <button class="memory-card ${photo.style}" type="button" data-photo-index="${index}" aria-label="View memory: ${photo.caption.replaceAll('"', "&quot;")}">
      <span class="memory-photo">
        <img src="${photo.src}" alt="${photo.caption.replaceAll('"', "&quot;")}" loading="lazy" />
        <span class="memory-number">${String(index + 1).padStart(2, "0")}</span>
      </span>
      <span class="memory-caption">${photo.caption}</span>
    </button>
  `).join("");
}

function renderTimeline() {
  timeline.innerHTML = CONFIG.memories.map((memory) => `
    <article class="timeline-item" data-reveal>
      <div class="timeline-copy">
        <h3>${memory.title}</h3>
        <p>${memory.story}</p>
      </div>
      <span class="timeline-dot" aria-hidden="true"></span>
      <span class="timeline-date">${memory.date}</span>
    </article>
  `).join("");
}

function renderReasons() {
  reasonsGrid.innerHTML = CONFIG.reasons.map((reason) => `
    <article class="reason-card" data-reveal>
      <span class="reason-icon" aria-hidden="true">${reason.icon}</span>
      <h3 class="reason-title">${reason.title}</h3>
      <p class="reason-description">${reason.text}</p>
    </article>
  `).join("");
}

function observeReveals() {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));
}

function typeBirthdayMessage() {
  if (messageHasTyped) return;
  messageHasTyped = true;
  let paragraphIndex = 0;
  let characterIndex = 0;
  let currentParagraph;
  let lastPaint = 0;

  function typeChunk(timestamp) {
    if (timestamp - lastPaint < 20) {
      requestAnimationFrame(typeChunk);
      return;
    }
    lastPaint = timestamp;
    if (!currentParagraph) {
      currentParagraph = document.createElement("p");
      birthdayMessage.append(currentParagraph);
      characterIndex = 0;
    }
    const text = CONFIG.birthdayMessage[paragraphIndex];
    currentParagraph.textContent = text.slice(0, characterIndex + 1);
    characterIndex += 2;
    if (characterIndex >= text.length) {
      currentParagraph.textContent = text;
      paragraphIndex += 1;
      currentParagraph = null;
      if (paragraphIndex < CONFIG.birthdayMessage.length) {
        window.setTimeout(() => requestAnimationFrame(typeChunk), 240);
        return;
      }
      document.querySelector("#letter-to").textContent = `For ${CONFIG.friendName}, 🫂❤️`;
      return;
    }
    requestAnimationFrame(typeChunk);
  }
  requestAnimationFrame(typeChunk);
}

function launchConfetti(amount = 72, includeHearts = true) {
  const colors = ["#e8c879", "#d6b45e", "#c8d8e9", "#f0dfb0", "#d5c4f1", "#fff7df"];
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < amount; index += 1) {
    const piece = document.createElement("span");
    const heart = includeHearts && index % 9 === 0;
    piece.className = `confetti-piece${heart ? " heart-piece" : ""}`;
    if (heart) piece.textContent = "♥";
    else piece.style.backgroundColor = colors[index % colors.length];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.setProperty("--fall-time", `${2.7 + Math.random() * 2.1}s`);
    piece.style.setProperty("--sideways", `${(Math.random() - .5) * 220}px`);
    piece.style.setProperty("--spin", `${Math.random() * 900 + 360}deg`);
    fragment.append(piece);
    window.setTimeout(() => piece.remove(), 5100);
  }
  confettiLayer.append(fragment);
}

function showMemory(index) {
  const photo = CONFIG.photos[index];
  if (!photo) return;
  document.querySelector("#lightbox-image").src = photo.src;
  document.querySelector("#lightbox-image").alt = photo.caption;
  document.querySelector("#lightbox-caption").textContent = photo.caption;
  lightbox.showModal();
}

function startSynthMusic() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    musicLabel.textContent = "Music isn’t supported here";
    musicToggle.setAttribute("aria-pressed", "false");
    return false;
  }
  if (!synthContext) synthContext = new AudioContextClass();
  synthContext.resume();
  const notes = [523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 783.99, 698.46, 523.25, 587.33, 659.25, 523.25];
  let noteIndex = 0;
  const playNote = () => {
    if (!musicOn) return;
    const now = synthContext.currentTime;
    const oscillator = synthContext.createOscillator();
    const volume = synthContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = notes[noteIndex % notes.length];
    volume.gain.setValueAtTime(0.0001, now);
    volume.gain.exponentialRampToValueAtTime(0.045, now + 0.04);
    volume.gain.exponentialRampToValueAtTime(0.0001, now + 0.62);
    oscillator.connect(volume);
    volume.connect(synthContext.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.65);
    noteIndex += 1;
  };
  playNote();
  musicInterval = window.setInterval(playNote, 390);
  return true;
}

async function toggleMusic() {
  if (musicOn) {
    musicOn = false;
    window.clearInterval(musicInterval);
    if (audioElement) audioElement.pause();
    musicToggle.setAttribute("aria-pressed", "false");
    musicLabel.textContent = "Play a little music";
    return;
  }
  if (CONFIG.musicSrc) {
    audioElement ??= new Audio(CONFIG.musicSrc);
    audioElement.loop = true;
    try {
      await audioElement.play();
    } catch (error) {
      console.error("Could not play the selected local music file.", error);
      musicLabel.textContent = "Couldn’t play the music file";
      return;
    }
    musicOn = true;
  } else {
    musicOn = true;
    if (!startSynthMusic()) return;
  }
  musicToggle.setAttribute("aria-pressed", "true");
  musicLabel.textContent = "Music is playing";
}

function openGift() {
  const giftBox = document.querySelector("#gift-box");
  if (giftBox.classList.contains("is-open")) return;
  giftBox.classList.add("is-open");
  giftBox.setAttribute("aria-expanded", "true");
  document.querySelector("#gift-instruction").textContent = "a little love, just for you";
  window.setTimeout(() => {
    document.querySelector("#gift-reveal").hidden = false;
    launchConfetti(58);
  }, 450);
}

function replaySurprise() {
  document.querySelector("#welcome").scrollIntoView({ behavior: "smooth" });
  document.querySelector("#gift-box").classList.remove("is-open");
  document.querySelector("#gift-box").setAttribute("aria-expanded", "false");
  document.querySelector("#gift-reveal").hidden = true;
  document.querySelector("#gift-instruction").textContent = "tap the little box to open it";
  document.querySelector("#celebration-cake").classList.remove("blown");
  document.querySelector(".wish-card").classList.remove("celebrating");
  document.querySelector("#wish-message").textContent = "";
  document.querySelector("#wish-photo-reveal").hidden = true;
  document.querySelector("#make-wish").innerHTML = 'Click here for a surprise <span>✨</span>';
  document.querySelectorAll(".wish-candle").forEach((candle) => { candle.style.opacity = ""; candle.style.transform = ""; });
  birthdayMessage.replaceChildren();
  messageHasTyped = false;
}

createAmbient();
renderGallery();
renderTimeline();
renderReasons();
observeReveals();

const messageObserver = new IntersectionObserver((entries) => {
  if (entries.some((entry) => entry.isIntersecting)) {
    typeBirthdayMessage();
    messageObserver.disconnect();
  }
}, { threshold: 0.18 });
messageObserver.observe(document.querySelector("#message"));

document.querySelector("#open-surprise").addEventListener("click", () => {
  launchConfetti(95);
  document.querySelector("#message").scrollIntoView({ behavior: "smooth" });
});
musicToggle.addEventListener("click", toggleMusic);
gallery.addEventListener("click", (event) => {
  const card = event.target.closest("[data-photo-index]");
  if (card) showMemory(Number(card.dataset.photoIndex));
});
document.querySelector("#lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
document.querySelector("#gift-box").addEventListener("click", openGift);
document.querySelector("#read-letter").addEventListener("click", () => document.querySelector("#letter-dialog").showModal());
document.querySelector("#letter-close").addEventListener("click", () => document.querySelector("#letter-dialog").close());
document.querySelector("#letter-dialog").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});
document.querySelector("#make-wish").addEventListener("click", (event) => {
  const cake = document.querySelector("#celebration-cake");
  if (cake.classList.contains("blown")) return;
  cake.classList.add("blown");
  document.querySelector(".wish-card").classList.add("celebrating");
  document.querySelector("#wish-message").textContent = "May all your beautiful wishes come true! 💗";
  document.querySelector("#wish-photo-reveal").hidden = false;
  event.currentTarget.textContent = "Wish sent with love ♡";
  launchConfetti(100);
});
document.querySelector("#replay").addEventListener("click", replaySurprise);

const finalRevealObserver = new IntersectionObserver((entries, observer) => {
  if (entries.some((entry) => entry.isIntersecting)) {
    launchConfetti(54, false);
    observer.disconnect();
  }
}, { threshold: 0.35 });
finalRevealObserver.observe(document.querySelector("#final"));
