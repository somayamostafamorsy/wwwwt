/* =====================================================================
   MAISON AURELIA — Storefront logic (vanilla JS)
   Depends on data.js (STORE_CONFIG, PRODUCTS_DATA).
   ===================================================================== */
(function () {
  'use strict';

  var CFG = STORE_CONFIG, PRODUCTS = PRODUCTS_DATA;
  var LS_KEY = 'maisonAurelia.v1';

  /* ------------------------------ i18n ------------------------------ */
  var I18N = {
    en: {
      'announce': "Complimentary insured express delivery worldwide  ·  Cash on delivery  ·  2-year warranty",
      'logo.sub': "FINE TIMEPIECES · WORLDWIDE",
      'nav.collection': 'Collection', 'nav.maison': 'The Maison', 'nav.concierge': "Customer Service",
      'hero.eyebrow': 'The Flagship Reference',
      'hero.title': 'Time, <em>perfected</em> in gold.',
      'hero.sub': "Authentic luxury timepieces, inspected by master watchmakers and delivered by insured express courier to your door anywhere in the world.",
      'hero.cta1': 'Explore Collection', 'hero.cta2': "Order on WhatsApp",
      'hero.m1': 'Timepieces', 'hero.m2v': 'Global', 'hero.m2': "Shipping", 'hero.m3': "Warranty", 'hero.tag': 'Featured',
      'trust.1t': 'Certified Authentic', 'trust.1d': 'Every watch verified by our master watchmakers.',
      'trust.2t': "2-Year Warranty", 'trust.2d': "Full cover against manufacturing defects.",
      'trust.3t': 'Full Box & Papers', 'trust.3d': 'Presented in original or collector packaging.',
      'trust.4t': "Customer Service", 'trust.4d': 'Personal advice on WhatsApp, seven days a week.',
      'col.eyebrow': 'The Collection', 'col.title': 'Timepieces of Distinction',
      'col.sub': "From iconic Rolex references to Patek Philippe, Audemars Piguet, Omega and more — refine by model, movement and price.",
      'f.movement': 'Movement', 'f.material': 'Case Material', 'f.condition': 'Condition', 'f.price': 'Max Price',
      'f.title': 'Filters', 'f.model': 'Model', 'f.hide': 'Hide filters', 'f.show': 'Filters', 'f.search': 'Search', 'f.searchph': 'Name, reference or collection…', 'f.sort': 'Sort By', 'f.reset': 'Reset filters', 'f.all': 'All',
      'sort.featured': 'Featured', 'sort.low': 'Price: Low to High', 'sort.high': 'Price: High to Low',
      'res.count': '{n} timepieces', 'res.one': '1 timepiece', 'res.none': 'No timepieces match your selection. Try widening your filters.',
      'cat.all': "All", 'cat.women': "Rolex for Women", 'cat.yachtmaster': "Rolex Yacht-Master", 'cat.patek': "Patek Philippe", 'cat.omega': "Omega", 'cat.breitling': "Breitling", 'cat.ap': "Audemars Piguet", 'cat.cartier': "Cartier Watches", 'cat.datejust': "Rolex Datejust", 'cat.oysterperp': "Rolex Oyster Perpetual", 'cat.daytona': "Rolex Daytona", 'cat.daydate': "Rolex Day-Date", 'cat.submariner': "Rolex Submariner", 'cat.skydweller': "Rolex Sky-Dweller", 'cat.gmt': "Rolex GMT",
      'mov.Automatic': 'Automatic', 'mov.Quartz': 'Quartz', 'mov.Manual Wind': 'Manual Wind', 'mov.Hybrid': 'Hybrid',
      'mat.904L Steel': '904L Steel', 'mat.18k Yellow Gold': '18k Yellow Gold', 'mat.Rose Gold': 'Rose Gold', 'mat.Titanium': 'Titanium', 'mat.Ceramic': 'Ceramic',
      'cond.new': 'Brand New', 'cond.preowned': 'Certified Pre-Owned',
      'tag.Bestseller': 'Bestseller', 'tag.Flagship': 'Flagship', 'tag.Haute Horlogerie': 'Haute Horlogerie', 'tag.Professional Diver': 'Professional Diver', 'tag.New': 'New',
      'tag.Racing Icon': 'Racing Icon', 'tag.Certified Pre-Owned': 'Certified Pre-Owned', 'tag.Diamond Bezel': 'Diamond Bezel', 'tag.Smart Luxury': 'Smart Luxury',
      'btn.add': 'Add to Bag', 'btn.wish': 'Save to Wishlist', 'btn.saved': 'Saved to Wishlist', 'btn.inquire': "Inquire on WhatsApp", 'btn.quick': 'Quick View', 'btn.tobag': 'Move to Bag',
      'spec.ref': 'Reference #', 'spec.caliber': 'Caliber', 'spec.diameter': 'Case Diameter', 'spec.water': 'Water Resistance', 'spec.reserve': 'Power Reserve',
      'spec.bracelet': 'Bracelet', 'spec.cond': 'Condition', 'spec.box': 'Box & Papers', 'spec.mov': 'Movement', 'spec.mat': 'Case Material',
      'view.dial': 'Dial', 'view.side': 'Profile', 'view.back': 'Caseback',
      'bag.title': 'Your Bag', 'wish.title': 'Wishlist', 'bag.empty': 'Your bag is empty.', 'wish.empty': 'Your wishlist is empty. Tap the heart on any timepiece to save it.',
      'bag.sub': 'Subtotal', 'bag.vat': "VAT (5%)", 'bag.ship': 'Insured Express Shipping', 'bag.free': 'Complimentary', 'bag.disc': 'Promo discount',
      'bag.total': 'Total (incl. VAT)', 'bag.checkout': 'Secure Checkout', 'bag.remove': 'Remove', 'bag.browse': 'Browse the collection',
      'promo.ph': 'Promo code', 'promo.apply': 'Apply', 'promo.ok': 'Code {c} applied — {p}% off', 'promo.bad': 'This promo code is not valid.', 'promo.remove': 'Remove code',
      'inst': 'or 4 interest-free payments of {a} with Tabby / Tamara',
      'co.title': 'Secure Checkout', 'co.sub': "Insured express delivery worldwide", 'co.delivery': 'Delivery Details', 'co.name': 'Full Name', 'co.mobile': "Mobile (with country code)", 'co.emirate': "Country",
      'co.area': "City", 'co.building': "Street Address / Building", 'co.payment': 'Payment Method', 'co.select': "Select country…",
      'pay.card': 'Credit / Debit Card', 'pay.card.d': 'Visa, Mastercard, Amex', 'pay.apple': 'Apple Pay', 'pay.apple.d': 'Pay with Face ID', 'pay.cod': 'Cash on Delivery', 'pay.cod.d': "Pay when you receive your watch",
      'pay.cod.na': 'Not available above {a}', 'pay.tabby': '4 Interest-free Installments', 'pay.tabby.d': '{a} × 4, Tabby / Tamara',
      'card.number': 'Card Number', 'card.exp': 'Expiry (MM/YY)', 'card.cvv': 'CVV',
      'co.place': 'Place Order', 'co.summary': 'Order Summary', 'co.demo': 'Demonstration checkout — no payment is processed and no card data is stored.',
      'err.name': 'Please enter your full name.', 'err.mobile': "Enter a valid mobile with country code, e.g. +971 50 123 4567.", 'err.emirate': "Please select a country.",
      'err.area': "Please enter your city.", 'err.building': "Please enter your street address.", 'err.card': 'Please check your card details.',
      'deliv.dubai': "Insured express delivery within 1–2 business days.", 'deliv.other': "Insured international express delivery in 3–7 business days, with tracking and signature on delivery.",
      'rc.title': 'Order Confirmed', 'rc.thanks': "Thank you, {n}. Our team is preparing your order.", 'rc.order': 'Order No.', 'rc.date': 'Date', 'rc.deliver': 'Delivery',
      'rc.pay': 'Payment', 'rc.address': 'Deliver To', 'rc.copy': 'Copy Receipt', 'rc.copied': 'Receipt copied to clipboard', 'rc.copyfail': 'Select and copy the receipt manually', 'rc.continue': 'Continue Shopping',
      'rc.paid.card': 'Card ending {l}', 'rc.paid.apple': 'Apple Pay', 'rc.paid.cod': 'Cash on Delivery', 'rc.paid.tabby': '4 installments of {a}',
      'mai.eyebrow': 'The Maison', 'mai.title': 'Heritage, measured in seconds.',
      'mai.p1': "Since 1987, Maison Aurelia has curated the finest Swiss and independent timepieces for collectors around the world.",
      'mai.p2': "Every watch is inspected and authenticated before it reaches you, and backed by a 2-year warranty.",
      'mai.s1': 'Established', 'mai.s2': 'Authenticated', 'mai.s3': "Warranty", 'mai.s4': "Support",
      'conc.eyebrow': "Customer Service", 'conc.title': "One message away, on WhatsApp.",
      'conc.p': "Ask about availability, shipping to your country, or request a watch not listed here.", 'conc.cta': 'Chat on WhatsApp',
      'foot.tag': "Fine timepieces · Worldwide shipping", 'foot.rights': '© Maison Aurelia. Demonstration storefront.',
      'toast.added': 'Added to your bag', 'toast.wish': 'Saved to your wishlist', 'toast.unwish': 'Removed from wishlist',
      'wa.inquire': 'Hello Maison Aurelia, I would like to inquire about the {name} (Ref. {ref}).', 'wa.viewing': "Hello Maison Aurelia, I would like to place an order.", 'wa.general': 'Hello Maison Aurelia, I would like some assistance.',
      'vat.note': 'incl. 5% VAT at checkout', 'lang.btn': 'العربية'
    },
    ar: {
      'announce': "شحن سريع مؤمَّن مجاني لجميع دول العالم  ·  الدفع عند الاستلام  ·  ضمان سنتين",
      'logo.sub': "ساعات فاخرة · شحن عالمي",
      'nav.collection': 'المجموعة', 'nav.maison': 'الدار', 'nav.concierge': "خدمة العملاء",
      'hero.eyebrow': 'الإصدار الرائد',
      'hero.title': 'الوقت، في <em>أبهى</em> صوره الذهبية.',
      'hero.sub': "ساعات فاخرة أصلية يفحصها أمهر الساعاتية، وتصلك عبر شحن سريع مؤمَّن إلى باب منزلك في أي مكان بالعالم.",
      'hero.cta1': 'استكشف المجموعة', 'hero.cta2': "اطلب عبر واتساب",
      'hero.m1': 'ساعة', 'hero.m2v': 'عالمي', 'hero.m2': "شحن", 'hero.m3': "ضمان", 'hero.tag': 'مختارة',
      'trust.1t': 'أصالة معتمدة', 'trust.1d': 'كل ساعة موثّقة من خبراء الدار.',
      'trust.2t': "ضمان سنتين", 'trust.2d': "تغطية كاملة لعيوب الصناعة.",
      'trust.3t': 'علبة وأوراق كاملة', 'trust.3d': 'تُسلَّم بعبوتها الأصلية أو عبوة المقتنين.',
      'trust.4t': "خدمة العملاء", 'trust.4d': 'استشارة شخصية عبر واتساب طوال أيام الأسبوع.',
      'col.eyebrow': 'المجموعة', 'col.title': 'ساعات استثنائية',
      'col.sub': "من مراجع رولكس الشهيرة إلى باتيك فيليب وأوديمار بيغيه وأوميغا وغيرها — صفِّ حسب الموديل والحركة والسعر.",
      'f.movement': 'الحركة', 'f.material': 'معدن العلبة', 'f.condition': 'الحالة', 'f.price': 'أقصى سعر',
      'f.title': 'الفلاتر', 'f.model': 'الموديل', 'f.hide': 'إخفاء الفلاتر', 'f.show': 'الفلاتر', 'f.search': 'بحث', 'f.searchph': 'الاسم أو المرجع أو المجموعة…', 'f.sort': 'ترتيب حسب', 'f.reset': 'إعادة ضبط الفلاتر', 'f.all': 'الكل',
      'sort.featured': 'المميزة', 'sort.low': 'السعر: من الأقل إلى الأعلى', 'sort.high': 'السعر: من الأعلى إلى الأقل',
      'res.count': '{n} ساعة', 'res.one': 'ساعة واحدة', 'res.none': 'لا توجد ساعات مطابقة. جرّب توسيع الفلاتر.',
      'cat.all': "الكل", 'cat.women': "رولكس للسيدات", 'cat.yachtmaster': "Rolex Yacht-Master", 'cat.patek': "Patek Philippe", 'cat.omega': "Omega", 'cat.breitling': "Breitling", 'cat.ap': "Audemars Piguet", 'cat.cartier': "Cartier", 'cat.datejust': "Rolex Datejust", 'cat.oysterperp': "Rolex Oyster Perpetual", 'cat.daytona': "Rolex Daytona", 'cat.daydate': "Rolex Day-Date", 'cat.submariner': "Rolex Submariner", 'cat.skydweller': "Rolex Sky-Dweller", 'cat.gmt': "Rolex GMT",
      'mov.Automatic': 'أوتوماتيك', 'mov.Quartz': 'كوارتز', 'mov.Manual Wind': 'تعبئة يدوية', 'mov.Hybrid': 'هجينة',
      'mat.904L Steel': 'ستانلس ستيل 904L', 'mat.18k Yellow Gold': 'ذهب أصفر 18 قيراط', 'mat.Rose Gold': 'ذهب وردي', 'mat.Titanium': 'تيتانيوم', 'mat.Ceramic': 'سيراميك',
      'cond.new': 'جديدة', 'cond.preowned': 'مستعملة معتمدة',
      'tag.Bestseller': 'الأكثر مبيعاً', 'tag.Flagship': 'الرائدة', 'tag.Haute Horlogerie': 'ساعات راقية', 'tag.Professional Diver': 'غوص احترافي', 'tag.New': 'جديد',
      'tag.Racing Icon': 'أيقونة السباق', 'tag.Certified Pre-Owned': 'مستعملة معتمدة', 'tag.Diamond Bezel': 'إطار ألماس', 'tag.Smart Luxury': 'ذكية فاخرة',
      'btn.add': 'أضف إلى الحقيبة', 'btn.wish': 'احفظ في المفضلة', 'btn.saved': 'محفوظة في المفضلة', 'btn.inquire': "استفسر عبر واتساب", 'btn.quick': 'نظرة سريعة', 'btn.tobag': 'انقل إلى الحقيبة',
      'spec.ref': 'رقم المرجع', 'spec.caliber': 'الكاليبر', 'spec.diameter': 'قطر العلبة', 'spec.water': 'مقاومة الماء', 'spec.reserve': 'احتياطي الطاقة',
      'spec.bracelet': 'السوار', 'spec.cond': 'الحالة', 'spec.box': 'العلبة والأوراق', 'spec.mov': 'الحركة', 'spec.mat': 'معدن العلبة',
      'view.dial': 'الواجهة', 'view.side': 'الجانب', 'view.back': 'الخلفية',
      'bag.title': 'حقيبتك', 'wish.title': 'المفضلة', 'bag.empty': 'حقيبتك فارغة.', 'wish.empty': 'قائمة المفضلة فارغة. اضغط على القلب في أي ساعة لحفظها.',
      'bag.sub': 'المجموع الفرعي', 'bag.vat': "ضريبة القيمة المضافة (5%)", 'bag.ship': 'شحن سريع مؤمَّن', 'bag.free': 'مجاني', 'bag.disc': 'خصم الرمز الترويجي',
      'bag.total': 'الإجمالي (شامل الضريبة)', 'bag.checkout': 'إتمام الشراء الآمن', 'bag.remove': 'إزالة', 'bag.browse': 'تصفّح المجموعة',
      'promo.ph': 'رمز ترويجي', 'promo.apply': 'تطبيق', 'promo.ok': 'تم تطبيق الرمز {c} — خصم {p}%', 'promo.bad': 'الرمز الترويجي غير صالح.', 'promo.remove': 'إزالة الرمز',
      'inst': 'أو 4 دفعات بدون فوائد بقيمة {a} عبر تابي / تمارا',
      'co.title': 'إتمام الشراء الآمن', 'co.sub': "توصيل سريع مؤمَّن لجميع دول العالم", 'co.delivery': 'تفاصيل التوصيل', 'co.name': 'الاسم الكامل', 'co.mobile': "الجوال (مع رمز الدولة)", 'co.emirate': "الدولة",
      'co.area': "المدينة", 'co.building': "العنوان / رقم المبنى", 'co.payment': 'طريقة الدفع', 'co.select': "اختر الدولة…",
      'pay.card': 'بطاقة ائتمان / خصم', 'pay.card.d': 'فيزا، ماستركارد، أمكس', 'pay.apple': 'Apple Pay', 'pay.apple.d': 'الدفع عبر Face ID', 'pay.cod': 'الدفع عند الاستلام', 'pay.cod.d': "ادفع عند استلام ساعتك",
      'pay.cod.na': 'غير متاح للطلبات فوق {a}', 'pay.tabby': '4 دفعات بدون فوائد', 'pay.tabby.d': '{a} × 4 عبر تابي / تمارا',
      'card.number': 'رقم البطاقة', 'card.exp': 'الانتهاء (شهر/سنة)', 'card.cvv': 'رمز الأمان',
      'co.place': 'تأكيد الطلب', 'co.summary': 'ملخص الطلب', 'co.demo': 'عملية شراء تجريبية — لا يتم أي دفع ولا تُحفظ بيانات البطاقة.',
      'err.name': 'الرجاء إدخال الاسم الكامل.', 'err.mobile': "أدخل رقم جوال صحيح مع رمز الدولة مثل ‎+971 50 123 4567.", 'err.emirate': "الرجاء اختيار الدولة.",
      'err.area': "الرجاء إدخال المدينة.", 'err.building': "الرجاء إدخال العنوان.", 'err.card': 'الرجاء التحقق من بيانات البطاقة.',
      'deliv.dubai': "توصيل سريع مؤمَّن خلال 1–2 يوم عمل.", 'deliv.other': "توصيل دولي سريع مؤمَّن خلال 3–7 أيام عمل، مع رقم تتبع وتوقيع عند الاستلام.",
      'rc.title': 'تم تأكيد الطلب', 'rc.thanks': "شكراً {n}. يقوم فريقنا بتجهيز طلبك.", 'rc.order': 'رقم الطلب', 'rc.date': 'التاريخ', 'rc.deliver': 'التوصيل',
      'rc.pay': 'الدفع', 'rc.address': 'عنوان التسليم', 'rc.copy': 'نسخ الإيصال', 'rc.copied': 'تم نسخ الإيصال', 'rc.copyfail': 'حدّد الإيصال وانسخه يدوياً', 'rc.continue': 'متابعة التسوق',
      'rc.paid.card': 'بطاقة تنتهي بـ {l}', 'rc.paid.apple': 'Apple Pay', 'rc.paid.cod': 'الدفع عند الاستلام', 'rc.paid.tabby': '4 دفعات بقيمة {a}',
      'mai.eyebrow': 'الدار', 'mai.title': 'تراثٌ يُقاس بالثواني.',
      'mai.p1': "منذ 1987 تنتقي «ميزون أوريليا» أرقى الساعات السويسرية والمستقلة لهواة الاقتناء حول العالم.",
      'mai.p2': "تُفحص كل ساعة وتُوثَّق قبل أن تصلك، وتأتي بضمان سنتين.",
      'mai.s1': 'تأسست', 'mai.s2': 'موثّقة', 'mai.s3': "ضمان", 'mai.s4': "دعم",
      'conc.eyebrow': "خدمة العملاء", 'conc.title': "على بُعد رسالة واحدة، عبر واتساب.",
      'conc.p': "اسأل عن التوفر والشحن إلى بلدك، أو اطلب ساعة غير مدرجة هنا.", 'conc.cta': 'تحدّث عبر واتساب',
      'foot.tag': "ساعات فاخرة · شحن لكل دول العالم", 'foot.rights': '© ميزون أوريليا. متجر تجريبي.',
      'toast.added': 'أُضيفت إلى حقيبتك', 'toast.wish': 'حُفظت في المفضلة', 'toast.unwish': 'أُزيلت من المفضلة',
      'wa.inquire': 'مرحباً ميزون أوريليا، أرغب في الاستفسار عن ساعة {name} (المرجع {ref}).', 'wa.viewing': "مرحباً ميزون أوريليا، أرغب في تقديم طلب.", 'wa.general': 'مرحباً ميزون أوريليا، أحتاج إلى مساعدة.',
      'vat.note': 'شامل 5% ضريبة عند الدفع', 'lang.btn': 'EN'
    }
  };
  var COUNTRIES = [['AE','United Arab Emirates','الإمارات'],['SA','Saudi Arabia','السعودية'],['EG','Egypt','مصر'],['KW','Kuwait','الكويت'],['QA','Qatar','قطر'],['BH','Bahrain','البحرين'],['OM','Oman','عُمان'],['JO','Jordan','الأردن'],['LB','Lebanon','لبنان'],['IQ','Iraq','العراق'],['MA','Morocco','المغرب'],['TN','Tunisia','تونس'],['DZ','Algeria','الجزائر'],['LY','Libya','ليبيا'],['SD','Sudan','السودان'],['TR','Türkiye','تركيا'],['GB','United Kingdom','المملكة المتحدة'],['DE','Germany','ألمانيا'],['FR','France','فرنسا'],['IT','Italy','إيطاليا'],['ES','Spain','إسبانيا'],['CH','Switzerland','سويسرا'],['NL','Netherlands','هولندا'],['US','United States','الولايات المتحدة'],['CA','Canada','كندا'],['AU','Australia','أستراليا'],['IN','India','الهند'],['PK','Pakistan','باكستان'],['MY','Malaysia','ماليزيا'],['SG','Singapore','سنغافورة'],['ZZ','Other country','دولة أخرى']];
  var EMIRATES = { en: {}, ar: {} };
  COUNTRIES.forEach(function (c) { EMIRATES.en[c[0]] = c[1]; EMIRATES.ar[c[0]] = c[2]; });

  /* ------------------------------ state ----------------------------- */
  var state = { cart: [], wish: [], currency: 'AED', lang: 'en', theme: 'dark', promo: '' };
  try {
    var saved = JSON.parse(localStorage.getItem(LS_KEY) || 'null');
    if (saved && typeof saved === 'object') {
      if (Array.isArray(saved.cart)) state.cart = saved.cart.filter(function (c) { return c && byId(c.id) && c.qty > 0; });
      if (Array.isArray(saved.wish)) state.wish = saved.wish.filter(byId);
      if (CFG.currencyRates[saved.currency]) state.currency = saved.currency;
      if (saved.lang === 'ar' || saved.lang === 'en') state.lang = saved.lang;
      if (saved.theme === 'light' || saved.theme === 'dark') state.theme = saved.theme;
      if (saved.promo && CFG.promoCodes[saved.promo]) state.promo = saved.promo;
    }
  } catch (e) { /* storage unavailable — continue in memory */ }
  function persist() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  var MAXP = Math.ceil(Math.max.apply(null, PRODUCTS.map(function (p) { return p.price; })) / 5000) * 5000;
  var F = { cat: 'all', mov: 'all', max: MAXP, q: '', sort: 'featured' };

  /* ----------------------------- helpers ---------------------------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function byId(id) { return PRODUCTS.filter(function (p) { return p.id === id; })[0]; }
  function t(k, v) {
    var s = (I18N[state.lang] && I18N[state.lang][k]) || I18N.en[k] || k;
    if (v) Object.keys(v).forEach(function (n) { s = s.split('{' + n + '}').join(v[n]); });
    return s;
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function money(aed, exact) {
    var v = aed * CFG.currencyRates[state.currency];
    var o = exact ? { minimumFractionDigits: 0, maximumFractionDigits: 2 } : { maximumFractionDigits: 0 };
    return state.currency + ' ' + v.toLocaleString('en-US', o);
  }
  function r2(n) { return Math.round(n * 100) / 100; }
  function tr(prefix, val) { return t(prefix + '.' + val); }

  /* ------------------- generated watch illustrations ---------------- */
  function mix(hex, to, a) {
    var h = hex.replace('#', ''); if (h.length === 3) h = h.replace(/./g, '$&$&');
    var n = parseInt(h, 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    var m = function (c, tt) { return Math.round(c + (tt - c) * a); };
    return 'rgb(' + m(r, to) + ',' + m(g, to) + ',' + m(b, to) + ')';
  }
  function lighten(h, a) { return mix(h, 255, a || .35); }
  function darken(h, a) { return mix(h, 0, a || .35); }
  function pol(cx, cy, r, deg) { var a = (deg - 90) * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; }
  function ln(cx, cy, r1, r2, deg, stroke, w, cap) {
    var a = pol(cx, cy, r1, deg), b = pol(cx, cy, r2, deg);
    return '<line x1="' + a[0].toFixed(1) + '" y1="' + a[1].toFixed(1) + '" x2="' + b[0].toFixed(1) + '" y2="' + b[1].toFixed(1) + '" stroke="' + stroke + '" stroke-width="' + w + '"' + (cap ? ' stroke-linecap="round"' : '') + '/>';
  }

  function watchSVG(p, view, opts) {
    opts = opts || {}; view = view || 'dial';
    var L = p.look, id = opts.idp || 'g', cx = 200, cy = 200, s = '', dt = String(opts.dialText || p.brand || '').toUpperCase();
    s += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="800" height="800">';
    s += '<defs>' +
      '<linearGradient id="' + id + 'c" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + lighten(L.case, .55) + '"/><stop offset=".5" stop-color="' + L.case + '"/><stop offset="1" stop-color="' + darken(L.case, .4) + '"/></linearGradient>' +
      '<linearGradient id="' + id + 'b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + lighten(L.bezel, .35) + '"/><stop offset="1" stop-color="' + darken(L.bezel, .35) + '"/></linearGradient>' +
      '<radialGradient id="' + id + 'd" cx=".35" cy=".28" r="1"><stop offset="0" stop-color="' + lighten(L.dial, .28) + '"/><stop offset=".7" stop-color="' + L.dial + '"/><stop offset="1" stop-color="' + darken(L.dial, .3) + '"/></radialGradient>' +
      '<linearGradient id="' + id + 's" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="' + darken(L.strap, .35) + '"/><stop offset=".5" stop-color="' + lighten(L.strap, .15) + '"/><stop offset="1" stop-color="' + darken(L.strap, .35) + '"/></linearGradient>' +
      '<linearGradient id="' + id + 'g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".28"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/></linearGradient>' +
      '</defs>';

    function strapSeg(x, y, w, h) {
      var o = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="url(#' + id + 's)"/>', i;
      if (L.leather) {
        o += '<rect x="' + (x + 6) + '" y="' + y + '" width="' + (w - 12) + '" height="' + h + '" fill="none" stroke="' + lighten(L.strap, .4) + '" stroke-width="1" stroke-dasharray="4 4" opacity=".6"/>';
      } else {
        for (i = 1; i < 8; i++) { var yy = y + i * (h / 8); o += '<line x1="' + x + '" y1="' + yy + '" x2="' + (x + w) + '" y2="' + yy + '" stroke="' + darken(L.strap, .5) + '" stroke-width="1.4" opacity=".65"/>'; }
        o += '<line x1="' + (x + w / 3) + '" y1="' + y + '" x2="' + (x + w / 3) + '" y2="' + (y + h) + '" stroke="' + lighten(L.strap, .5) + '" stroke-width="1" opacity=".4"/>';
      }
      return o;
    }

    if (view === 'side') {
      s += '<rect x="0" y="168" width="112" height="64" rx="10" fill="url(#' + id + 's)"/><rect x="288" y="168" width="112" height="64" rx="10" fill="url(#' + id + 's)"/>';
      s += '<rect x="100" y="140" width="200" height="120" rx="24" fill="url(#' + id + 'c)"/>';
      s += '<rect x="108" y="124" width="184" height="30" rx="12" fill="url(#' + id + 'b)"/>';
      s += '<rect x="118" y="112" width="164" height="18" rx="9" fill="rgba(190,225,255,.28)" stroke="rgba(255,255,255,.4)"/>';
      s += '<rect x="300" y="188" width="20" height="24" rx="5" fill="url(#' + id + 'c)"/>';
      if (L.sub) s += '<rect x="298" y="156" width="16" height="12" rx="3" fill="url(#' + id + 'c)"/><rect x="298" y="232" width="16" height="12" rx="3" fill="url(#' + id + 'c)"/>';
      s += '<rect x="100" y="140" width="200" height="120" rx="24" fill="url(#' + id + 'g)"/>';
      return s + '</svg>';
    }
    if (view === 'back') {
      s += strapSeg(148, 0, 104, 120) + strapSeg(148, 280, 104, 120);
      s += '<circle cx="200" cy="200" r="128" fill="url(#' + id + 'c)"/><circle cx="200" cy="200" r="112" fill="none" stroke="' + darken(L.case, .45) + '" stroke-width="2"/>';
      for (var k = 0; k < 8; k++) { var q = pol(cx, cy, 120, k * 45 + 22.5); s += '<circle cx="' + q[0].toFixed(1) + '" cy="' + q[1].toFixed(1) + '" r="3.4" fill="' + darken(L.case, .5) + '"/>'; }
      s += '<circle cx="200" cy="200" r="66" fill="#0c0d10" stroke="' + darken(L.case, .5) + '" stroke-width="4"/>';
      s += '<path d="M200 200 L200 142 A58 58 0 0 1 252 226 Z" fill="#c9a64f" opacity=".9"/><circle cx="200" cy="200" r="8" fill="#e8d9a8"/>';
      s += '<text x="200" y="98" text-anchor="middle" font-family="Georgia,serif" font-size="11" letter-spacing="3" fill="' + darken(L.case, .55) + '">CERTIFIED AUTHENTIC</text>';
      s += '<text x="200" y="316" text-anchor="middle" font-family="Georgia,serif" font-size="10" letter-spacing="2" fill="' + darken(L.case, .55) + '">' + esc(p.ref) + '</text>';
      return s + '</svg>';
    }

    /* dial view */
    s += strapSeg(148, 0, 104, 124) + strapSeg(148, 276, 104, 124);
    s += '<rect x="322" y="186" width="18" height="28" rx="5" fill="url(#' + id + 'c)"/>';
    s += '<circle cx="200" cy="200" r="130" fill="rgba(0,0,0,.28)"/><circle cx="200" cy="200" r="128" fill="url(#' + id + 'c)"/>';
    s += '<circle cx="200" cy="200" r="116" fill="url(#' + id + 'b)" stroke="rgba(0,0,0,.4)"/>';
    var i, q2;
    if (L.diamonds) { for (i = 0; i < 40; i++) { q2 = pol(cx, cy, 105, i * 9); s += '<circle cx="' + q2[0].toFixed(1) + '" cy="' + q2[1].toFixed(1) + '" r="3.1" fill="#fbfbff" stroke="rgba(255,255,255,.7)" stroke-width=".6"/>'; } }
    if (L.dive) {
      for (i = 0; i < 60; i++) s += ln(cx, cy, i % 5 === 0 ? 96 : 101, 112, i * 6, i % 5 === 0 ? (L.accent || '#fff') : 'rgba(255,255,255,.55)', i % 5 === 0 ? 2.4 : 1);
      q2 = pol(cx, cy, 106, 0); s += '<circle cx="' + q2[0] + '" cy="' + q2[1] + '" r="4.5" fill="#f4f1e8"/>';
    }
    s += '<circle cx="200" cy="200" r="92" fill="url(#' + id + 'd)" stroke="rgba(0,0,0,.45)" stroke-width="2"/>';
    if (L.skeleton) {
      s += '<circle cx="200" cy="200" r="92" fill="#0d0e11"/>';
      s += '<circle cx="168" cy="178" r="34" fill="none" stroke="' + L.accent + '" stroke-width="9" stroke-dasharray="4 3" opacity=".9"/><circle cx="168" cy="178" r="22" fill="none" stroke="' + L.accent + '" stroke-width="1.5"/>';
      s += '<circle cx="238" cy="204" r="26" fill="none" stroke="' + L.accent + '" stroke-width="8" stroke-dasharray="3 3" opacity=".85"/><circle cx="238" cy="204" r="14" fill="none" stroke="' + L.accent + '" stroke-width="1.5"/>';
      s += '<circle cx="200" cy="252" r="22" fill="none" stroke="' + L.accent + '" stroke-width="2.4"/><path d="M178 252h44M200 230v44" stroke="' + L.accent + '" stroke-width="1.4"/><circle cx="200" cy="252" r="5" fill="' + L.accent + '"/>';
      s += '<path d="M120 150 Q200 118 280 160 M132 238 Q160 280 220 288" fill="none" stroke="' + L.accent + '" stroke-width="3" opacity=".7"/>';
    }
    for (i = 0; i < 60; i++) s += ln(cx, cy, i % 5 === 0 ? 80 : 86, 90, i * 6, 'rgba(' + (L.skeleton ? '230,200,170' : '128,128,128') + ',.45)', .8);
    if (!L.skeleton) {
      for (i = 0; i < 12; i++) {
        if (i === 3 && L.date) continue;
        var main = i % 3 === 0;
        s += ln(cx, cy, main ? 62 : 68, 82, i * 30, L.accent, main ? 5 : 3.2);
      }
    }
    if (L.date) s += '<rect x="253" y="190" width="24" height="20" fill="#f7f5f0" stroke="' + L.accent + '" stroke-width="1.4"/><text x="265" y="205" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="#14181F">21</text>';
    if (L.sub) {
      [[158, 200], [242, 200], [200, 246]].forEach(function (c) {
        s += '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="19" fill="' + darken(L.dial, .08) + '" stroke="' + L.accent + '" stroke-width="1.4"/>';
        s += ln(c[0], c[1], 0, 14, 30 + c[0] % 7 * 20, L.accent, 1.4, true);
      });
    }
    if (L.smart) {
      s += '<circle cx="200" cy="250" r="22" fill="#0b0c0f" stroke="' + L.accent + '" stroke-width="1.4"/><text x="200" y="249" text-anchor="middle" font-family="Arial,sans-serif" font-size="12" font-weight="700" fill="' + L.accent + '">72</text><text x="200" y="260" text-anchor="middle" font-family="Arial,sans-serif" font-size="6" fill="#9CA3AF">BPM</text>';
      s += '<path d="M150 200 A50 50 0 0 1 200 150" fill="none" stroke="' + L.accent + '" stroke-width="2" opacity=".6"/>';
    }
    if (!L.skeleton) {
      s += '<text x="200" y="146" text-anchor="middle" font-family="Georgia,serif" font-size="9" letter-spacing="3.2" fill="' + L.accent + '" textLength="' + Math.min(dt.length * 9.2, 96).toFixed(1) + '" lengthAdjust="spacing">' + esc(dt) + '</text>';
      if (!L.sub && !L.smart) s += '<text x="200" y="' + (L.date ? 240 : 256) + '" text-anchor="middle" font-family="Georgia,serif" font-size="6.5" letter-spacing="2" fill="' + L.accent + '" opacity=".8">' + (p.movement === 'Quartz' ? 'SWISS QUARTZ' : 'AUTOMATIC') + '</text>';
    }
    /* hands */
    var hc = L.skeleton ? L.accent : (L.dial && /^#(0|1|2)/.test(L.dial) ? '#f2efe6' : '#1a1c21');
    var sc = L.dive ? '#d9a441' : '#c8442f';
    if (opts.live) {
      s += '<g id="' + id + 'H"><line x1="200" y1="214" x2="200" y2="140" stroke="' + hc + '" stroke-width="6.5" stroke-linecap="round"/></g>' +
           '<g id="' + id + 'M"><line x1="200" y1="216" x2="200" y2="118" stroke="' + hc + '" stroke-width="4.6" stroke-linecap="round"/></g>' +
           '<g id="' + id + 'S"><line x1="200" y1="226" x2="200" y2="112" stroke="' + sc + '" stroke-width="1.8"/><circle cx="200" cy="200" r="4.2" fill="' + sc + '"/></g>';
    } else {
      s += '<g transform="rotate(305 200 200)"><line x1="200" y1="214" x2="200" y2="140" stroke="' + hc + '" stroke-width="6.5" stroke-linecap="round"/></g>' +
           '<g transform="rotate(60 200 200)"><line x1="200" y1="216" x2="200" y2="118" stroke="' + hc + '" stroke-width="4.6" stroke-linecap="round"/></g>' +
           '<g transform="rotate(180 200 200)"><line x1="200" y1="226" x2="200" y2="112" stroke="' + sc + '" stroke-width="1.8"/><circle cx="200" cy="200" r="4.2" fill="' + sc + '"/></g>';
    }
    s += '<circle cx="200" cy="200" r="5.5" fill="' + hc + '"/><circle cx="200" cy="200" r="2" fill="' + sc + '"/>';
    s += '<circle cx="200" cy="200" r="116" fill="url(#' + id + 'g)"/>';
    return s + '</svg>';
  }
  function svgURI(p, view) { return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(watchSVG(p, view, { idp: p.id + (view || 'd') })); }
  function placeholderURI(p) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 420"><rect width="400" height="420" fill="#16181d"/><rect x="14" y="14" width="372" height="392" fill="none" stroke="#c6a86b" stroke-opacity=".35"/>' +
      '<text x="200" y="190" text-anchor="middle" font-family="Georgia,serif" font-size="22" letter-spacing="5" fill="#c6a86b">' + esc(String(p.brand).toUpperCase()) + '</text>' +
      '<text x="200" y="226" text-anchor="middle" font-family="Georgia,serif" font-size="15" fill="#d8d4c8">' + esc(p.name.replace(p.brand, '').trim()) + '</text></svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }
  function imgTag(p, src, alt, extra) {
    return '<img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="lazy" decoding="async" data-pid="' + p.id + '" data-view="' + (extra || 'dial') + '">';
  }
  /* If a photo URL is missing / blocked, swap in the drawn watch so nothing looks broken. */
  document.addEventListener('error', function (e) {
    var el = e.target;
    if (el && el.tagName === 'IMG' && el.dataset && el.dataset.pid && !el.dataset.fb) {
      var p = byId(el.dataset.pid); if (!p) return;
      var m = /^(\.\/images\/.+)\.(jpg|png|webp)$/i.exec(el.getAttribute('src') || '');
      if (m) { var order = ['jpg', 'png', 'webp'], n = +(el.dataset.ext || 0) + 1; if (m[2].toLowerCase() !== order[n - 1 > 2 ? 2 : n - 1] && false) return; var next = order.filter(function (x) { return x !== m[2].toLowerCase(); })[n - 1]; if (next) { el.dataset.ext = n; el.src = m[1] + '.' + next; return; } }
      el.dataset.fb = '1'; el.src = placeholderURI(p);
    }
  }, true);

  function gallery(p) {
    var labels = [t('view.dial'), t('view.side'), t('view.back')];
    return p.images.map(function (u, i) { return { src: u, view: ['dial', 'side', 'back'][i % 3], label: labels[i % 3] + (i > 2 ? ' ' + (Math.floor(i / 3) + 1) : '') }; })
      .slice(0, 6);
  }

  /* ----------------------------- i18n apply ------------------------- */
  function applyStatic() {
    var h = document.documentElement;
    h.lang = state.lang; h.dir = state.lang === 'ar' ? 'rtl' : 'ltr'; h.setAttribute('data-theme', state.theme);
    $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    $$('[data-i18n-html]').forEach(function (el) { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
    $$('[data-i18n-ph]').forEach(function (el) { el.placeholder = t(el.getAttribute('data-i18n-ph')); });
    $('#langBtn').textContent = t('lang.btn');
    $('#currencySel').value = state.currency;
    var flag = PRODUCTS.filter(function (p) { return p.flagship; })[0] || PRODUCTS[0];
    $('#heroName').textContent = flag.name;
    $('#viewingBtn').href = waLink(t('wa.viewing'));
    $('#conciergeBtn').href = waLink(t('wa.general'));
  }
  var WA_ICO = '<svg class=\"wa-ico\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.8a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.88-9.89 9.88M20.46 3.49A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45c6.56 0 11.9-5.34 11.9-11.89 0-3.18-1.24-6.17-3.48-8.42\"/></svg>';
  function waLink(msg) { return 'https://wa.me/' + CFG.whatsapp + '?text=' + encodeURIComponent(msg); }

  /* ------------------------------ hero ------------------------------ */
  function mountHero() {
    var flag = PRODUCTS.filter(function (p) { return p.flagship; })[0] || PRODUCTS[0];
    var host = $('#heroWatch'), old = $('svg', host); if (old) old.remove();
    host.insertAdjacentHTML('afterbegin', watchSVG(flag, 'dial', { idp: 'hero', live: true, dialText: CFG.dialText }).replace('width="800" height="800"', 'role="img" aria-label="' + esc(flag.name) + '"'));
    tick();
  }
  function tick() {
    var H = $('#heroH'), M = $('#heroM'), S = $('#heroS'); if (!H) return;
    var d = new Date(), s = d.getSeconds() + d.getMilliseconds() / 1000, m = d.getMinutes() + s / 60, h = (d.getHours() % 12) + m / 60;
    H.setAttribute('transform', 'rotate(' + (h * 30) + ' 200 200)');
    M.setAttribute('transform', 'rotate(' + (m * 6) + ' 200 200)');
    S.setAttribute('transform', 'rotate(' + (s * 6) + ' 200 200)');
  }
  setInterval(tick, 100);

  /* ---------------------------- filters + grid ---------------------- */
  function buildFilters() {
    var cats = ['all', 'women', 'yachtmaster', 'patek', 'omega', 'breitling', 'ap', 'cartier', 'datejust', 'oysterperp', 'daytona', 'daydate', 'submariner', 'skydweller', 'gmt'];
    $('#catTabs').innerHTML = cats.map(function (c) {
      return '<button class="cat-tab' + (F.cat === c ? ' active' : '') + '" role="tab" aria-selected="' + (F.cat === c) + '" data-cat="' + c + '">' + t('cat.' + c) + '</button>';
    }).join('');
    function fill(sel, prefix, vals, cur) {
      $(sel).innerHTML = '<option value="all">' + t('f.all') + '</option>' + vals.map(function (v) { return '<option value="' + esc(v) + '">' + t(prefix + '.' + v) + '</option>'; }).join('');
      $(sel).value = cur;
    }
    fill('#fMov', 'mov', ['Automatic', 'Quartz'], F.mov);
    $('#fSort').innerHTML = ['featured', 'low', 'high'].map(function (v) { return '<option value="' + v + '">' + t('sort.' + v) + '</option>'; }).join('');
    $('#fSort').value = F.sort;
    var pr = $('#fPrice'); pr.min = 0; pr.max = MAXP; pr.step = 1000; pr.value = F.max;
    updatePriceOut();
  }
  function updatePriceOut() { $('#fPriceOut').textContent = (F.max >= MAXP ? '' : '≤ ') + money(F.max); }

  function filtered() {
    var q = F.q.trim().toLowerCase();
    var list = PRODUCTS.filter(function (p) {
      if (F.cat !== 'all' && p.category !== F.cat) return false;
      if (F.mov !== 'all' && p.movement !== F.mov) return false;
      if (p.price > F.max) return false;
      if (q && (p.name + ' ' + p.brand + ' ' + p.ref + ' ' + p.collection + ' ' + p.material + ' ' + p.movement).toLowerCase().indexOf(q) < 0) return false;
      return true;
    });
    if (F.sort === 'low') list.sort(function (a, b) { return a.price - b.price; });
    else if (F.sort === 'high') list.sort(function (a, b) { return b.price - a.price; });
    else list.sort(function (a, b) { return (a.featured || 99) - (b.featured || 99); });
    return list;
  }

  function renderGrid() {
    var list = filtered();
    $('#resCount').textContent = list.length === 1 ? t('res.one') : t('res.count', { n: list.length });
    if (!list.length) { $('#grid').innerHTML = '<div class="empty">' + t('res.none') + '</div>'; return; }
    $('#grid').innerHTML = list.map(function (p, i) {
      var on = state.wish.indexOf(p.id) > -1;
      return '<article class="card" data-id="' + p.id + '" style="animation-delay:' + Math.min(i, 8) * 60 + 'ms">' +
        '<span class="tag">' + esc(t('tag.' + p.tag)) + '</span>' +
        '<button class="wish-btn' + (on ? ' on' : '') + '" data-act="wish" aria-label="' + t('btn.wish') + '" aria-pressed="' + on + '"><svg viewBox="0 0 24 24"><path d="M12 20.5s-7.5-4.6-9.2-9.3C1.7 8 3.4 5 6.6 5c2 0 3.500 1.200 5.400 3.200C13.900 6.200 15.400 5 17.400 5c3.200 0 4.900 3 3.800 6.200-1.700 4.700-9.200 9.300-9.200 9.300z"/></svg></button>' +
        '<div class="card-img" data-act="open" data-quick="' + esc(t('btn.quick')) + '" tabindex="0" role="button" aria-label="' + esc(p.name) + '">' + imgTag(p, p.images[0], p.name) + '</div>' +
        '<div class="card-body"><span class="coll">' + esc(p.collection) + '</span><h3>' + esc(p.name) + '</h3>' +
        '<span class="mini">' + p.diameter + ' mm · ' + esc(tr('mov', p.movement)) + ' · ' + esc(p.material) + '</span>' +
        '<div class="card-foot"><span class="price">' + money(p.price) + '</span><button class="btn-sm" data-act="add">' + t('btn.add') + '</button></div></div></article>';
    }).join('');
  }

  /* ------------------------------ cart ------------------------------ */
  function totals() {
    var sub = 0, count = 0;
    state.cart.forEach(function (c) { var p = byId(c.id); if (p) { sub += p.price * c.qty; count += c.qty; } });
    var pct = state.promo ? CFG.promoCodes[state.promo] || 0 : 0;
    var disc = r2(sub * pct / 100), taxable = sub - disc, vat = r2(taxable * CFG.vatRate);
    return { sub: sub, count: count, pct: pct, disc: disc, vat: vat, total: r2(taxable + vat) };
  }
  function addToCart(id, qty) {
    var l = state.cart.filter(function (c) { return c.id === id; })[0];
    if (l) l.qty = Math.min(5, l.qty + (qty || 1)); else state.cart.push({ id: id, qty: qty || 1 });
    persist(); renderBadges(); renderCart(); toast(t('toast.added'));
  }
  function renderBadges() {
    var c = totals().count, w = state.wish.length;
    var bc = $('#bagCount'), wc = $('#wishCount');
    bc.textContent = c; bc.classList.toggle('on', c > 0); wc.textContent = w; wc.classList.toggle('on', w > 0);
  }
  var iconBag = '<svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>';
  var iconHeart = '<svg viewBox="0 0 24 24"><path d="M12 20.5s-7.5-4.6-9.2-9.3C1.7 8 3.4 5 6.6 5c2 0 3.5 1.2 5.4 3.2C13.9 6.2 15.4 5 17.4 5c3.2 0 4.9 3 3.8 6.2-1.7 4.7-9.2 9.3-9.2 9.3z"/></svg>';

  function renderCart() {
    var body = $('#bagBody'), foot = $('#bagFoot');
    if (!state.cart.length) {
      body.innerHTML = '<div class="empty-state">' + iconBag + '<p>' + t('bag.empty') + '</p><br><a href="#collection" class="btn btn-ghost" data-close>' + t('bag.browse') + '</a></div>';
      foot.style.display = 'none'; return;
    }
    foot.style.display = '';
    body.innerHTML = state.cart.map(function (c) {
      var p = byId(c.id);
      return '<div class="line-item" data-id="' + p.id + '"><div class="th">' + imgTag(p, p.images[0], p.name) + '</div><div>' +
        '<h4>' + esc(p.name) + '</h4><div class="mini">' + esc(p.ref) + '</div>' +
        '<div class="li-row"><div class="qty"><button data-act="dec" aria-label="−">−</button><span>' + c.qty + '</span><button data-act="inc" aria-label="+">+</button></div>' +
        '<b class="price" style="font-size:18px">' + money(p.price * c.qty) + '</b></div>' +
        '<div class="li-row"><button class="rm" data-act="rm">' + t('bag.remove') + '</button></div></div></div>';
    }).join('');
    var T = totals(), promoMsg = '';
    if (state.promo) promoMsg = '<div class="promo-msg ok">' + t('promo.ok', { c: esc(state.promo), p: T.pct }) + ' · <button class="rm" data-act="promo-rm">' + t('promo.remove') + '</button></div>';
    foot.innerHTML =
      '<div class="promo"><input id="promoIn" type="text" placeholder="' + esc(t('promo.ph')) + '" autocomplete="off" aria-label="' + esc(t('promo.ph')) + '"><button class="btn-sm" data-act="promo">' + t('promo.apply') + '</button></div>' +
      '<div class="promo-msg" id="promoMsg"></div>' + promoMsg +
      '<div class="sum-row"><span>' + t('bag.sub') + '</span><b>' + money(T.sub, 1) + '</b></div>' +
      (T.disc ? '<div class="sum-row"><span>' + t('bag.disc') + '</span><b>− ' + money(T.disc, 1) + '</b></div>' : '') +
      '<div class="sum-row"><span>' + t('bag.vat') + '</span><b>' + money(T.vat, 1) + '</b></div>' +
      '<div class="sum-row"><span>' + t('bag.ship') + '</span><b class="free">' + t('bag.free') + '</b></div>' +
      '<div class="sum-row total"><span>' + t('bag.total') + '</span><b>' + money(T.total, 1) + '</b></div>' +
      '<button class="btn btn-gold btn-block" data-act="checkout" style="margin-top:16px">' + t('bag.checkout') + '</button>' +
      '<div class="inst">' + t('inst', { a: '<b>' + money(T.total / 4, 1) + '</b>' }) + '</div>';
  }

  /* ---------------------------- wishlist ---------------------------- */
  function toggleWish(id) {
    var i = state.wish.indexOf(id);
    if (i > -1) { state.wish.splice(i, 1); toast(t('toast.unwish')); } else { state.wish.push(id); toast(t('toast.wish')); }
    persist(); renderBadges(); renderWish(); renderGrid();
    var pb = $('#productBody [data-act="wish"]');
    if (pb) { var on = state.wish.indexOf(id) > -1; pb.classList.toggle('on-w', on); pb.textContent = on ? t('btn.saved') : t('btn.wish'); }
  }
  function renderWish() {
    var b = $('#wishBody');
    if (!state.wish.length) { b.innerHTML = '<div class="empty-state">' + iconHeart + '<p>' + t('wish.empty') + '</p></div>'; return; }
    b.innerHTML = state.wish.map(function (id) {
      var p = byId(id);
      return '<div class="line-item" data-id="' + id + '"><div class="th" style="cursor:pointer" data-act="open">' + imgTag(p, p.images[0], p.name) + '</div><div>' +
        '<h4>' + esc(p.name) + '</h4><div class="mini">' + esc(p.ref) + '</div>' +
        '<div class="li-row"><b class="price" style="font-size:18px">' + money(p.price) + '</b></div>' +
        '<div class="li-row"><button class="btn-sm" data-act="wish-bag">' + t('btn.tobag') + '</button><button class="rm" data-act="wish-rm">' + t('bag.remove') + '</button></div></div></div>';
    }).join('');
  }

  /* ------------------------- product modal -------------------------- */
  var currentProduct = null;
  function openProduct(id) {
    var p = byId(id); if (!p) return; currentProduct = p;
    var g = gallery(p), on = state.wish.indexOf(id) > -1;
    var specs = [
      ['spec.ref', p.ref], ['spec.caliber', p.caliber], ['spec.mov', tr('mov', p.movement)], ['spec.mat', p.material],
      ['spec.diameter', p.diameter + ' mm'], ['spec.water', p.waterRes], ['spec.reserve', p.reserve], ['spec.bracelet', p.bracelet],
      ['spec.box', p.box]
    ].map(function (r) { return '<div><dt>' + t(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>'; }).join('');
    $('#productBody').innerHTML =
      '<div class="pm"><div class="pm-gal"><div class="pm-main" id="pmMain">' + imgTag(p, g[0].src, p.name, g[0].view) + '</div>' +
      (g.length < 2 ? '' : '<div class="thumbs">') + g.map(function (x, i) { return '<button class="' + (i ? '' : 'on') + '" data-i="' + i + '" aria-label="' + esc(x.label) + '">' + imgTag(p, x.src, x.label, x.view) + '</button>'; }).join('') + (g.length < 2 ? '' : '</div>') + '</div>' +
      '<div class="pm-info"><span class="eyebrow">' + esc(p.collection) + ' · ' + esc(t('tag.' + p.tag)) + '</span><h2>' + esc(p.name) + '</h2>' +
      '<div class="pm-price">' + money(p.price) + '<small>' + t('vat.note') + '</small></div>' +
      '<p class="desc">' + esc(p.description) + '</p><dl class="specs">' + specs + '</dl>' +
      '<div class="pm-actions"><button class="btn btn-gold" data-act="add">' + t('btn.add') + '</button>' +
      '<button class="btn btn-ghost" data-act="wish" aria-label="' + t('btn.wish') + '">' + (on ? t('btn.saved') : t('btn.wish')) + '</button></div>' +
      '<a class="btn btn-wa" target="_blank" rel="noopener" href="' + waLink(t('wa.inquire', { name: p.name, ref: p.ref })) + '">' + WA_ICO + '<span>' + t('btn.inquire') + '</span></a>' +
      '<div class="inst" style="text-align:start">' + t('inst', { a: '<b>' + money(p.price * 1.05 / 4, 1) + '</b>' }) + '</div></div></div>';
    var main = $('#pmMain');
    main.addEventListener('mousemove', function (e) {
      var r = main.getBoundingClientRect(); main.style.setProperty('--zx', ((e.clientX - r.left) / r.width * 100) + '%'); main.style.setProperty('--zy', ((e.clientY - r.top) / r.height * 100) + '%');
    });
    openPanel('#productModal');
  }

  /* ----------------------------- checkout --------------------------- */
  var EMIRATE_KEYS = COUNTRIES.map(function (c) { return c[0]; });
  var form = { name: '', mobile: '', emirate: '', area: '', building: '', pay: 'cod' };
  function openCheckout() {
    if (!state.cart.length) return;
    closeAll(true); renderCheckout(); openPanel('#checkoutModal');
  }
  function renderCheckout() {
    var T = totals(), cod = !CFG.codMaxAed || T.total <= CFG.codMaxAed;
    if (!cod && form.pay === 'cod') form.pay = 'card';
    var items = state.cart.map(function (c) {
      var p = byId(c.id); return '<div class="mini-line"><span>' + esc(p.name) + ' × ' + c.qty + '</span><b>' + money(p.price * c.qty, 1) + '</b></div>';
    }).join('');
    function pay(v, ti, de, dis) {
      return '<label class="pay"><input type="radio" name="pay" value="' + v + '"' + (form.pay === v ? ' checked' : '') + (dis ? ' disabled' : '') + '><span>' + ti + '<small>' + de + '</small></span></label>';
    }
    $('#checkoutBody').innerHTML = '<div class="co"><form class="co-form" id="coForm" novalidate>' +
      '<span class="eyebrow">' + t('co.sub') + '</span><h2>' + t('co.title') + '</h2>' +
      '<div class="sub-h">' + t('co.delivery') + '</div>' +
      '<div class="f2"><div class="field" data-f="name"><label for="cName">' + t('co.name') + '</label><input id="cName" type="text" autocomplete="name" value="' + esc(form.name) + '"><div class="msg">' + t('err.name') + '</div></div>' +
      '<div class="field" data-f="mobile"><label for="cMob">' + t('co.mobile') + '</label><input id="cMob" type="tel" inputmode="tel" dir="ltr" autocomplete="tel" placeholder="+971 5X XXX XXXX" value="' + esc(form.mobile) + '"><div class="msg">' + t('err.mobile') + '</div></div></div>' +
      '<div class="f2"><div class="field" data-f="emirate"><label for="cEm">' + t('co.emirate') + '</label><select id="cEm"><option value="">' + t('co.select') + '</option>' +
      EMIRATE_KEYS.map(function (k) { return '<option value="' + k + '"' + (form.emirate === k ? ' selected' : '') + '>' + EMIRATES[state.lang][k] + '</option>'; }).join('') + '</select><div class="msg">' + t('err.emirate') + '</div></div>' +
      '<div class="field" data-f="area"><label for="cArea">' + t('co.area') + '</label><input id="cArea" type="text" autocomplete="address-level2" value="' + esc(form.area) + '"><div class="msg">' + t('err.area') + '</div></div></div>' +
      '<div class="field" data-f="building"><label for="cBld">' + t('co.building') + '</label><input id="cBld" type="text" autocomplete="address-line1" value="' + esc(form.building) + '"><div class="msg">' + t('err.building') + '</div></div>' +
      '<div class="deliv" id="deliv"><svg viewBox="0 0 24 24"><path d="M2 7h11v9H2zM13 10h5l3 3v3h-8z"/><circle cx="6.500" cy="17.500" r="1.800"/><circle cx="17" cy="17.500" r="1.800"/></svg><span id="delivTxt"></span></div>' +
      '<div class="sub-h">' + t('co.payment') + '</div><div class="pays">' +
      pay('cod', t('pay.cod'), cod ? t('pay.cod.d') : t('pay.cod.na', { a: money(CFG.codMaxAed) }), !cod) + pay('card', t('pay.card'), t('pay.card.d')) + pay('apple', t('pay.apple'), t('pay.apple.d')) +
      pay('tabby', t('pay.tabby'), t('pay.tabby.d', { a: money(T.total / 4, 1) })) + '</div>' +
      '<div class="card-fields' + (form.pay === 'card' ? ' on' : '') + '" id="cardFields"><div class="field" data-f="card"><label for="cNum">' + t('card.number') + '</label><input id="cNum" type="text" inputmode="numeric" dir="ltr" autocomplete="cc-number" placeholder="0000 0000 0000 0000" maxlength="23"></div>' +
      '<div class="f2"><div class="field" data-f="exp"><label for="cExp">' + t('card.exp') + '</label><input id="cExp" type="text" inputmode="numeric" dir="ltr" autocomplete="cc-exp" placeholder="MM/YY" maxlength="5"></div>' +
      '<div class="field" data-f="cvv"><label for="cCvv">' + t('card.cvv') + '</label><input id="cCvv" type="text" inputmode="numeric" dir="ltr" autocomplete="cc-csc" placeholder="•••" maxlength="4"></div></div><div class="field err" data-f="cardmsg" style="margin-top:6px"><div class="msg" id="cardMsg">' + t('err.card') + '</div></div></div>' +
      '<button type="submit" class="btn btn-gold btn-block" style="margin-top:26px">' + t('co.place') + ' · ' + money(T.total, 1) + '</button>' +
      '<p class="demo-note">' + t('co.demo') + '</p></form>' +
      '<aside class="co-sum"><h2>' + t('co.summary') + '</h2><div style="margin-top:14px">' + items +
      '<div class="mini-line"><span>' + t('bag.sub') + '</span><b>' + money(T.sub, 1) + '</b></div>' +
      (T.disc ? '<div class="mini-line"><span>' + t('bag.disc') + ' (' + esc(state.promo) + ')</span><b>− ' + money(T.disc, 1) + '</b></div>' : '') +
      '<div class="mini-line"><span>' + t('bag.vat') + '</span><b>' + money(T.vat, 1) + '</b></div>' +
      '<div class="mini-line"><span>' + t('bag.ship') + '</span><b class="free">' + t('bag.free') + '</b></div>' +
      '<div class="sum-row total"><span>' + t('bag.total') + '</span><b>' + money(T.total, 1) + '</b></div></div></aside></div>';
    $('#cardMsg').parentNode.classList.remove('err'); updateDelivery();
  }
  function deliveryInfo(em) {
    if (!em) return '';
    return em === 'AE' ? t('deliv.dubai') : t('deliv.other');
  }
  function updateDelivery() {
    var em = ($('#cEm') || {}).value, box = $('#deliv'); if (!box) return;
    box.classList.toggle('on', !!em); $('#delivTxt').textContent = deliveryInfo(em);
  }
  function normMobile(v) {
    var d = v.replace(/[\s\-()]/g, '');
    var m = /^(?:\+|00)(\d{7,15})$/.exec(d);
    return m ? '+' + m[1] : null;
  }
  function fmtMobile(n) { return n; }
  function luhn(n) { var s = 0, alt = false; for (var i = n.length - 1; i >= 0; i--) { var d = +n[i]; if (alt) { d *= 2; if (d > 9) d -= 9; } s += d; alt = !alt; } return s % 10 === 0; }

  function submitCheckout(e) {
    e.preventDefault();
    form.name = $('#cName').value.trim(); form.mobile = $('#cMob').value.trim(); form.emirate = $('#cEm').value;
    form.area = $('#cArea').value.trim(); form.building = $('#cBld').value.trim();
    var chk = $('input[name="pay"]:checked'); form.pay = chk ? chk.value : 'card';
    var ok = true, mob = normMobile(form.mobile), first = null;
    function flag(f, bad) { var el = $('[data-f="' + f + '"]'); el.classList.toggle('err', bad); if (bad) { ok = false; if (!first) first = el; } }
    flag('name', form.name.length < 3); flag('mobile', !mob); flag('emirate', !form.emirate); flag('area', form.area.length < 2); flag('building', form.building.length < 1);
    var last4 = '';
    if (form.pay === 'card') {
      var num = $('#cNum').value.replace(/\D/g, ''), exp = $('#cExp').value, cvv = $('#cCvv').value.replace(/\D/g, '');
      var em = /^(0[1-9]|1[0-2])\/(\d{2})$/.exec(exp), expOk = false;
      if (em) { var now = new Date(), y = 2000 + +em[2], mo = +em[1]; expOk = y > now.getFullYear() || (y === now.getFullYear() && mo >= now.getMonth() + 1); }
      var cardOk = num.length >= 13 && num.length <= 19 && luhn(num) && expOk && cvv.length >= 3;
      $('#cardMsg').parentNode.classList.toggle('err', !cardOk); if (!cardOk) { ok = false; if (!first) first = $('#cNum'); }
      last4 = num.slice(-4);
    }
    if (!ok) { if (first && first.scrollIntoView) first.scrollIntoView({ block: 'center', behavior: 'smooth' }); return; }
    var T = totals(), now2 = new Date();
    var order = {
      no: 'AUR-' + now2.getFullYear().toString().slice(2) + ('0' + (now2.getMonth() + 1)).slice(-2) + ('0' + now2.getDate()).slice(-2) + '-' + Math.floor(1000 + Math.random() * 9000),
      date: now2.toLocaleString(state.lang === 'ar' ? 'ar-AE' : 'en-GB', { dateStyle: 'medium', timeStyle: 'short' }),
      items: state.cart.map(function (c) { var p = byId(c.id); return { name: p.name, ref: p.ref, qty: c.qty, line: p.price * c.qty }; }),
      T: T, name: form.name, mobile: fmtMobile(mob), emirate: form.emirate,
      address: form.building + ', ' + form.area + ', ' + EMIRATES[state.lang][form.emirate],
      pay: form.pay, last4: last4, delivery: deliveryInfo(form.emirate)
    };
    state.cart = []; state.promo = ''; persist(); renderBadges(); renderCart();
    form = { name: '', mobile: '', emirate: '', area: '', building: '', pay: 'cod' };
    showReceipt(order);
  }
  var lastOrder = null;
  function payLabel(o) {
    if (o.pay === 'card') return t('rc.paid.card', { l: '•••• ' + o.last4 });
    if (o.pay === 'tabby') return t('rc.paid.tabby', { a: money(o.T.total / 4, 1) });
    return t('rc.paid.' + o.pay);
  }
  function showReceipt(o) {
    lastOrder = o; closeAll(true);
    var rows = o.items.map(function (i) { return '<div class="mini-line"><span>' + esc(i.name) + ' <small>(' + esc(i.ref) + ')</small> × ' + i.qty + '</span><b>' + money(i.line, 1) + '</b></div>'; }).join('');
    $('#receiptBody').innerHTML = '<div class="receipt"><div class="rc-head"><div class="rc-seal"><svg viewBox="0 0 24 24"><path d="M5 12.500l4.500 4.500L19 7.500"/></svg></div>' +
      '<span class="eyebrow">MAISON AURELIA</span><h2>' + t('rc.title') + '</h2><p>' + t('rc.thanks', { n: esc(o.name) }) + '</p></div>' +
      '<div class="rc-meta"><div><small>' + t('rc.order') + '</small>' + esc(o.no) + '</div><div><small>' + t('rc.date') + '</small>' + esc(o.date) + '</div>' +
      '<div><small>' + t('rc.address') + '</small>' + esc(o.address) + '<br><span dir="ltr">' + esc(o.mobile) + '</span></div><div><small>' + t('rc.pay') + '</small>' + esc(payLabel(o)) + '</div></div>' + rows +
      '<div class="mini-line"><span>' + t('bag.sub') + '</span><b>' + money(o.T.sub, 1) + '</b></div>' +
      (o.T.disc ? '<div class="mini-line"><span>' + t('bag.disc') + '</span><b>− ' + money(o.T.disc, 1) + '</b></div>' : '') +
      '<div class="mini-line"><span>' + t('bag.vat') + '</span><b>' + money(o.T.vat, 1) + '</b></div>' +
      '<div class="mini-line"><span>' + t('bag.ship') + '</span><b class="free">' + t('bag.free') + '</b></div>' +
      '<div class="sum-row total"><span>' + t('bag.total') + '</span><b>' + money(o.T.total, 1) + '</b></div>' +
      '<div class="deliv on" style="margin-top:18px"><svg viewBox="0 0 24 24"><path d="M2 7h11v9H2zM13 10h5l3 3v3h-8z"/><circle cx="6.500" cy="17.500" r="1.800"/><circle cx="17" cy="17.500" r="1.800"/></svg><span><b>' + t('rc.deliver') + ':</b> ' + esc(o.delivery) + '</span></div>' +
      '<div class="rc-actions"><button class="btn btn-ghost" data-act="copy-rc">' + t('rc.copy') + '</button><button class="btn btn-gold" data-close>' + t('rc.continue') + '</button></div></div>';
    openPanel('#receiptModal');
  }
  function copyReceipt() {
    var o = lastOrder; if (!o) return;
    var txt = ['MAISON AURELIA', o.no + ' — ' + o.date, ''].concat(o.items.map(function (i) { return i.name + ' (' + i.ref + ') x' + i.qty + '  ' + money(i.line, 1); }))
      .concat(['', t('bag.sub') + ': ' + money(o.T.sub, 1), o.T.disc ? t('bag.disc') + ': -' + money(o.T.disc, 1) : null, t('bag.vat') + ': ' + money(o.T.vat, 1), t('bag.ship') + ': ' + t('bag.free'),
        t('bag.total') + ': ' + money(o.T.total, 1), '', t('rc.address') + ': ' + o.address, t('rc.deliver') + ': ' + o.delivery, t('rc.pay') + ': ' + payLabel(o)]).filter(function (x) { return x !== null; }).join('\n');
    try { navigator.clipboard.writeText(txt).then(function () { toast(t('rc.copied')); }, function () { toast(t('rc.copyfail')); }); } catch (e) { toast(t('rc.copyfail')); }
  }

  /* ------------------------ panels / toast / focus ------------------ */
  var lastFocus = null;
  function openPanel(sel) {
    closeAll(true);
    var el = $(sel); lastFocus = document.activeElement;
    el.classList.add('open'); el.setAttribute('aria-hidden', 'false'); $('#scrim').classList.add('on'); document.body.classList.add('lock');
    var f = $('button, a, input, select', el); if (f && f.focus) setTimeout(function () { try { el.querySelector('.x, [data-close], input, select, button').focus({ preventScroll: true }); } catch (e) { /* ignore */ } }, 80);
  }
  function closeAll(keep) {
    $$('.drawer.open, .modal.open').forEach(function (el) { el.classList.remove('open'); el.setAttribute('aria-hidden', 'true'); });
    if (!keep) { $('#scrim').classList.remove('on'); document.body.classList.remove('lock'); if (lastFocus && lastFocus.focus) try { lastFocus.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
  }
  var toastT;
  function toast(msg) { var el = $('#toast'); el.textContent = msg; el.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(function () { el.classList.remove('on'); }, 2200); }

  /* --------------------------- global render ------------------------ */
  function renderAll() {
    applyStatic(); $('#filterToggleTxt').textContent = t(mqM.matches || $('#shop').classList.contains('no-filters') ? 'f.show' : 'f.hide'); mountHero(); buildFilters(); renderGrid(); renderCart(); renderWish(); renderBadges();
  }

  /* ------------------------------ events ---------------------------- */
  document.addEventListener('click', function (e) {
    var tg = e.target;
    if (tg.closest('[data-close]') || tg === $('#scrim')) { closeAll(); return; }
    var modal = tg.closest('.modal'); if (modal && tg === modal) { closeAll(); return; }
    var cat = tg.closest('[data-cat]');
    if (cat) { F.cat = cat.getAttribute('data-cat'); buildFilters(); renderGrid(); return; }
    var act = tg.closest('[data-act]'); if (!act) return;
    var a = act.getAttribute('data-act'), row = act.closest('[data-id]'), id = row ? row.getAttribute('data-id') : (currentProduct && act.closest('#productBody') ? currentProduct.id : null);
    if (act.closest('#productBody') && currentProduct) id = currentProduct.id;
    switch (a) {
      case 'open': openProduct(id); break;
      case 'add': addToCart(id); break;
      case 'wish': toggleWish(id); break;
      case 'inc': var l = state.cart.filter(function (c) { return c.id === id; })[0]; if (l) { l.qty = Math.min(5, l.qty + 1); } persist(); renderBadges(); renderCart(); break;
      case 'dec': var l2 = state.cart.filter(function (c) { return c.id === id; })[0]; if (l2) { l2.qty--; if (l2.qty < 1) state.cart = state.cart.filter(function (c) { return c.id !== id; }); } persist(); renderBadges(); renderCart(); break;
      case 'rm': state.cart = state.cart.filter(function (c) { return c.id !== id; }); persist(); renderBadges(); renderCart(); break;
      case 'wish-rm': toggleWish(id); break;
      case 'wish-bag': addToCart(id); state.wish = state.wish.filter(function (w) { return w !== id; }); persist(); renderBadges(); renderWish(); renderGrid(); break;
      case 'promo':
        var code = ($('#promoIn').value || '').trim().toUpperCase(), msg = $('#promoMsg');
        if (CFG.promoCodes[code]) { state.promo = code; persist(); renderCart(); } else { msg.className = 'promo-msg bad'; msg.textContent = t('promo.bad'); }
        break;
      case 'promo-rm': state.promo = ''; persist(); renderCart(); break;
      case 'checkout': openCheckout(); break;
      case 'copy-rc': copyReceipt(); break;
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll();
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('.card-img')) { e.preventDefault(); openProduct(e.target.closest('[data-id]').getAttribute('data-id')); }
    if (e.key === 'Enter' && e.target.id === 'promoIn') { e.preventDefault(); var b = $('[data-act="promo"]'); if (b) b.click(); }
  });
  document.addEventListener('submit', function (e) { if (e.target.id === 'coForm') submitCheckout(e); });
  document.addEventListener('change', function (e) {
    if (e.target.id === 'cEm') updateDelivery();
    if (e.target.name === 'pay') { form.pay = e.target.value; $('#cardFields').classList.toggle('on', form.pay === 'card'); }
  });
  document.addEventListener('input', function (e) {
    var el = e.target;
    if (el.id === 'cNum') { var v = el.value.replace(/\D/g, '').slice(0, 19); el.value = v.replace(/(.{4})/g, '$1 ').trim(); }
    if (el.id === 'cExp') { var d = el.value.replace(/\D/g, '').slice(0, 4); el.value = d.length > 2 ? d.slice(0, 2) + '/' + d.slice(2) : d; }
    if (el.id === 'cCvv') el.value = el.value.replace(/\D/g, '').slice(0, 4);
    if (el.closest && el.closest('.field.err') && el.closest('[data-f]') && ['cNum', 'cExp', 'cCvv'].indexOf(el.id) < 0) el.closest('.field').classList.remove('err');
  });
  document.addEventListener('click', function (e) {
    var th = e.target.closest('.thumbs button'); if (!th || !currentProduct) return;
    var g = gallery(currentProduct), i = +th.getAttribute('data-i'), main = $('#pmMain');
    main.innerHTML = imgTag(currentProduct, g[i].src, currentProduct.name, g[i].view);
    $$('.thumbs button').forEach(function (b) { b.classList.toggle('on', b === th); });
  });

  $('#bagBtn').addEventListener('click', function () { renderCart(); openPanel('#bagDrawer'); });
  $('#wishBtn').addEventListener('click', function () { renderWish(); openPanel('#wishDrawer'); });
  $('#currencySel').addEventListener('change', function (e) { state.currency = e.target.value; persist(); updatePriceOut(); renderGrid(); renderCart(); renderWish(); if ($('#productModal.open') && currentProduct) openProduct(currentProduct.id); });
  $('#langBtn').addEventListener('click', function () { state.lang = state.lang === 'en' ? 'ar' : 'en'; persist(); closeAll(); renderAll(); });
  $('#themeBtn').addEventListener('click', function () { state.theme = state.theme === 'dark' ? 'light' : 'dark'; persist(); document.documentElement.setAttribute('data-theme', state.theme); });
  $('#fMov').addEventListener('change', function (e) { F.mov = e.target.value; renderGrid(); });
  $('#fSort').addEventListener('change', function (e) { F.sort = e.target.value; renderGrid(); });
  $('#fPrice').addEventListener('input', function (e) { F.max = +e.target.value; updatePriceOut(); renderGrid(); });
  $('#fSearch').addEventListener('input', function (e) { F.q = e.target.value; renderGrid(); });
  $('#resetBtn').addEventListener('click', function () { F = { cat: 'all', mov: 'all', max: MAXP, q: '', sort: 'featured' }; $('#fSearch').value = ''; buildFilters(); renderGrid(); });

  var mqM = window.matchMedia('(max-width: 900px)');
  function setFilters(open) {
    var shop = $('#shop'), isM = mqM.matches;
    if (isM) { $('#filters').classList.toggle('open', open); $('#fScrim').classList.toggle('on', open); document.body.classList.toggle('lock', open); }
    else shop.classList.toggle('no-filters', !open);
    $('#filterToggle').setAttribute('aria-expanded', open);
    $('#filterToggleTxt').textContent = open && !isM ? t('f.hide') : t('f.show');
  }
  function filtersOpen() { return mqM.matches ? $('#filters').classList.contains('open') : !$('#shop').classList.contains('no-filters'); }
  $('#filterToggle').addEventListener('click', function () { setFilters(!filtersOpen()); });
  $('#filterClose').addEventListener('click', function () { setFilters(false); });
  $('#fScrim').addEventListener('click', function () { setFilters(false); });
  mqM.addEventListener && mqM.addEventListener('change', function () { $('#filters').classList.remove('open'); $('#fScrim').classList.remove('on'); document.body.classList.remove('lock'); setFilters(!mqM.matches); });
  window.addEventListener('scroll', function () { $('#header').classList.toggle('scrolled', window.scrollY > 30); }, { passive: true });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { threshold: .12 });
    $$('.reveal').forEach(function (el) { io.observe(el); });
  } else { $$('.reveal').forEach(function (el) { el.classList.add('in'); }); }

  renderAll(); setFilters(!mqM.matches);
})();
