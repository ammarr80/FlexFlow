import {
  MessageCircleMore,
  Star,
  CornerDownLeft,
  CheckCircle,
  CheckCheck,
  CircleCheckBig,
  createIcons,
  TrendingUp,
  Phone,
  Search,
  ToolCase,
  Check,
  Wrench,
  UserRound,
  Droplets,
  Bath,
  Flame,
  DollarSign,
  ShieldCheck,
  CloudLightning,
  Zap,
  Smile,
  ArrowBigRight,
  MoveRight,
  CornerRightDown,
  Redo,
  MoveLeft,
  MapPinned,
  MapPin,
  Minus,
  Plus,
} from "lucide";

document.addEventListener("DOMContentLoaded", () => {
  createIcons({
    icons: {
      MessageCircleMore,
      TrendingUp,
      CheckCheck,
      CircleCheckBig,
      CornerDownLeft,
      Phone,
      Search,
      ToolCase,
      Check,
      CheckCircle,
      Wrench,
      Star,
      UserRound,
      Droplets,
      Bath,
      Flame,
      DollarSign,
      Search,
      ShieldCheck,
      Zap,
      Smile,
      MoveRight,
      CornerRightDown,
      Redo,
      MoveLeft,
      MapPinned,
      MapPin,
      Plus,
      Minus
    },
  });
});

const track = document.getElementById("track");
const card = document.querySelector(".cards");
const GAP = 20;
const cardWidth = card.offsetWidth + GAP;
const cardCount = 6;
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
const track2 = document.getElementById("track-2");
const cards2 = document.querySelector(".cards-2");

const GAP2 = 20;
const cardWidth2 = cards2.offsetWidth + GAP2;
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


// FAQs SECTION'S LOGIC


