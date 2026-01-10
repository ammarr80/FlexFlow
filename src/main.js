import { Star,CornerDownLeft,CheckCircle, CheckCheck, CircleCheckBig, createIcons, TrendingUp,Phone, Search, ToolCase, Check, Wrench, UserRound, Droplets, Bath, Flame, DollarSign, ShieldCheck, CloudLightning, Zap, Smile, ArrowBigRight, MoveRight, CornerRightDown, Redo, MoveLeft} from "lucide";


document.addEventListener("DOMContentLoaded", () => {
  createIcons({
    icons: {
      TrendingUp, CheckCheck, CircleCheckBig, CornerDownLeft,Phone, Search, ToolCase, Check, CheckCircle, Wrench, Star, UserRound, Droplets, Bath, Flame, DollarSign, Search, ShieldCheck, Zap, Smile, MoveRight, CornerRightDown, Redo, MoveLeft
    },
  });
});

const track = document.getElementById('track');
const card = document.querySelector('.cards');
const style = getComputedStyle(card);
const cardWidth = card.offsetWidth + parseInt(style.marginRight);
const cardCount = 5;
const loopWidth = cardWidth * cardCount;

let x = 0;
const speed = 1; // pixels per frame

function animate() {
  x += speed;

  if (x >= loopWidth) {
    x -= loopWidth; // subtract instead of resetting to 0
  }

  track.style.transform = `translateX(${-x}px)`;
  requestAnimationFrame(animate);
}

animate();
let track2 = document.getElementById("track-2");
let cards2 = document.querySelectorAll(".cards-2");

const cardWidth2 = cards2[0].offsetWidth + parseInt(getComputedStyle(cards2[0]).marginRight);
const cards2Amount = 5; // number of unique cards
const loopWidth2 = cardWidth2 * cards2Amount;

let y = -loopWidth2; // start offset negative so first card is visible
const speed2 = 2;

function animate2() {
  y += speed2; // increase y toward 0 = moving right

  // once we reach the end of the loop, reset to negative
  if (y == 0) {
    y = -loopWidth2;
  }

  track2.style.transform = `translateX(${y}px)`; // positive y moves track right
  requestAnimationFrame(animate2);
}

animate2();
