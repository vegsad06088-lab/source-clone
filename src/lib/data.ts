export const apartments = [
  {
    id: "twin-harmony-suite",
    name: "Twin Harmony Suite",
    image: "/images/twin-harmony-suite/652dafad00056b0caa524030_ths.avif",
    heroImage: "/images/twin-harmony-suite/652db036bdd8b74dadc0fd17_61681681.avif",
    descriptionKey: "apartments.twin_harmony_suite.description",
    longDescriptionKey: "apartments.twin_harmony_suite.long_description",
    sectionTitleKey: "apartments.twin_harmony_suite.section_title",
    persons: "1-2",
    bedsKey: "apartments.twin_harmony_suite.beds",
    roomsKey: "apartments.twin_harmony_suite.rooms",
    size: "35m²",
    price: 50,
    gallery: Object.values(
      import.meta.glob("/src/assets/images/twin-harmony-suite/*.{jpg,jpeg,png,avif,webp,gif}", {
        eager: true,
        import: "default",
      })
    ) as string[],
  },
  {
    id: "duo-deluxe-studio",
    name: "Duo Deluxe Studio",
    image: "/images/duo-deluxe-studio/652d9a94a36b9a6aafdf3b93_sds1.avif",
    heroImage: "/images/duo-deluxe-studio/652dabc60259a4fa49f46718_616164616.avif",
    descriptionKey: "apartments.duo_deluxe_studio.description",
    longDescriptionKey: "apartments.duo_deluxe_studio.long_description",
    sectionTitleKey: "apartments.duo_deluxe_studio.section_title",
    persons: "1-2",
    bedsKey: "apartments.duo_deluxe_studio.beds",
    roomsKey: "apartments.duo_deluxe_studio.rooms",
    size: "35m²",
    price: 50,
    gallery: Object.values(
      import.meta.glob("/src/assets/images/duo-deluxe-studio/*.{jpg,jpeg,png,avif,webp,gif}", {
        eager: true,
        import: "default",
      })
    ) as string[],
  },
  {
    id: "cosy-couple-nest",
    name: "Cosy Couple Nest",
    image: "/images/cosy-couple-nest/65edec3c69a525858218e635_ccn_kl.avif",
    heroImage: "/images/cosy-couple-nest/65edeb66502ff65f274596f1_ccn.avif",
    descriptionKey: "apartments.cosy_couple_nest.description",
    longDescriptionKey: "apartments.cosy_couple_nest.long_description",
    sectionTitleKey: "apartments.cosy_couple_nest.section_title",
    persons: "1-2",
    bedsKey: "apartments.cosy_couple_nest.beds",
    roomsKey: "apartments.cosy_couple_nest.rooms",
    size: "35m²",
    price: 55,
    gallery: Object.values(
      import.meta.glob("/src/assets/images/cosy-couple-nest/*.{jpg,jpeg,png,avif,webp,gif}", {
        eager: true,
        import: "default",
      })
    ) as string[],
  },
  {
    id: "trio-harmony-suite",
    name: "Trio Harmony Suite",
    image: "/images/trio-harmony-suite/65caa473a481dedf03e5a9cb_35135135.avif",
    heroImage: "/images/trio-harmony-suite/652db036bdd8b74dadc0fd17_61681681.avif",
    descriptionKey: "apartments.trio_harmony_suite.description",
    longDescriptionKey: "apartments.trio_harmony_suite.long_description",
    sectionTitleKey: "apartments.trio_harmony_suite.section_title",
    persons: "1-3",
    bedsKey: "apartments.trio_harmony_suite.beds",
    roomsKey: "apartments.trio_harmony_suite.rooms",
    size: "35m²",
    price: 50,
    gallery: Object.values(
      import.meta.glob("/src/assets/images/trio-harmony-suite/*.{jpg,jpeg,png,avif,webp,gif}", {
        eager: true,
        import: "default",
      })
    ) as string[],
  },
];

export const amenities = [
  { icon: "🔑", labelKey: "amenities.self_check_in" },
  { icon: "♿", labelKey: "amenities.accessible" },
  { icon: "🚭", labelKey: "amenities.non_smoking" },
  { icon: "📶", labelKey: "amenities.wifi_250_mbit" },
  { icon: "📺", labelKey: "amenities.tv" },
  { icon: "💨", labelKey: "amenities.hair_dryer" },
  { icon: "🚿", labelKey: "amenities.shower" },
  { icon: "🧴", labelKey: "amenities.soft_towels" },
  { icon: "❄️", labelKey: "amenities.refrigerator" },
  { icon: "📡", labelKey: "amenities.microwave" },
  { icon: "🍳", labelKey: "amenities.stove" },
  { icon: "☕", labelKey: "amenities.kettle" },
];

export const instructions = [
  {
    id: "check-in-anleitung",
    titleKey: "instructions.check_in_guide.title",
    descriptionKey: "instructions.check_in_guide.description",
    image: "/images/66dc570e930b82790d37d7c0_rfwergfwer.avif",
    category: "apartments",
    pdf: {
      de: "/pdfs/66dc4099e1e99fbb3902dd4d_CHECK-IN-DEUTSCH.pdf",
      en: "/pdfs/66dc409d875e1dd1152e97fc_CHECK-IN-ENGLISH.pdf",
    },
  },
  {
    id: "bugeleisen-bugelbrett",
    titleKey: "instructions.iron_board.title",
    descriptionKey: "instructions.iron_board.description",
    image: "/images/66dc5787f68d3cfe6e042314_Bgeleisen.avif",
    category: "apartments",
    pdf: {
      de: "/pdfs/66dc5126b1ddeddd0b92998a_BUEGELEISEN-DEUTSCH.pdf",
      en: "/pdfs/66dc512829e15a21ed752974_BUEGELEISEN-ENGLISH.pdf",
    },
  },
  {
    id: "parkmoglichkeiten",
    titleKey: "instructions.parking_options.title",
    descriptionKey: "instructions.parking_options.description",
    image: "/images/66dc58a302429c73b83f2a07_parken.avif",
    category: "location",
  },
  {
    id: "check-out-anleitung",
    titleKey: "instructions.check_out_guide.title",
    descriptionKey: "instructions.check_out_guide.description",
    image: "/images/66dc7e9ee1e99fbb3939a00d_vervrv.avif",
    category: "apartments",
  },
  {
    id: "offentlichen-verkehrsmittel-in-wien",
    titleKey: "instructions.public_transport_vienna.title",
    descriptionKey: "instructions.public_transport_vienna.description",
    image: "/images/66dc827f8058bad06f30403d_evrweve.avif",
    category: "location",
  },
  {
    id: "gepackaufbewahrung-vor-dem-check-in",
    titleKey: "instructions.luggage_before_check_in.title",
    descriptionKey: "instructions.luggage_before_check_in.description",
    image: "/images/66dc8c71079776ced5082229_wervrv.avif",
    category: "apartments",
  },
  {
    id: "gepackaufbewahrung-nach-dem-check-out",
    titleKey: "instructions.luggage_after_check_out.title",
    descriptionKey: "instructions.luggage_after_check_out.description",
    image: "/images/66dc8de4f5bef41881263a8f_wreferfrf.avif",
    category: "apartments",
  },
  {
    id: "anleitung-zur-steuerung-der-heizung",
    titleKey: "instructions.heating_control.title",
    descriptionKey: "instructions.heating_control.description",
    image: "/images/66dc932976d9846673c23606_bwtrbwtb.avif",
    category: "apartments",
    pdf: {
      de: "/pdfs/66dc93638058bad06f401194_Heizung_Deutsch.pdf",
      en: "/pdfs/66dc9369a0bd34b5418fc5d4_Heizung_English.pdf",
    },
  },
  {
    id: "anleitung-tv",
    titleKey: "instructions.tv_guide.title",
    descriptionKey: "instructions.tv_guide.description",
    image: "/images/67a202309177d701325a5536_tv_2.avif",
    category: "apartments",
    pdf: {
      de: "/pdfs/67a1fc442fb5da9e90ee64f7_TV_Deutsch.pdf",
      en: "/pdfs/67a1fc9c6c341944712ef511_TV_English.pdf",
    },
  },
  {
    id: "anleitung-induktionskochplatte",
    titleKey: "instructions.induction_cooktop.title",
    descriptionKey: "instructions.induction_cooktop.description",
    image: "/images/67aaaea25c2914fff36f0c64_uzmzum.avif",
    category: "apartments",
    pdf: {
      de: "/pdfs/67aaaf26f38909589d462bd1_Anleitung_DE.pdf",
    },
  },
  {
    id: "mit-kindern-wien-entdecken",
    titleKey: "instructions.discover_vienna_kids.title",
    descriptionKey: "instructions.discover_vienna_kids.description",
    image: "/images/69aa470974b98e421661b814_L.avif",
    category: "location",
  },
];

export const reviews = [
  { textKey: "reviews.petra.text", quoteKey: "reviews.petra.quote", name: "Petra", locationKey: "reviews.petra.location" },
  { textKey: "reviews.luca.text", quoteKey: "reviews.luca.quote", name: "Luca", locationKey: "reviews.luca.location" },
  { textKey: "reviews.sophie.text", quoteKey: "reviews.sophie.quote", name: "Sophie", locationKey: "reviews.sophie.location" },
  { textKey: "reviews.fam_welter.text", quoteKey: "reviews.fam_welter.quote", name: "Fam. Welter", locationKey: "reviews.fam_welter.location" },
  { textKey: "reviews.tomasz.text", quoteKey: "reviews.tomasz.quote", name: "Tomasz", locationKey: "reviews.tomasz.location" },
  { textKey: "reviews.laura_tom.text", quoteKey: "reviews.laura_tom.quote", name: "Laura & Tom", locationKey: "reviews.laura_tom.location" },
];

export const faqs = [
  { qKey: "faq.booking.q", aKey: "faq.booking.a" },
  { qKey: "faq.prices.q", aKey: "faq.prices.a" },
  { qKey: "faq.amenities.q", aKey: "faq.amenities.a" },
  { qKey: "faq.pets.q", aKey: "faq.pets.a" },
  { qKey: "faq.discounts.q", aKey: "faq.discounts.a" },
  { qKey: "faq.parking.q", aKey: "faq.parking.a" },
];

export const features = [
  { image: "/images/65295b54dd06ae818ed1be7c_Aufzug.avif", titleKey: "home.features.elevator" },
  { image: "/images/65295f309e9c01878c7c2ce6_TV.avif", titleKey: "home.features.tv" },
  { image: "/images/65295fe24c43f5d22dc509df_Fn.avif", titleKey: "home.features.hair_dryer" },
  { image: "/images/6529604a62e57157ec5f3402_WLAN.avif", titleKey: "home.features.wifi" },
  { image: "/images/6529619ad524db7eb5a8f6e8_Kche.avif", titleKey: "home.features.cooking" },
  { image: "/images/65296245dd8cf73344675481_Handtcher.avif", titleKey: "home.features.towels" },
];

