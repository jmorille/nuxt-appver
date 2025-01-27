
export interface Country {
  code?: string;
  nom?: string;
  capitale?: string;
  continent?: string;
  languePrincipale?: string;
  monnaie?: string;
  faitMarquant?: string;
}

let countries: Country[] = [
  {
    code: "FR",
    nom: "France",
    capitale: "Paris",
    continent: "Europe",
    languePrincipale: "Français",
    monnaie: "Euro",
    faitMarquant: "Connue pour sa gastronomie et la Tour Eiffel."
  },
  {
    code: "JP",
    nom: "Japon",
    capitale: "Tokyo",
    continent: "Asie",
    languePrincipale: "Japonais",
    monnaie: "Yen",
    faitMarquant: "Reconnu pour sa technologie avancée et sa culture traditionnelle."
  },
  {
    code: "US",
    nom: "États-Unis",
    capitale: "Washington, D.C.",
    continent: "Amérique du Nord",
    languePrincipale: "Anglais",
    monnaie: "Dollar américain",
    faitMarquant: "Paysage diversifié, du Grand Canyon à New York."
  },
  {
    code: "BR",
    nom: "Brésil",
    capitale: "Brasília",
    continent: "Amérique du Sud",
    languePrincipale: "Portugais",
    monnaie: "Real",
    faitMarquant: "Connu pour le carnaval de Rio et la forêt amazonienne."
  },
  {
    code: "AU",
    nom: "Australie",
    capitale: "Canberra",
    continent: "Océanie",
    languePrincipale: "Anglais",
    monnaie: "Dollar australien",
    faitMarquant: "Célèbre pour la Grande Barrière de Corail et sa faune unique."
  },
  {
    code: "CN",
    nom: "Chine",
    capitale: "Pékin",
    continent: "Asie",
    languePrincipale: "Mandarin",
    monnaie: "Yuan",
    faitMarquant: "Abrite la Grande Muraille de Chine."
  },
  {
    code: "DE",
    nom: "Allemagne",
    capitale: "Berlin",
    continent: "Europe",
    languePrincipale: "Allemand",
    monnaie: "Euro",
    faitMarquant: "Connu pour son histoire et son industrie automobile."
  },
  {
    code: "IN",
    nom: "Inde",
    capitale: "New Delhi",
    continent: "Asie",
    languePrincipale: "Hindi",
    monnaie: "Roupie indienne",
    faitMarquant: "Célèbre pour le Taj Mahal et sa diversité culturelle."
  },
  {
    code: "CA",
    nom: "Canada",
    capitale: "Ottawa",
    continent: "Amérique du Nord",
    languePrincipale: "Anglais et Français",
    monnaie: "Dollar canadien",
    faitMarquant: "Pays de vastes paysages naturels."
  },
  {
    code: "ZA",
    nom: "Afrique du Sud",
    capitale: "Pretoria",
    continent: "Afrique",
    languePrincipale: "Anglais et Afrikaans",
    monnaie: "Rand",
    faitMarquant: "Connue pour ses safaris et Nelson Mandela."
  },
  {
    code: "RU",
    nom: "Russie",
    capitale: "Moscou",
    continent: "Europe/Asie",
    languePrincipale: "Russe",
    monnaie: "Rouble",
    faitMarquant: "Plus grand pays du monde par sa superficie."
  },
  {
    code: "IT",
    nom: "Italie",
    capitale: "Rome",
    continent: "Europe",
    languePrincipale: "Italien",
    monnaie: "Euro",
    faitMarquant: "Berceau de la Renaissance et de l'Empire romain."
  },
  {
    code: "ES",
    nom: "Espagne",
    capitale: "Madrid",
    continent: "Europe",
    languePrincipale: "Espagnol",
    monnaie: "Euro",
    faitMarquant: "Célèbre pour la danse flamenco et ses plages."
  },
  {
    code: "EG",
    nom: "Égypte",
    capitale: "Le Caire",
    continent: "Afrique",
    languePrincipale: "Arabe",
    monnaie: "Livre égyptienne",
    faitMarquant: "Abrite les pyramides de Gizeh."
  },
  {
    code: "MX",
    nom: "Mexique",
    capitale: "Mexico",
    continent: "Amérique du Nord",
    languePrincipale: "Espagnol",
    monnaie: "Peso mexicain",
    faitMarquant: "Connu pour sa cuisine et ses sites mayas."
  },
  {
    code: "KR",
    nom: "Corée du Sud",
    capitale: "Séoul",
    continent: "Asie",
    languePrincipale: "Coréen",
    monnaie: "Won sud-coréen",
    faitMarquant: "Réputée pour sa technologie et la K-pop."
  },
  {
    code: "AR",
    nom: "Argentine",
    capitale: "Buenos Aires",
    continent: "Amérique du Sud",
    languePrincipale: "Espagnol",
    monnaie: "Peso argentin",
    faitMarquant: "Connu pour le tango et la pampa."
  },
  {
    code: "SA",
    nom: "Arabie Saoudite",
    capitale: "Riyad",
    continent: "Asie",
    languePrincipale: "Arabe",
    monnaie: "Riyal saoudien",
    faitMarquant: "Abrite La Mecque, lieu saint de l'islam."
  },
  {
    code: "SE",
    nom: "Suède",
    capitale: "Stockholm",
    continent: "Europe",
    languePrincipale: "Suédois",
    monnaie: "Couronne suédoise",
    faitMarquant: "Réputée pour son design et son bien-être social."
  },
  {
    code: "NG",
    nom: "Nigéria",
    capitale: "Abuja",
    continent: "Afrique",
    languePrincipale: "Anglais",
    monnaie: "Naira",
    faitMarquant: "Pays le plus peuplé d'Afrique."
  },
  {
    code: "NL",
    nom: "Pays-Bas",
    capitale: "Amsterdam",
    continent: "Europe",
    languePrincipale: "Néerlandais",
    monnaie: "Euro",
    faitMarquant: "Célèbre pour ses canaux et ses moulins à vent."
  },
  {
    code: "CH",
    nom: "Suisse",
    capitale: "Berne",
    continent: "Europe",
    languePrincipale: "Allemand, Français, Italien, Romanche",
    monnaie: "Franc suisse",
    faitMarquant: "Connu pour ses montres et ses banques."
  },
  {
    code: "GR",
    nom: "Grèce",
    capitale: "Athènes",
    continent: "Europe",
    languePrincipale: "Grec",
    monnaie: "Euro",
    faitMarquant: "Berceau de la civilisation occidentale."
  },
  {
    code: "IL",
    nom: "Israël",
    capitale: "Jérusalem",
    continent: "Asie",
    languePrincipale: "Hébreu",
    monnaie: "Shekel",
    faitMarquant: "Connu pour son importance religieuse."
  },
  {
    code: "TH",
    nom: "Thaïlande",
    capitale: "Bangkok",
    continent: "Asie",
    languePrincipale: "Thaï",
    monnaie: "Baht",
    faitMarquant: "Célèbre pour ses plages et ses temples."
  },
  {
    code: "NZ",
    nom: "Nouvelle-Zélande",
    capitale: "Wellington",
    continent: "Océanie",
    languePrincipale: "Anglais",
    monnaie: "Dollar néo-zélandais",
    faitMarquant: "Connue pour ses paysages de 'Le Seigneur des Anneaux'."
  },
  {
    code: "PK",
    nom: "Pakistan",
    capitale: "Islamabad",
    continent: "Asie",
    languePrincipale: "Ourdou",
    monnaie: "Roupie pakistanaise",
    faitMarquant: "Possède l'une des plus hautes montagnes du monde, le K2."
  },
  {
    code: "PL",
    nom: "Pologne",
    capitale: "Varsovie",
    continent: "Europe",
    languePrincipale: "Polonais",
    monnaie: "Zloty",
    faitMarquant: "Connu pour sa riche histoire et ses châteaux médiévaux."
  },
  {
    code: "PT",
    nom: "Portugal",
    capitale: "Lisbonne",
    continent: "Europe",
    languePrincipale: "Portugais",
    monnaie: "Euro",
    faitMarquant: "Célèbre pour ses explorateurs et ses plages."
  },
  {
    code: "VN",
    nom: "Vietnam",
    capitale: "Hanoï",
    continent: "Asie",
    languePrincipale: "Vietnamien",
    monnaie: "Dong",
    faitMarquant: "Connue pour ses paysages pittoresques et son histoire."
  },
  {
    code: "FI",
    nom: "Finlande",
    capitale: "Helsinki",
    continent: "Europe",
    languePrincipale: "Finnois",
    monnaie: "Euro",
    faitMarquant: "Réputée pour son système éducatif et sa nature sauvage."
  },
  {
    code: "NO",
    nom: "Norvège",
    capitale: "Oslo",
    continent: "Europe",
    languePrincipale: "Norvégien",
    monnaie: "Couronne norvégienne",
    faitMarquant: "Célèbre pour ses fjords spectaculaires."
  },
  {
    code: "TR",
    nom: "Turquie",
    capitale: "Ankara",
    continent: "Asie/Europe",
    languePrincipale: "Turc",
    monnaie: "Livre turque",
    faitMarquant: "Point de rencontre entre l'Orient et l'Occident."
  },
  {
    code: "PH",
    nom: "Philippines",
    capitale: "Manille",
    continent: "Asie",
    languePrincipale: "Filipino",
    monnaie: "Peso philippin",
    faitMarquant: "Composé de plus de 7 000 îles."
  },
  {
    code: "KE",
    nom: "Kenya",
    capitale: "Nairobi",
    continent: "Afrique",
    languePrincipale: "Swahili",
    monnaie: "Shilling kényan",
    faitMarquant: "Réputé pour ses safaris et sa faune sauvage."
  },
  {
    code: "DK",
    nom: "Danemark",
    capitale: "Copenhague",
    continent: "Europe",
    languePrincipale: "Danois",
    monnaie: "Couronne danoise",
    faitMarquant: "Connu pour être l'un des pays les plus heureux au monde."
  },
  {
    code: "CL",
    nom: "Chili",
    capitale: "Santiago",
    continent: "Amérique du Sud",
    languePrincipale: "Espagnol",
    monnaie: "Peso chilien",
    faitMarquant: "Connu pour ses paysages diversifiés, du désert d'Atacama à la Patagonie."
  },
  {
    code: "IE",
    nom: "Irlande",
    capitale: "Dublin",
    continent: "Europe",
    languePrincipale: "Anglais et Irlandais",
    monnaie: "Euro",
    faitMarquant: "Célèbre pour ses paysages verdoyants et sa culture celte."
  },
  {
    code: "BE",
    nom: "Belgique",
    capitale: "Bruxelles",
    continent: "Europe",
    languePrincipale: "Français, Néerlandais, Allemand",
    monnaie: "Euro",
    faitMarquant: "Connu pour son chocolat, ses bières et ses gaufres."
  },
  {
    code: "IQ",
    nom: "Irak",
    capitale: "Bagdad",
    continent: "Asie",
    languePrincipale: "Arabe",
    monnaie: "Dinar irakien",
    faitMarquant: "Berceau de la civilisation mésopotamienne."
  },
  {
    code: "AT",
    nom: "Autriche",
    capitale: "Vienne",
    continent: "Europe",
    languePrincipale: "Allemand",
    monnaie: "Euro",
    faitMarquant: "Réputée pour sa musique classique et ses Alpes."
  },
  {
    code: "CZ",
    nom: "Tchéquie",
    capitale: "Prague",
    continent: "Europe",
    languePrincipale: "Tchèque",
    monnaie: "Couronne tchèque",
    faitMarquant: "Célèbre pour son architecture médiévale."
  },
  {
    code: "HU",
    nom: "Hongrie",
    capitale: "Budapest",
    continent: "Europe",
    languePrincipale: "Hongrois",
    monnaie: "Forint",
    faitMarquant: "Connue pour ses bains thermaux."
  },
  {
    code: "SK",
    nom: "Slovaquie",
    capitale: "Bratislava",
    continent: "Europe",
    languePrincipale: "Slovaque",
    monnaie: "Euro",
    faitMarquant: "Connue pour ses montagnes et ses châteaux."
  },
  {
    code: "RO",
    nom: "Roumanie",
    capitale: "Bucarest",
    continent: "Europe",
    languePrincipale: "Roumain",
    monnaie: "Leu",
    faitMarquant: "Célèbre pour les légendes de Dracula et les Carpates."
  }
];

export const getCountries = (): Country[] => {
  return countries;
};

export const getByCode = (code:string):Country => {
  return countries.filter((country)=> country.code == code)[0];
}

export const deleteByCode = (code:string):Country|undefined => {
  if (!code) {
    return undefined;
  }
  const find = getByCode(code);
  if (find) {
    countries = countries.filter((country)=> country.code != code); 
  }
  return find;
}

export const updateCountry = (newCountry:Country):Country|undefined => {
  if (!newCountry?.code) {
    return undefined;
  }
  const find = getByCode(newCountry.code);
  if (find) {
    const otherCountries = countries.filter((country)=> country.code != newCountry.code);  
    const { code, ...res } = newCountry;
    const updated = {...find, ...res };
    countries = [ ...otherCountries, updated];
    return updated;
  }
  return undefined;
}

export const addCountry = (newCountry:Country):Country|undefined => {
  if (!newCountry?.code) {
    return undefined;
  }
  const find = getByCode(newCountry.code);
  if (!find) {
    countries = [ ...countries, newCountry];
    return newCountry;
  }
  return undefined;
}

