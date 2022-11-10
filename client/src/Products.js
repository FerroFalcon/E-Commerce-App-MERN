const products = [
  //Fruits & Vegetables
  {
    _id: 1,
    productName: "Capsicum - Green (Loose)",
    brand: "Fresho",
    category: "Fruits and Vegetables",
    price: 41,
    quantity: "500g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
  },
  {
    _id: 2,
    productName: "Carrot - Orange (Loose)",
    brand: "Fresho",
    category: "Fruits and Vegetables",
    price: 18.75,
    quantity: "250g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000072_16-fresho-carrot-orange.jpg",
  },
  {
    _id: 3,
    productName: "Onion (Loose)",
    brand: "Fresho",
    category: "Fruits and Vegetables",
    price: 44,
    quantity: "1kg",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000150_19-fresho-onion.jpg",
  },
  {
    _id: 4,
    productName: "Potato",
    brand: "Fresho",
    category: "Fruits and Vegetables",
    price: 47,
    quantity: "1kg",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40162469_6-fresho-potato-new-crop.jpg",
  },
  {
    _id: 5,
    productName: "Tomato - Hybrid (Loose)",
    brand: "Fresho",
    category: "Fruits and Vegetables",
    price: 22.5,
    quantity: "1kg",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg",
  },
  {
    _id: 6,
    productName: "Beans - Haricot (Loose)",
    brand: "Fresho",
    category: "Fruits and Vegetables",
    price: 15.12,
    quantity: "250g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40089743_2-fresho-beans-haricot.jpg",
  },
  {
    _id: 7,
    productName: "Ladies' Fingers (Loose)",
    brand: "Fresho",
    category: "Fruits and Vegetables",
    price: 27.5,
    quantity: "500g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000142_16-fresho-ladies-finger.jpg",
  },
  {
    _id: 8,
    productName: "Coriander Leaves",
    brand: "Fresho",
    category: "Fruits and Vegetables",
    price: 10.35,
    quantity: "100g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg",
  },
  {
    _id: 9,
    productName: "Mushrooms - Button",
    brand: "Fresho",
    category: "Fruits and Vegetables",
    price: 58,
    quantity: "200g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000273_16-fresho-mushrooms-button.jpg",
  },
  {
    _id: 10,
    productName: "Pomegranate (Loose)",
    brand: "Fresho",
    category: "Fruits and Vegetables",
    price: 208,
    quantity: "800g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000269_31-fresho-pomegranate.jpg",
  },

  // Foodgrains, Oil & Masala
  {
    _id: 11,
    productName: "Atta/Godihittu - Whole Wheat",
    brand: "Aashirvaad",
    category: "Foodgrains, Oil & Masala",
    price: 508,
    quantity: "10kg",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/126906_8-aashirvaad-atta-whole-wheat.jpg",
  },
  {
    _id: 12,
    productName: "Sugar/Sakkare",
    brand: "BB Popular",
    category: "Foodgrains, Oil & Masala",
    price: 213,
    quantity: "5kg",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/30005417_8-bb-popular-sugar.jpg",
  },
  {
    _id: 13,
    productName: "Toor Dal/Togari Bele - Desi",
    brand: "BB Royal",
    category: "Foodgrains, Oil & Masala",
    price: 668,
    quantity: "5kg",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40042841_7-bb-royal-toor-dalarhar-dal-desi.jpg",
  },
  {
    _id: 14,
    productName: "Refined - Sunflower Oil",
    brand: "Sunpure",
    category: "Foodgrains, Oil & Masala",
    price: 171,
    quantity: "1L",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/274120_4-sunpure-refined-sunflower-oil.jpg",
  },
  {
    _id: 15,
    productName: "Extra Virgin Olive Oil",
    brand: "La Espanola",
    category: "Foodgrains, Oil & Masala",
    price: 726,
    quantity: "1L",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40200656_3-la-espanola-olive-oil-extra-virgin.jpg",
  },
  {
    _id: 16,
    productName: "Roasted Cashews - Pepper & Herbs",
    brand: "Cornitos",
    category: "Foodgrains, Oil & Masala",
    price: 48,
    quantity: "25g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40112938_6-cornitos-roasted-cashews-pepper-herbs.jpg",
  },
  {
    _id: 17,
    productName: "Rice/Akki - Raw, Sona",
    brand: "BB Popular",
    category: "Foodgrains, Oil & Masala",
    price: 1300,
    quantity: "25kg",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/20001215_11-bb-popular-rice-raw-sona-masoori.jpg",
  },
  {
    _id: 18,
    productName: "Coconut Milk - 17-19%",
    brand: "REAL THAI",
    category: "Foodgrains, Oil & Masala",
    price: 209,
    quantity: "400ml",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40125760_5-real-thai-coconut-milk-17-19.jpg",
  },
  {
    _id: 19,
    productName: "Iodized",
    brand: "Tata Salt",
    category: "Foodgrains, Oil & Masala",
    price: 27.72,
    quantity: "1kg",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/241600_5-tata-salt-iodized.jpg",
  },
  {
    _id: 20,
    productName: "Dried Cranberries",
    brand: "REGENCY",
    category: "Foodgrains, Oil & Masala",
    price: 229,
    quantity: "200 g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40122504_4-regency-cranberry-slices-dried.jpg",
  },
  {
    _id: 21,
    productName: "Blend Instant Coffee Powder - Festive Edition- Rich & Smooth",
    brand: "Nescafe",
    category: "Beverages ",
    price: 1710,
    quantity: "400g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/1213594_3-nescafe-blend-instant-coffee-powder-festive-edition-rich-smooth.jpg",
  },
  {
    _id: 22,
    productName: "",
    brand: "",
    category: "Beverages ",
    price: 515,
    quantity: "1kg",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/102871_11-red-label-tea.jpg",
  },
  {
    _id: 23,
    productName: "Drink - Fresh 'N' Juicy Mango",
    brand: "Frooti",
    category: "Beverages ",
    price: 15,
    quantity: "200ml",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/265783_4-frooti-drink-fresh-n-juicy-mango.jpg",
  },
  {
    _id: 24,
    productName: "Diet Coke Soft Drink",
    brand: "Coca Cola",
    category: "Beverages ",
    price: 40,
    quantity: "300ml",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/100401162_19-coca-cola-diet-coke-soft-drink.jpg",
  },
  {
    _id: 25,
    productName: "Espresso 57 Intense Instant Coffee",
    brand: "Davidoff",
    category: "Beverages ",
    price: 550,
    quantity: "100g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/30003176_7-davidoff-coffee-esspresso-57.jpg",
  },
  {
    _id: 26,
    productName: "Mineral Water",
    brand: "Bisleri",
    category: "Beverages ",
    price: 70,
    quantity: "5L",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/174367_2-bisleri-mineral-water.jpg",
  },
  {
    _id: 27,
    productName: "Filter Coffee - Green Label",
    brand: "BRU",
    category: "Beverages ",
    price: 190,
    quantity: "500g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/262799_24-bru-filter-coffee-green-label.jpg",
  },
  {
    _id: 28,
    productName: "Original Taste Soft Drink - Refreshing",
    brand: "Coca Cola",
    category: "Beverages ",
    price: 40,
    quantity: "750ml",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/251023_11-coca-cola-soft-drink-original-taste.jpg",
  },
  {
    _id: 29,
    productName: "Soft Drink - Refreshing, Strong",
    brand: "Thums Up",
    category: "Beverages ",
    price: 40,
    quantity: "750ml",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/251014_12-thums-up-soft-drink.jpg",
  },
  {
    _id: 30,
    productName: "Coffee - Grand",
    brand: "Tata Coffee",
    category: "Beverages ",
    price: 10,
    quantity: "8g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40054357_4-tata-coffee-coffee-grand.jpg",
  },

  // Snacks & Branded Foods
  {
    _id: 31,
    productName: "Almond Chocolate Bar - For Snack Time",
    brand: "Snickers",
    category: "Snacks & Branded Foods",
    price: 49.5,
    quantity: "45g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40258168_4-snickers-almond-chocolate-bar-for-snack-time.jpg",
  },
  {
    _id: 32,
    productName: "Idly & Dosa Batter",
    brand: "iD Fresho",
    category: "Snacks & Branded Foods",
    price: 55,
    quantity: "1kg",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/271205_14-id-fresho-idly-dosa-batter.jpg",
  },
  {
    _id: 33,
    productName: "Silk Fruit & Nut Chocolate Bar",
    brand: "Cadbury Dairy Milk",
    category: "Snacks & Branded Foods",
    price: 498.76,
    quantity: "3x137g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/1214951_1-cadbury-dairy-milk-silk-fruit-nut-chocolate-bar.jpg",
  },
  {
    _id: 34,
    productName:
      "2-Minute Noodles Masala - Made With Quality Spices, Rich In Fibre",
    brand: "MAGGI",
    category: "Snacks & Branded Foods",
    price: 158,
    quantity: "12x70g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40125873_4-maggi-2-minute-noodles-masala.jpg",
  },
  {
    _id: 35,
    productName: "Frozen Green Peas",
    brand: "Fresho",
    category: "Snacks & Branded Foods",
    price: 318,
    quantity: "2kg",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/1214513_9-fresho-frozen-green-peas.jpg",
  },
  {
    _id: 36,
    productName: "Multigrain Energy Bar - Chocolate Chunk Nut",
    brand: "Yoga Bar",
    category: "Snacks & Branded Foods",
    price: 359,
    quantity: "10x38g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40016745_4-yoga-bar-multigrain-energy-bar-chocolate-chunk-nut.jpg",
  },
  {
    _id: 37,
    productName: "Tez Tandoori Naan Chips",
    brand: "Wingreens Farms",
    category: "Snacks & Branded Foods",
    price: 68,
    quantity: "120g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/1214046_1-wingreens-farms-tez-tandoori-naan-chips.jpg",
  },
  {
    _id: 38,
    productName: "Digestive Biscuit - Fibre-Rich, Healthy Snack",
    brand: "Britannia NutriChoice",
    category: "Snacks & Branded Foods",
    price: 10,
    quantity: "41.7g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/100331598_5-britannia-nutri-choice-digestive-biscuits-high-in-fibre.jpg",
  },
  {
    _id: 39,
    productName: "Bourbon - The Original Choco Creme Sandwich Biscuit",
    brand: "Britannia",
    category: "Snacks & Branded Foods",
    price: 10,
    quantity: "50g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/100012354_17-britannia-bourbon-chocolate-cream-biscuits.jpg",
  },
  {
    _id: 40,
    productName: "Nutties Chocolate Pack, 30 g",
    brand: "Cadbury",
    category: "Snacks & Branded Foods",
    price: 288,
    quantity: "8x30g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/1207410_3-cadbury-nutties-chocolate-pack-30-g.jpg",
  },

  // Beauty & Hygiene
  {
    _id: 41,
    productName: "Gulabari Rose Glow Face Cleanser",
    brand: "Dabur",
    category: "Beauty & Hygiene",
    price: 68,
    quantity: "100ml",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/294759_5-dabur-gulabari-rose-glow-face-cleanser.jpg",
  },
  {
    _id: 42,
    productName: "Kajal - Eyeconic, Twin Pack",
    brand: "Lakme",
    category: "Beauty & Hygiene",
    price: 255,
    quantity: "2pc",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40135734_5-lakme-kajal-eyeconic-twin-pack.jpg",
  },
  {
    _id: 43,
    productName:
      "Soft Light Moisturiser - With Vitamin E & Jojoba Oil, For Face, Hand & Body, Instant Hydration, Non-Greasy Cream",
    brand: "Nivea",
    category: "Beauty & Hygiene",
    price: 232.5,
    quantity: "300ml",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/314931_7-nivea-soft-light-moisturiser-for-face-hand-body-non-sticky-cream-with-vitamin-e-jojoba-oil.jpg",
  },
  {
    _id: 44,
    productName: "Classic Black Eau De Toilette",
    brand: "Jaguar",
    category: "Beauty & Hygiene",
    price: 1155,
    quantity: "100ml",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40085612_12-jaguar-classic-black-eau-de-toilette.jpg",
  },
  {
    _id: 45,
    productName:
      "Men Fresh Active Deodorant - Ocean Extracts, Long Lasting Freshness",
    brand: "Nivea",
    category: "Beauty & Hygiene",
    price: 398.25,
    quantity: "3x150ml",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/1213582_3-nivea-fresh-active-men-deodorant-48h-long-lasting-freshness.jpg",
  },
  {
    _id: 46,
    productName:
      "Intensive Care Deep Moisture Body Lotion - Dry Skin, With Pure Oat Extract, Long Lasting Moisturization",
    brand: "Vaseline",
    category: "Beauty & Hygiene",
    price: 225,
    quantity: "400ml",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40118800_21-vaseline-intensive-care-deep-moisture-body-lotion.jpg",
  },
  {
    _id: 47,
    productName: "Skin Naturals - Micellar Cleansing Water",
    brand: "Garnier",
    category: "Beauty & Hygiene",
    price: 262.5,
    quantity: "400ml",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40118836_10-garnier-skin-naturals-micellar-cleansing-water.jpg",
  },
  {
    _id: 48,
    productName:
      "Pre Shave Foam - Classic Regular Skin 418G+Mach 3 Shaving Blades 10 Pcs",
    brand: "Gillette",
    category: "Beauty & Hygiene",
    price: 895.51,
    quantity: "20pcs",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/1213592_2-gillette-pre-shave-foam-classic-regular-skin-418gmach-3-shaving-blades-10-pcs.jpg",
  },
  {
    _id: 49,
    productName: "Purifying Neem Face Wash",
    brand: "Himalaya",
    category: "Beauty & Hygiene",
    price: 257.4,
    quantity: "300ml",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40018854_4-himalaya-purifying-neem-face-wash.jpg",
  },
  {
    _id: 50,
    productName:
      "Pure Impact Shower Gel - With Micro Particles, Purifying, Freshness, For Body, Face & Hair",
    brand: "Nivea Men",
    category: "Beauty & Hygiene",
    price: 289.42,
    quantity: "500ml",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40016818_3-nivea-men-pure-impact-body-wash-with-purifying-micro-particles-shower-gel-for-body-face-hair.jpg",
  },

  // Kitchen, Garden & Pets
  {
    _id: 51,
    productName: "Ultra Alkaline Battery AA",
    brand: "Duracell",
    category: "Kitchen, Garden & Pets",
    price: 129,
    quantity: "4pc",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/240100_9-duracell-ultra-alkaline-battery-aa.jpg",
  },
  {
    _id: 52,
    productName:
      "Wet Cat Food - Adult, +1 Year, Chicken In Gravy, Balanced Nutrition, Shiny Coat",
    brand: "Whiskas",
    category: "Kitchen, Garden & Pets",
    price: 408,
    quantity: "12x85g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40235050_1-whiskas-wet-cat-food-adult-1-year-chicken-in-gravy-balanced-nutrition-shiny-coat.jpg",
  },
  {
    _id: 53,
    productName: "Dry Pet Food - For Adult Dogs, Chicken & Vegetables",
    brand: "Pedigree",
    category: "Kitchen, Garden & Pets",
    price: 1887,
    quantity: "10kg",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/130331_16-pedigree-dry-dog-food-chicken-vegetables-for-adult-dogs.jpg",
  },
  {
    _id: 54,
    productName:
      "Anti Mosquito Racquet - Rechargeable Insect Killer Bat With LED Light",
    brand: "HIT",
    category: "Kitchen, Garden & Pets",
    price: 488.75,
    quantity: "1pc",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40174570_2-hit-anti-mosquito-racquet-rechargeable-insect-killer-bat-with-led-light.jpg",
  },
  {
    _id: 55,
    productName:
      "Steel Cook & Serve Set - With Glass Lid, 16 cm, Sturdy, Highly Durable",
    brand: "Kitchen Essentials",
    category: "Kitchen, Garden & Pets",
    price: 396,
    quantity: "2x1.5L",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40136241_10-kitchen-essentials-steel-cook-serve-set-with-glass-lid-1500-ml-each.jpg",
  },
  {
    _id: 56,
    productName: "LED Bulb - 9 Watt, Cool Day Light, Base B22D",
    brand: "Eveready",
    category: "Kitchen, Garden & Pets",
    price: 79,
    quantity: "1pc",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40128546_7-eveready-led-bulb-9-watt-cool-day-light-base-b22d.jpg",
  },
  {
    _id: 57,
    productName:
      "Deluxe Pet Food - For Cats, Succulent Chicken Breast in Gravy",
    brand: "SHEBA",
    category: "Kitchen, Garden & Pets",
    price: 88,
    quantity: "85g",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40021905_9-sheba-premium-cat-food-succulent-chicken-breast-in-gravy.jpg",
  },
  {
    _id: 58,
    productName: "Vermi Compost - Organic Manure",
    brand: "NATURES PLUS",
    category: "Kitchen, Garden & Pets",
    price: 149,
    quantity: "5kg",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40209575_1-natures-plus-vermi-compost-organic-manure.jpg",
  },
  {
    _id: 59,
    productName:
      "Borosilicate Glass Food/Tiffin/Storage Container - With PP Lid, Square, Blue",
    brand: "BB Home",
    category: "Kitchen, Garden & Pets",
    price: 549,
    quantity: "1.1L",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40218524_12-bb-home-borosilicate-glass-foodtiffinstorage-container-with-pp-lid-square-blue.jpg",
  },
  {
    _id: 60,
    productName: "Flower Pot 120",
    brand: "NATURES PLUS",
    category: "Kitchen, Garden & Pets",
    price: 135,
    quantity: "1pc",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40209692_1-natures-plus-flower-pot-120.jpg",
  },
  // {
  //   _id: ,
  //   productName: "",
  //   brand: "",
  //   category: "",
  //   price: ,
  //   quantity: "",
  //   image:
  //     "",
  // },
];

export default products;
