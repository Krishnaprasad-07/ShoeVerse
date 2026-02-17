// ================= MEN =================

import adidasDropset from "../assets/images/men/adidas-dropstep.jpg";
import adidasZX2K from "../assets/images/men/adidas-zx2k.jpg";
import crocsClassic from "../assets/images/men/classic-crocs.jpg";
import crocsBayaband from "../assets/images/men/crocs-bayaband.jpg";
import crocsClassicAlt from "../assets/images/men/crocs-classic.jpg";
import nbFuelcellRebel from "../assets/images/men/NB-fuelcell-rebel.jpg";
import rebelV5 from "../assets/images/men/rebel-v5.jpg";
import t500 from "../assets/images/men/T500.jpg";
import nikeAirJordan4 from "../assets/images/men/nike-airjordan-4.jpg";
import nikeJordan4 from "../assets/images/men/nike-jordan4.jpg";
import nikeBlazerRed from "../assets/images/men/nike-blazer-red.jpg";
import nikeBlazer from "../assets/images/men/nike-blazer.jpg";
import nikePegasus41 from "../assets/images/men/nike-pegasus41.jpg";
import pegasusAlt from "../assets/images/men/pegasus41.jpg";
import onitsukaKillBill from "../assets/images/men/onitsuka-killbill.jpg";
import onitsukaTigerMain from "../assets/images/men/onitsuka-tiger-main.jpg";
import pumaSoftride from "../assets/images/men/puma-softride.jpg";
import softridePumaAlt from "../assets/images/men/softride-puma.jpg";
import rmWilliams from "../assets/images/men/rm-williams.jpg";
import thursdayBoot from "../assets/images/men/thursday.jpg";

// ================= UNISEX =================

import adidasSambaOG from "../assets/images/unisex/adidas-sambaOG.jpg";
import converseAllStarCT from "../assets/images/unisex/converse-allstar-ct.jpg";
import converseAllStar from "../assets/images/unisex/converse-allstar.jpg";
import converseRunStar from "../assets/images/unisex/converse-run-star.jpg";
import converseRunstarHike from "../assets/images/unisex/converse-runstar-hike.jpg";
import nb9060 from "../assets/images/unisex/NB-9060.jpg";
import nb9060Alt from "../assets/images/unisex/NB9060.jpg";
import nbAbzorb2000 from "../assets/images/unisex/nb-abzorb-2000.jpg";
import nbAbzorb2000Alt from "../assets/images/unisex/NB-abzorb2000.jpg";

// ================= WOMEN =================

import nb574 from "../assets/images/women/NB-574.jpg";
import nikeCourtVision from "../assets/images/women/nike-courtvision.jpg";
import nikeCourtVisionAlta from "../assets/images/women/nikeW-court-vision-alta.jpg";
import pumaSpeedcat from "../assets/images/women/puma-speedcat.jpg";
import pumaSpeedcatAlt from "../assets/images/women/puma-speed-cat.jpg";
import flat1 from "../assets/images/women/flat1.jpg";
import flat1Alt from "../assets/images/women/flat-1.jpg";
import flat2 from "../assets/images/women/flat-2.jpg";
import flat3 from "../assets/images/women/flat-3.jpg";
import flat4 from "../assets/images/women/flat-4.jpg";
import mainFlat1 from "../assets/images/women/main-flat-1.jpg";
import heel1 from "../assets/images/women/heel1.jpg";
import heel1Alt from "../assets/images/women/heel-1.jpg";
import heel2 from "../assets/images/women/heel2.jpg";
import heel2Alt from "../assets/images/women/heel-2.jpg";
import heel3 from "../assets/images/women/heel3.jpg";
import heel3Alt from "../assets/images/women/heel-3.jpg";
import mainHeel1 from "../assets/images/women/main-heel-1.jpg";
import mainHeel2 from "../assets/images/women/main-heel-2.jpg";
import mainHeel3 from "../assets/images/women/main-heel-3.jpg";

const products = [
  // ================= MEN =================

  {
    id: 1,
    name: "Adidas Dropset",
    gender: "men",
    type: "sneakers",
    brand: "adidas",
    price: 10999,
    mrp : 12999,
    images: [adidasDropset],
    description:
      "High-performance Adidas Dropset training shoes for men designed for stability, power, and gym workouts. Featuring a supportive midsole, breathable engineered upper, and durable outsole for grip during weight training and HIIT sessions. Ideal for athletes looking to buy premium gym shoes online.",
    rating: 4.4,
    inStock: true,
  },

  {
    id: 2,
    name: "Adidas ZX2K Boost",
    gender: "men",
    type: "sneakers",
    brand: "adidas",
    price: 9999,
    mrp : 11499,
    images: [adidasZX2K],
    description:
      "The Adidas ZX 2K Boost sneakers for men combine retro running heritage with modern Boost cushioning technology. Lightweight, breathable, and perfect for everyday streetwear. A top choice for men searching for stylish and comfortable Adidas sneakers online.",
    rating: 4.5,
    inStock: true,
  },

  {
    id: 3,
    name: "Onitsuka Tiger Kill Bill",
    gender: "men",
    type: "sneakers",
    brand: "onitsuka",
    price: 9499,
    mrp:12999,
    images: [onitsukaKillBill, onitsukaTigerMain],
    description:
      "Bold and iconic Onitsuka Tiger Kill Bill sneakers inspired by classic martial arts style. Featuring a slim low-profile design, premium materials, and lightweight comfort. Perfect for fashion-forward streetwear lovers looking for unique sneakers online.-style classic inspired by iconic cinema culture.",
    rating: 4.6,
    inStock: true,
    homeImage: onitsukaTigerMain,
    bestSeller: true,
  },

  {
    id: 4,
    name: "Crocs Bayaband",
    gender: "men",
    type: "sandals",
    brand: "crocs",
    price: 3999,
    mrp: 4299,
    images: [crocsBayaband],
    description:
      "Sporty twist on the classic clog featuring lightweight cushioning and bold side stripe detailing. Comfortable, durable, and perfect for everyday casual wear.",
    rating: 4.2,
    inStock: true,
  },

  {
    id: 5,
    name: "Nike Air Jordan 4",
    gender: "men",
    type: "sneakers",
    brand: "nike",
    price: 16999,
    mrp: 19999,
    images: [nikeAirJordan4, nikeJordan4],
    description:
      "Iconic Nike Air Jordan 4 basketball sneakers for men crafted with premium leather and visible Air cushioning. Designed for performance and street style, making them one of the most sought-after Nike sneakers online. Perfect for sneaker enthusiasts and collectors.",
    rating: 4.8,
    inStock: true,
    homeImage: nikeJordan4,
    bestSeller: true,
  },

  {
    id: 6,
    name: "Nike Blazer Red",
    gender: "men",
    type: "sneakers",
    brand: "nike",
    price: 8499,
    mrp: 9999,
    images: [nikeBlazerRed, nikeBlazer],
    description:
      "Classic Nike Blazer sneaker with retro basketball roots.Featuring a bold red finish and vintage court-inspired design. Built with durable materials and cushioned comfort for everyday streetwear style.",
    rating: 4.6,
    inStock: true,
    homeImage: nikeBlazer,
    bestSeller: true,
  },

  {
    id: 7,
    name: "Nike Pegasus 41",
    gender: "men",
    type: "sneakers",
    brand: "nike",
    price: 12999,
    mrp: 14799,
    images: [nikePegasus41, pegasusAlt],
    description:
      "The Nike Air Zoom Pegasus 41 running shoes deliver responsive cushioning and breathable mesh support. Built for long-distance running, training, and daily workouts. Buy lightweight and durable Nike running shoes for men online.",
    rating: 4.7,
    inStock: true,
  },

  {
    id: 8,
    name: "Crocs Classic Clog",
    gender: "men",
    type: "sandals",
    brand: "crocs",
    price: 3499,
    mrp: 3999,
    images: [crocsClassic, crocsClassicAlt],
    description:
      "Original Crocs Classic Clog for men made with lightweight Croslite™ foam cushioning for superior comfort. Water-resistant, breathable, and easy to slip on — perfect for casual wear, travel, and daily comfort. Shop comfortable Crocs clogs online at ShoeVerse.",
    rating: 4.3,
    inStock: true,
    homeImage: crocsClassicAlt,
    bestSeller: true,
  },

  {
    id: 9,
    name: "NB FuelCell Rebel v5",
    gender: "men",
    type: "sneakers",
    brand: "newbalance",
    price: 13499,
    mrp: 16999,
    images: [nbFuelcellRebel, rebelV5],
    description:
      "Performance-driven New Balance FuelCell Rebel v5 running shoes engineered for speed and energy return. Featuring FuelCell cushioning for explosive propulsion and breathable upper for enhanced airflow. Ideal for runners searching for lightweight training shoes online. performance runner with FuelCell cushioning.",
    rating: 4.7,
    inStock: true,
  },

  {
    id: 10,
    name: "NB T500",
    gender: "men",
    type: "sneakers",
    brand: "newbalance",
    price: 7499,
    mrp: 8999,
    images: [t500],
    description:
      "Court-inspired lifestyle sneaker featuring a clean low-profile design and cushioned sole for everyday comfort. A versatile classic that blends sporty heritage with modern minimal style.",
    rating: 4.4,
    inStock: true,
  },

  {
    id: 11,
    name: "Puma Softride Slide",
    gender: "men",
    type: "sandals",
    brand: "puma",
    price: 2299,
    mrp: 2999,
    images: [pumaSoftride, softridePumaAlt],
    description:
      "Comfort-focused slide featuring Soft cushioning for lightweight support and everyday ease. Perfect for relaxed wear, post-workout comfort, and casual styling.",
    rating: 4.3,
    inStock: true,
  },

  {
    id: 12,
    name: "RM Williams Boot",
    gender: "men",
    type: "boots",
    brand: "rmwilliams",
    price: 34999,
    mrp: 39999,
    images: [rmWilliams],
    description:
      "Premium handcrafted leather boot with timeless Premium handcrafted RM Williams leather boots for men made with high-quality full-grain leather. Timeless Chelsea boot design suitable for formal and smart-casual wear. A must-have for men looking to buy luxury leather boots online.",
    rating: 4.8,
    inStock: true,
  },

  {
    id: 13,
    name: "Thursday Boot",
    gender: "men",
    type: "boots",
    brand: "thursday",
    price: 17999,
    mrp: 21999,
    images: [thursdayBoot],
    description:
      "Durable and stylish Thursday Boots for men crafted from premium leather with long-lasting comfort. Built for everyday wear, office styling, and rugged occasions. Shop handcrafted leather boots online at ShoeVerse.",
    rating: 4.6,
    inStock: true,
  },

  // ================= UNISEX =================

  {
    id: 14,
    name: "Adidas Samba OG",
    gender: "unisex",
    type: "sneakers",
    brand: "adidas",
    price: 8999,
    mrp: 10799,
    images: [adidasSambaOG],
    description:
      "Classic Adidas Samba OG unisex sneakers featuring suede overlays and gum sole. Originally designed for indoor football, now a global streetwear icon. Perfect for men and women looking for timeless Adidas sneakers online.",
    rating: 4.7,
    inStock: true,
  },

  {
    id: 15,
    name: "Converse Chuck Taylor All Star",
    gender: "unisex",
    type: "sneakers",
    brand: "converse",
    price: 5999,
    mrp: 6199,
    images: [converseAllStarCT, converseAllStar],
    description:
      "Legendary Converse Chuck Taylor All Star sneakers with canvas upper and rubber sole. A versatile everyday shoe loved worldwide. Buy classic Converse shoes online for men and women.",
    rating: 4.6,
    inStock: true,
  },

  {
    id: 16,
    name: "Converse Run Star Hike",
    gender: "unisex",
    type: "sneakers",
    brand: "converse",
    price: 8999,
    mrp: 10900,
    images: [converseRunstarHike, converseRunStar],
    description:
      "Bold platform Converse Run Star Hike sneakers featuring chunky rubber sole and iconic canvas upper. A modern twist on the classic Chuck Taylor for fashion-forward sneaker lovers.",
    rating: 4.5,
    inStock: true,
  },

  {
    id: 17,
    name: "New Balance 9060",
    gender: "unisex",
    type: "sneakers",
    brand: "newbalance",
    price: 14999,
    mrp: 17999,
    images: [nb9060, nb9060Alt],
    description:
      " Futuristic New Balance 9060 lifestyle sneakers combining retro design with modern cushioning. Comfortable, stylish, and ideal for everyday wear. Perfect for streetwear and sneaker enthusiasts..",
    rating: 4.8,
    inStock: true,
  },

  {
    id: 18,
    name: "New Balance ABZORB 2000",
    gender: "unisex",
    type: "sneakers",
    brand: "newbalance",
    price: 13999,
    mrp: 14499,
    images: [nbAbzorb2000, nbAbzorb2000Alt],
    description:
      "A retro-inspired sneaker powered by ABZORB cushioning for superior shock absorption and lasting comfort. Designed with a bold silhouette and breathable upper, perfect for everyday wear and modern street style.",
    rating: 4.6,
    inStock: true,
  },

  /// ================= WOMEN =================

  {
    id: 19,
    name: "New Balance 574",
    gender: "women",
    type: "sneakers",
    brand: "newbalance",
    price: 8499,
    mrp: 9499,
    images: [nb574],
    description:
      "The iconic New Balance 574 blends classic suede and mesh design with lightweight cushioning for everyday comfort. A timeless lifestyle sneaker built for versatility, durability, and effortless street style.",
    rating: 4.6,
    inStock: true,
  },

  {
    id: 20,
    name: "Nike Court Vision Alta",
    gender: "women",
    type: "sneakers",
    brand: "nike",
    price: 8999,
      mrp: 10999,
    images: [nikeCourtVision, nikeCourtVisionAlta],
    description:
      "Stylish Nike Court Vision Alta sneakers for women featuring platform sole and clean leather design. Inspired by classic basketball aesthetics with a modern feminine touch.",
    rating: 4.5,
    inStock: true,
  },

  {
    id: 21,
    name: "Puma Speedcat",
    gender: "women",
    type: "sneakers",
    brand: "puma",
    price: 7999,
    mrp: 9900,
    images: [pumaSpeedcat, pumaSpeedcatAlt],
    description:
      "Sleek Puma Speedcat sneakers for women inspired by motorsport heritage. Lightweight design and slim silhouette perfect for casual wear",
    rating: 4.4,
    inStock: true,
  },

  {
    id: 22,
    name: "Elegant Strap Flat",
    gender: "women",
    type: "flats",
    brand: "shoeverse",
    price: 2999,
      mrp: 3499,
    images: [flat1Alt, mainFlat1, flat1],
    description:
      "Premium women’s strap flat sandals crafted for elegance and all-day comfort. Soft cushioned sole and stylish strap detailing make them ideal for casual and semi-formal wear.",
    rating: 4.3,
    inStock: true,
    newArrival: true,
  },

  {
    id: 23,
    name: "Classic Beige Flat",
    gender: "women",
    type: "flats",
    brand: "shoeverse",
    price: 2799,
      mrp: 3299,
    images: [flat2],
    description:
      "Timeless beige flat with a sleek silhouette and cushioned insole for everyday comfort. A versatile essential that pairs effortlessly with any outfit.",
    rating: 4.2,
    inStock: true,
  },

  {
    id: 24,
    name: "Knotted Summer Flat",
    gender: "women",
    type: "flats",
    brand: "shoeverse",
    price: 3199,
      mrp: 3799,
    images: [flat3],
    description:
      "Lightweight summer flat featuring a soft knotted strap and cushioned sole for all-day comfort. Perfect for effortless warm-weather styling.",
    rating: 4.4,
    inStock: true,
  },

  {
    id: 25,
    name: "Minimal Slide Flat",
    gender: "women",
    type: "flats",
    brand: "shoeverse",
    price: 2599,
      mrp: 3199,
    images: [flat4],
    description:
      "Sleek and lightweight slide flat designed for everyday comfort. Featuring a cushioned footbed and clean modern design, perfect for effortless casual styling.",
    rating: 4.2,
    inStock: true,
  },

  {
    id: 26,
    name: "Rose Point Heel",
    gender: "women",
    type: "heels",
    brand: "shoeverse",
    price: 3999,
      mrp: 4599,
    images: [heel1, mainHeel1, heel1Alt],
    description:
      "Chic women’s pointed stiletto heels designed for parties, events, and formal occasions. Sleek finish with comfortable fit for confident style.",
    rating: 4.5,
    inStock: true,
    newArrival: true,
  },

  {
    id: 27,
    name: "Classic Red Heel",
    gender: "women",
    type: "heels",
    brand: "shoeverse",
    price: 4299,
      mrp: 4999,
    images: [heel2Alt, mainHeel2, heel2],
    description:
      "Elegant women’s red patent heels featuring glossy finish and refined silhouette. Perfect for evening wear, weddings, and special occasions.",
    rating: 4.6,
    inStock: true,
    newArrival: true,
  },

  {
    id: 28,
    name: "Modern Pink Heel",
    gender: "women",
    type: "heels",
    brand: "shoeverse",
    price: 4499,
      mrp: 5249,
    images: [heel3, mainHeel3, heel3Alt],
    description:
      "Elegant and contemporary, the Modern Pink Heel for women is designed to elevate your everyday and occasion wear with effortless sophistication. Featuring a sleek silhouette, soft premium finish, and a stable block heel, this stylish footwear offers the perfect balance of comfort and confidence.",
    rating: 4.5,
    inStock: true,
    newArrival: true,
  },
];

export default products;
