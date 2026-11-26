/* =====================================================================
   MAISON AURELIA — STORE DATA
   1) STORE_CONFIG  → WhatsApp number, dial text, VAT, promo codes, COD.
   2) PRODUCTS_DATA → one object per watch. Copy any block to add a watch.

   * dialText : the word printed on the animated hero watch dial. Change it freely.
   * images   : put real photos in the /images folder (e.g. './images/rolex-submariner.jpg').
                If a file is missing, a drawn watch is shown instead.
   * category : 'women' | 'yachtmaster' | 'patek' | 'omega' | 'breitling' | 'ap' |
                'cartier' | 'datejust' | 'oysterperp' | 'daytona' | 'daydate' |
                'submariner' | 'skydweller' | 'gmt'
   * movement : 'Automatic' | 'Quartz'
   * price    : number in AED (other currencies are converted automatically)
   ===================================================================== */

const STORE_CONFIG = {
  brand: 'MAISON AURELIA',
  dialText: 'AURELIA',                      // ← word shown on the animated watch dial
  whatsapp: '971500000000',                 // WhatsApp number, international format, no "+"
  vatRate: 0.05,
  currencyRates: { AED: 1, USD: 0.2723, SAR: 1.021 },   // 1 AED = x
  promoCodes: { VIPUAE: 10 },
  codMaxAed: 0                              // Cash on Delivery limit in AED (0 = no limit)
};

const IMG = (f) => './images/' + f + '.jpg';

const PRODUCTS_DATA = [
  { id: 'w01', brand: 'Rolex', name: 'Rolex Day-Date 40', collection: 'Rolex', category: 'daydate',
    movement: 'Automatic', material: '18k Yellow Gold', price: 210000, ref: '228238', caliber: 'Cal. 3255 Automatic', diameter: 40,
    waterRes: '100 m / 330 ft', reserve: '70 hours', bracelet: 'President bracelet, 18k yellow gold', box: 'Full box & papers',
    tag: 'Flagship', featured: 1, flagship: true,
    description: 'The President’s watch in solid 18k yellow gold, with the day spelled out in full. The ultimate statement of success.',
    images: [IMG('rolex-day-date')],
    look: { case: '#d9b865', bezel: '#c9a64f', dial: '#eadcb4', accent: '#7a5a1e', strap: '#d2b25a', date: true } },
  { id: 'w02', brand: 'Rolex', name: 'Rolex Daytona', collection: 'Rolex', category: 'daytona',
    movement: 'Automatic', material: 'Oystersteel', price: 145000, ref: '126500LN', caliber: 'Cal. 4131 Chronograph', diameter: 40,
    waterRes: '100 m / 330 ft', reserve: '72 hours', bracelet: 'Oyster bracelet, Oystersteel', box: 'Full box & papers',
    tag: 'Racing Icon', featured: 2,
    description: 'The legendary racing chronograph with a Cerachrom bezel and tachymetric scale.',
    images: [IMG('rolex-daytona')],
    look: { case: '#cdd1d8', bezel: '#14161b', dial: '#f1eee6', accent: '#14161b', strap: '#b4b9c3', sub: true, dive: true } },
  { id: 'w03', brand: 'Rolex', name: 'Rolex Submariner Date', collection: 'Rolex', category: 'submariner',
    movement: 'Automatic', material: 'Oystersteel', price: 62000, ref: '126610LN', caliber: 'Cal. 3235 Automatic', diameter: 41,
    waterRes: '300 m / 1,000 ft', reserve: '70 hours', bracelet: 'Oyster bracelet with Glidelock', box: 'Full box & papers',
    tag: 'Professional Diver', featured: 3,
    description: 'The reference diver’s watch: unidirectional Cerachrom bezel, Triplock crown and Chromalight lume.',
    images: [IMG('rolex-submariner')],
    look: { case: '#c9cdd4', bezel: '#0e1014', dial: '#0b0c10', accent: '#f2f2ee', strap: '#aeb3bd', dive: true, date: true } },
  { id: 'w04', brand: 'Rolex', name: 'Rolex GMT-Master II', collection: 'Rolex', category: 'gmt',
    movement: 'Automatic', material: 'Oystersteel', price: 95000, ref: '126710BLRO', caliber: 'Cal. 3285 Automatic', diameter: 40,
    waterRes: '100 m / 330 ft', reserve: '70 hours', bracelet: 'Jubilee bracelet, Oystersteel', box: 'Full box & papers',
    tag: 'Bestseller', featured: 4,
    description: 'The traveller’s watch, tracking a second time zone with its blue-and-red “Pepsi” bezel.',
    images: [IMG('rolex-gmt-master-ii')],
    look: { case: '#cdd1d8', bezel: '#7a1f2b', dial: '#0b0c10', accent: '#f2f2ee', strap: '#b4b9c3', dive: true, date: true } },
  { id: 'w05', brand: 'Rolex', name: 'Rolex Sky-Dweller', collection: 'Rolex', category: 'skydweller',
    movement: 'Automatic', material: 'Oystersteel & White Gold', price: 75000, ref: '326934', caliber: 'Cal. 9001 Automatic', diameter: 42,
    waterRes: '100 m / 330 ft', reserve: '72 hours', bracelet: 'Oyster bracelet', box: 'Full box & papers',
    tag: 'New', featured: 5,
    description: 'An annual calendar and dual time zone in one watch, set with the Ring Command bezel.',
    images: [IMG('rolex-sky-dweller')],
    look: { case: '#cdd1d8', bezel: '#b9bec8', dial: '#1f3a5f', accent: '#e8dcc0', strap: '#b7bcc6', date: true } },
  { id: 'w06', brand: 'Rolex', name: 'Rolex Yacht-Master 40', collection: 'Rolex', category: 'yachtmaster',
    movement: 'Automatic', material: 'Oystersteel & Everose Gold', price: 68000, ref: '126621', caliber: 'Cal. 3235 Automatic', diameter: 40,
    waterRes: '100 m / 330 ft', reserve: '70 hours', bracelet: 'Oyster bracelet', box: 'Full box & papers',
    tag: 'New', featured: 6,
    description: 'The sailor’s Rolex with a bidirectional bezel and a sporty, refined character.',
    images: [IMG('rolex-yacht-master')],
    look: { case: '#cdd1d8', bezel: '#14161b', dial: '#14161b', accent: '#e8dcc0', strap: '#b7bcc6', dive: true, date: true } },
  { id: 'w07', brand: 'Rolex', name: 'Rolex Datejust 41', collection: 'Rolex', category: 'datejust',
    movement: 'Automatic', material: 'Oystersteel & White Gold', price: 52000, ref: '126334', caliber: 'Cal. 3235 Automatic', diameter: 41,
    waterRes: '100 m / 330 ft', reserve: '70 hours', bracelet: 'Jubilee bracelet', box: 'Full box & papers',
    tag: 'Bestseller', featured: 7,
    description: 'The classic of classics: fluted bezel, cyclops date and a timeless dial.',
    images: [IMG('rolex-datejust')],
    look: { case: '#cfd3da', bezel: '#b9bec8', dial: '#1f3a5f', accent: '#e8dcc0', strap: '#b7bcc6', date: true } },
  { id: 'w08', brand: 'Rolex', name: 'Rolex Oyster Perpetual 41', collection: 'Rolex', category: 'oysterperp',
    movement: 'Automatic', material: 'Oystersteel', price: 42000, ref: '124300', caliber: 'Cal. 3230 Automatic', diameter: 41,
    waterRes: '100 m / 330 ft', reserve: '70 hours', bracelet: 'Oyster bracelet', box: 'Full box & papers',
    tag: 'New', featured: 8,
    description: 'The purest expression of the Oyster concept, with a vivid lacquered dial and no date.',
    images: [IMG('rolex-oyster-perpetual')],
    look: { case: '#cfd3da', bezel: '#c4c8d0', dial: '#2f8f83', accent: '#f2f2ee', strap: '#b7bcc6' } },
  { id: 'w09', brand: 'Rolex', name: 'Rolex Lady-Datejust 28', collection: 'Rolex for Women', category: 'women',
    movement: 'Automatic', material: 'Oystersteel & Everose Gold', price: 55000, ref: '279171', caliber: 'Cal. 2236 Automatic', diameter: 28,
    waterRes: '100 m / 330 ft', reserve: '55 hours', bracelet: 'Jubilee bracelet', box: 'Full box & papers',
    tag: 'New', featured: 9,
    description: 'The elegant Rolex for women, with a fluted bezel and a refined 28 mm case.',
    images: [IMG('rolex-lady-datejust')],
    look: { case: '#d9ac8f', bezel: '#e2b79b', dial: '#f2dccf', accent: '#8b5a3c', strap: '#c8ccd3', date: true } },
  { id: 'w10', brand: 'Patek Philippe', name: 'Patek Philippe Aquanaut 5167A', collection: 'Patek Philippe', category: 'patek',
    movement: 'Automatic', material: 'Steel', price: 260000, ref: '5167A-001', caliber: 'Cal. 324 S C Automatic', diameter: 40,
    waterRes: '120 m / 400 ft', reserve: '45 hours', bracelet: 'Composite strap', box: 'Full box & papers',
    tag: 'Haute Horlogerie', featured: 10,
    description: 'Patek Philippe’s modern sports icon, with a rounded octagonal case and embossed dial.',
    images: [IMG('patek-aquanaut')],
    look: { case: '#c9cdd4', bezel: '#aeb3bd', dial: '#1a1c21', accent: '#e9e6dc', strap: '#2a2c31', date: true, leather: true } },
  { id: 'w11', brand: 'Omega', name: 'Omega Seamaster Diver 300M', collection: 'Omega', category: 'omega',
    movement: 'Automatic', material: 'Stainless Steel', price: 18500, ref: '210.30.42.20.01.001', caliber: 'Cal. 8800 Master Chronometer', diameter: 42,
    waterRes: '300 m / 1,000 ft', reserve: '55 hours', bracelet: 'Stainless steel bracelet', box: 'Full box & papers',
    tag: 'Professional Diver', featured: 11,
    description: 'The James Bond diver: wave-pattern dial, ceramic bezel and a Master Chronometer movement.',
    images: [IMG('omega-seamaster')],
    look: { case: '#c9cdd4', bezel: '#0e1014', dial: '#0b0c10', accent: '#f2f2ee', strap: '#aeb3bd', dive: true, date: true } },
  { id: 'w12', brand: 'Breitling', name: 'Breitling Navitimer B01 Chronograph 43', collection: 'Breitling', category: 'breitling',
    movement: 'Automatic', material: 'Stainless Steel', price: 36500, ref: 'AB0138211B1A1', caliber: 'Cal. B01 Chronograph', diameter: 43,
    waterRes: '30 m / 100 ft', reserve: '70 hours', bracelet: 'Stainless steel bracelet', box: 'Full box & papers',
    tag: 'Bestseller', featured: 12,
    description: 'The pilot’s chronograph with the iconic circular slide-rule bezel and in-house B01 movement.',
    images: [IMG('breitling-navitimer')],
    look: { case: '#cdd1d8', bezel: '#14161b', dial: '#14161b', accent: '#e9e6dc', strap: '#b4b9c3', sub: true, dive: true } },
  { id: 'w13', brand: 'Audemars Piguet', name: 'Audemars Piguet Royal Oak 15500ST', collection: 'Audemars Piguet', category: 'ap',
    movement: 'Automatic', material: 'Stainless Steel', price: 290000, ref: '15500ST.OO.1220ST.01', caliber: 'Cal. 4302 Automatic', diameter: 41,
    waterRes: '50 m / 165 ft', reserve: '70 hours', bracelet: 'Integrated steel bracelet', box: 'Full box & papers',
    tag: 'Haute Horlogerie', featured: 13,
    description: 'The octagonal bezel and “Tapisserie” dial that redefined luxury sports watches in 1972.',
    images: [IMG('audemars-piguet-royal-oak')],
    look: { case: '#cdd1d8', bezel: '#b9bec8', dial: '#1f3a5f', accent: '#e8dcc0', strap: '#b7bcc6', date: true } },
  { id: 'w14', brand: 'Cartier', name: 'Cartier Tank Must', collection: 'Cartier', category: 'cartier',
    movement: 'Quartz', material: 'Stainless Steel', price: 13500, ref: 'WSTA0041', caliber: 'Quartz', diameter: 33,
    waterRes: '30 m / 100 ft', reserve: 'Battery, 5 years', bracelet: 'Stainless steel bracelet', box: 'Full box & papers',
    tag: 'New', featured: 14,
    description: 'The timeless rectangular Tank, with Roman numerals and a blue cabochon crown.',
    images: [IMG('cartier-tank-must')],
    look: { case: '#d3d6dc', bezel: '#c4c8d0', dial: '#efe8e4', accent: '#1d2026', strap: '#c3c7cf' } }
];
