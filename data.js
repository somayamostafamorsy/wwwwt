/* =====================================================================
   MAISON AURELIA — STORE DATA
   ---------------------------------------------------------------------
   Everything you need to customise the catalogue lives in this file.

   1) STORE_CONFIG  → WhatsApp number, exchange rates, VAT, promo codes.
   2) PRODUCTS_DATA → one object per watch. Copy any block to add a watch.

   HOW TO SWAP IMAGES
   ------------------
   Each watch has an `images` array. The first entry is the main photo.
   Replace the URL with a local file, e.g.  './images/watch-1.jpg'
   Add up to 3–4 URLs for a multi-angle gallery. Two generated angle
   views (side profile + caseback) are always appended automatically.
   If an image fails to load, a drawn watch (from the `look` object)
   is shown instead — so no image ever appears broken.

   HOW TO ADD A WATCH
   ------------------
   Copy a full { ... } block, give it a unique `id`, change the fields,
   and adjust `look` (colours used for the fallback illustration).
   Allowed values:
     category : 'classic' | 'dive' | 'chrono' | 'women' | 'smart'
     movement : 'Automatic' | 'Quartz' | 'Manual Wind' | 'Hybrid'
     material : '904L Steel' | '18k Yellow Gold' | 'Rose Gold' | 'Titanium' | 'Ceramic'
     condition: 'new' | 'preowned'
     price    : number in AED (other currencies are converted automatically)
   ===================================================================== */

const STORE_CONFIG = {
  brand: 'MAISON AURELIA',
  whatsapp: '971500000000',                 // Concierge number, international format, no "+"
  vatRate: 0.05,                            // UAE VAT 5%
  currencyRates: { AED: 1, USD: 0.2723, SAR: 1.021 },   // 1 AED = x
  promoCodes: { VIPUAE: 10 },               // CODE: percent discount
  codMaxAed: 25000                          // Cash on Delivery eligibility limit (AED)
};

const U = (id) => 'https://images.unsplash.com/photo-' + id + '?auto=format&fit=crop&w=1000&q=80';

const PRODUCTS_DATA = [
  {
    id: 'w01', name: 'Regent Date 41', collection: 'Regent', category: 'classic',
    movement: 'Automatic', material: '904L Steel', condition: 'new', price: 48500,
    ref: 'MA-RD41-904', caliber: 'Cal. A3235 Automatic', diameter: 41,
    waterRes: '100 m / 330 ft', reserve: '70 hours',
    bracelet: 'Five-link 904L steel, folding clasp', box: 'Full box & papers',
    tag: 'Bestseller', featured: 3,
    description: 'The reference dress watch of the house: a fluted-edge case, a sunburst midnight-blue dial and a cyclops-magnified date. Understated, immaculate, eternal.',
    images: [U('1523170335258-f5ed11844a49')],   // ← swap: './images/watch-1.jpg'
    look: { case: '#cfd3da', bezel: '#b9bec8', dial: '#1f3a5f', accent: '#e8dcc0', strap: '#b7bcc6', date: true }
  },
  {
    id: 'w02', name: 'Sovereign Day-Date 40', collection: 'Sovereign', category: 'classic',
    movement: 'Automatic', material: '18k Yellow Gold', condition: 'new', price: 168000,
    ref: 'MA-SD40-18Y', caliber: 'Cal. A3255 Automatic', diameter: 40,
    waterRes: '100 m / 330 ft', reserve: '70 hours',
    bracelet: 'Presidential-style 18k yellow gold, concealed clasp', box: 'Full box & papers',
    tag: 'Flagship', featured: 1, flagship: true,
    description: 'Cast in solid 18k yellow gold with a champagne dial and the day spelled in full. The Sovereign is the watch of boardrooms, majlis and milestones.',
    images: [U('1524592094714-0f0654e20314')],   // ← swap: './images/watch-2.jpg'
    look: { case: '#d9b865', bezel: '#c9a64f', dial: '#eadcb4', accent: '#7a5a1e', strap: '#d2b25a', date: true }
  },
  {
    id: 'w03', name: 'Ossature Skeleton Tourbillon', collection: 'Haute Horlogerie', category: 'classic',
    movement: 'Manual Wind', material: 'Rose Gold', condition: 'new', price: 395000,
    ref: 'MA-OT42-RG', caliber: 'Cal. H900 Tourbillon, hand-wound', diameter: 42,
    waterRes: '30 m / 100 ft', reserve: '96 hours',
    bracelet: 'Alligator leather, 18k rose gold pin buckle', box: 'Collector case & papers',
    tag: 'Haute Horlogerie', featured: 2,
    description: 'A fully open-worked calibre with a one-minute flying tourbillon, hand-bevelled bridges and a sapphire dial. Limited to 50 pieces per year.',
    images: [U('1547996160-81dfa63595aa')],      // ← swap: './images/watch-3.jpg'
    look: { case: '#e0b89a', bezel: '#d4a583', dial: '#14161b', accent: '#e0b89a', strap: '#3a2a22', skeleton: true, leather: true }
  },
  {
    id: 'w04', name: 'Abyssal 300 Diver', collection: 'Abyssal', category: 'dive',
    movement: 'Automatic', material: '904L Steel', condition: 'new', price: 36900,
    ref: 'MA-AB300-BK', caliber: 'Cal. A4130 Automatic', diameter: 42,
    waterRes: '300 m / 1,000 ft', reserve: '72 hours',
    bracelet: '904L steel with diver extension', box: 'Full box & papers',
    tag: 'Professional Diver', featured: 4,
    description: 'A purpose-built dive instrument: unidirectional ceramic bezel, helium escape valve and lume that glows through the darkest depths.',
    images: [U('1587836374828-4dbafa94cf0e')],   // ← swap: './images/watch-4.jpg'
    look: { case: '#c9cdd4', bezel: '#0e1014', dial: '#0b0c10', accent: '#f2f2ee', strap: '#aeb3bd', dive: true, date: true }
  },
  {
    id: 'w05', name: 'Abyssal Titan 600', collection: 'Abyssal', category: 'dive',
    movement: 'Automatic', material: 'Titanium', condition: 'new', price: 54200,
    ref: 'MA-AT600-TI', caliber: 'Cal. A4150 Automatic, antimagnetic', diameter: 44,
    waterRes: '600 m / 2,000 ft', reserve: '80 hours',
    bracelet: 'Grade 5 titanium, quick-adjust clasp', box: 'Full box & papers',
    tag: 'New', featured: 6,
    description: 'Grade 5 titanium keeps it feather-light on the wrist while an ocean-blue dial and bezel nod to the deepest reef dives in the Gulf.',
    images: [U('1614164185128-e4ec99c436d7')],   // ← swap: './images/watch-5.jpg'
    look: { case: '#8d939e', bezel: '#123a6e', dial: '#0d2a52', accent: '#e9eef7', strap: '#80868f', dive: true, date: true }
  },
  {
    id: 'w06', name: 'Velocità Chronograph 40', collection: 'Velocità', category: 'chrono',
    movement: 'Automatic', material: '904L Steel', condition: 'new', price: 72800,
    ref: 'MA-VC40-PD', caliber: 'Cal. C7750 Chronograph', diameter: 40,
    waterRes: '100 m / 330 ft', reserve: '60 hours',
    bracelet: '904L steel, safety clasp', box: 'Full box & papers',
    tag: 'Racing Icon', featured: 5,
    description: 'Born on the circuit: a panda dial, tachymeter ceramic bezel and screw-down pushers. The chronograph every collector wants first.',
    images: [U('1522312346375-d1a52e2b99b3')],   // ← swap: './images/watch-6.jpg'
    look: { case: '#cdd1d8', bezel: '#14161b', dial: '#f1eee6', accent: '#14161b', strap: '#b4b9c3', sub: true, dive: true }
  },
  {
    id: 'w07', name: 'Moonlander Aviator Chrono', collection: 'Aviator', category: 'chrono',
    movement: 'Manual Wind', material: 'Ceramic', condition: 'preowned', price: 44900,
    ref: 'MA-MA42-CE', caliber: 'Cal. M1861 Manual-wind Chronograph', diameter: 42,
    waterRes: '50 m / 165 ft', reserve: '48 hours',
    bracelet: 'Black ceramic, aviation leather strap included', box: 'Full box & papers (2023)',
    tag: 'Certified Pre-Owned', featured: 8,
    description: 'Hand-wound, black ceramic and unmistakably aeronautical. Certified pre-owned, serviced by our workshop and backed by the full international warranty.',
    images: [U('1594534475808-b18fc33b045e')],   // ← swap: './images/watch-7.jpg'
    look: { case: '#1b1d22', bezel: '#101216', dial: '#0b0c0f', accent: '#e9e6dc', strap: '#2a2c31', sub: true, leather: true }
  },
  {
    id: 'w08', name: 'Perla Diamond Lady 31', collection: 'Perla', category: 'women',
    movement: 'Quartz', material: '904L Steel', condition: 'new', price: 29800,
    ref: 'MA-PL31-DM', caliber: 'Cal. Q2230 Swiss Quartz', diameter: 31,
    waterRes: '50 m / 165 ft', reserve: 'Battery, 5 years',
    bracelet: 'Polished 904L steel, jubilee-style', box: 'Full box & papers',
    tag: 'Diamond Bezel', featured: 7,
    description: 'A mother-of-pearl dial framed by a bezel of 44 brilliant-cut diamonds (0.62 ct). Soft light, sharp elegance.',
    images: [U('1509048191080-d2984bad6ae5')],   // ← swap: './images/watch-8.jpg'
    look: { case: '#d3d6dc', bezel: '#c4c8d0', dial: '#efe8e4', accent: '#8a7d78', strap: '#c3c7cf', diamonds: true }
  },
  {
    id: 'w09', name: 'Duetto Two-Tone 28', collection: 'Duetto', category: 'women',
    movement: 'Automatic', material: 'Rose Gold', condition: 'preowned', price: 58400,
    ref: 'MA-DU28-TT', caliber: 'Cal. A2671 Automatic', diameter: 28,
    waterRes: '50 m / 165 ft', reserve: '48 hours',
    bracelet: 'Steel and 18k rose gold, folding clasp', box: 'Box & papers (2022)',
    tag: 'Certified Pre-Owned', featured: 9,
    description: 'The timeless steel-and-rose-gold pairing in a refined 28 mm case, with a blush dial and diamond-set hour markers.',
    images: [U('1533139502658-0198f920d8e8')],   // ← swap: './images/watch-9.jpg'
    look: { case: '#d9ac8f', bezel: '#e2b79b', dial: '#f2dccf', accent: '#8b5a3c', strap: '#c8ccd3', date: true, diamonds: true }
  },
  {
    id: 'w10', name: 'Étoile Éternelle 33', collection: 'Étoile', category: 'women',
    movement: 'Quartz', material: '18k Yellow Gold', condition: 'preowned', price: 112000,
    ref: 'MA-EE33-YG', caliber: 'Cal. Q2250 Swiss Quartz', diameter: 33,
    waterRes: '30 m / 100 ft', reserve: 'Battery, 5 years',
    bracelet: '18k yellow gold, hidden clasp', box: 'Full box & papers (2021)',
    tag: 'Certified Pre-Owned', featured: 10,
    description: 'Solid yellow gold, a full diamond bezel and a champagne dial that glows at dusk. A jewel first and a watch second.',
    images: [U('1526045431048-f857369baa09')],   // ← swap: './images/watch-10.jpg'
    look: { case: '#dbbb68', bezel: '#e7cd85', dial: '#f0e1b6', accent: '#7a5a1e', strap: '#d3b25b', diamonds: true }
  },
  {
    id: 'w11', name: 'Quantum Hybrid Titanium', collection: 'Quantum', category: 'smart',
    movement: 'Hybrid', material: 'Titanium', condition: 'new', price: 14900,
    ref: 'MA-QH44-TI', caliber: 'Hybrid Swiss Quartz + Smart Module', diameter: 44,
    waterRes: '100 m / 330 ft', reserve: '30 days',
    bracelet: 'Titanium link, quick-release', box: 'Full box & papers',
    tag: 'Smart Luxury', featured: 11,
    description: 'Mechanical hands, intelligent soul. Tracks steps, sleep and notifications while a 30-day battery keeps the hands sweeping.',
    images: [U('1542496658-e33a6d57d50c')],      // ← swap: './images/watch-11.jpg'
    look: { case: '#7d838d', bezel: '#2a2d33', dial: '#101216', accent: '#d4af37', strap: '#6f757f', smart: true }
  },
  {
    id: 'w12', name: 'Nexus Ceramic Connected', collection: 'Nexus', category: 'smart',
    movement: 'Hybrid', material: 'Ceramic', condition: 'new', price: 18900,
    ref: 'MA-NX41-WC', caliber: 'Hybrid Swiss Quartz + Smart Module', diameter: 41,
    waterRes: '50 m / 165 ft', reserve: '21 days',
    bracelet: 'White ceramic link, hidden clasp', box: 'Full box & papers',
    tag: 'New', featured: 12,
    description: 'Scratch-proof white ceramic with a discreet connected module for contactless payments and concierge alerts.',
    images: [U('1495856458515-0637185db551')],   // ← swap: './images/watch-12.jpg'
    look: { case: '#f1f0ec', bezel: '#e6e4de', dial: '#f7f5f0', accent: '#1d2026', strap: '#e9e7e1', smart: true }
  }
];
