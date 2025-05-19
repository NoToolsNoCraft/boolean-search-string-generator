
  const locationExpansions = {
  "uk": ["UK", "United Kingdom"],
  "united kingdom": ["UK", "United Kingdom"],
  "us": ["US", "United States", "USA"],
  "united states": ["US", "United States", "USA"],
  "usa": ["US", "United States", "USA"],
  "uae": ["UAE", "United Arab Emirates"],
  "germany": ["Germany", "Deutschland"],
  "deutschland": ["Germany", "Deutschland"],
  "netherlands": ["Netherlands", "Holland"],
  "united arab emirates": ["UAE", "United Arab Emirates"],
  "france": ["France", "French Republic"],
  "spain": ["Spain", "España"],
  "italy": ["Italy", "Italia"],
  "canada": ["Canada", "CA"],
  "australia": ["Australia", "AU"],
  "india": ["India", "IN", "Bharat"],
  "china": ["China", "PRC", "People's Republic of China"],
  "japan": ["Japan", "Nippon"],
  "brazil": ["Brazil", "Brasil"],
  "mexico": ["Mexico", "México"],
  "sweden": ["Sweden", "Sverige"],
  "norway": ["Norway", "Norge"],
  "denmark": ["Denmark", "Danmark"],
  "finland": ["Finland", "Suomi"],
  "switzerland": ["Switzerland", "Schweiz", "Suisse", "Svizzera"],
  "austria": ["Austria", "Österreich"],
  "belgium": ["Belgium", "België", "Belgique"],
  "ireland": ["Ireland", "Éire"],
  "poland": ["Poland", "Polska"],
  "portugal": ["Portugal", "PT"],
  "russia": ["Russia", "Russian Federation", "Российская Федерация"],
  "turkey": ["Turkey", "Türkiye"],
  "south africa": ["South Africa", "ZA"],
  "new zealand": ["New Zealand", "NZ", "Aotearoa"],
  "singapore": ["Singapore", "SG"],
  "hong kong": ["Hong Kong", "HK", "香港"],
  "israel": ["Israel", "IL"],
  "saudi arabia": ["Saudi Arabia", "KSA"],
  "argentina": ["Argentina", "AR"],
  "chile": ["Chile", "CL"],
  "colombia": ["Colombia", "CO"],
  "romania": ["Romania", "RO"],
  "czech republic": ["Czech Republic", "Czechia", "CZ"],
  "hungary": ["Hungary", "Magyarország"],
  "greece": ["Greece", "Hellas"],
  "croatia": ["Croatia", "Hrvatska"],
  "slovenia": ["Slovenia", "Slovenija"],
  "slovakia": ["Slovakia", "Slovensko"],
  "bulgaria": ["Bulgaria", "България"],
  "serbia": ["Serbia", "Srbija"],
  "montenegro": ["Montenegro", "Crna Gora"],
  "bosnia": ["Bosnia", "Bosna", "Bosnia and Herzegovina", "BiH"],
  "bosnia and herzegovina": ["Bosnia and Herzegovina", "BiH", "Bosna i Hercegovina"],
  "macedonia": ["Macedonia", "North Macedonia", "Македонија"],
  "north macedonia": ["North Macedonia", "Macedonia", "Македонија"],
  "albania": ["Albania", "Shqipëri"],
  "ukraine": ["Ukraine", "Україна"],
  "belarus": ["Belarus", "Беларусь"],
  "estonia": ["Estonia", "Eesti"],
  "latvia": ["Latvia", "Latvija"],
  "lithuania": ["Lithuania", "Lietuva"],
  "andorra": ["Andorra", "AD"],
  "liechtenstein": ["Liechtenstein", "LI"],
  "luxembourg": ["Luxembourg", "LU"],
  "monaco": ["Monaco", "MC"],
  "san marino": ["San Marino", "SM"],
  "vatican city": ["Vatican City", "Holy See", "Vatican", "VA"],
  "moldova": ["Moldova", "Republic of Moldova", "MD"],
  "malta": ["Malta", "MT"],
  "cyprus": ["Cyprus", "CY"],


  //Capital cities
"belgrade": ["Belgrade", "Beograd"],
"podgorica": ["Podgorica"],
"sarajevo": ["Sarajevo"],
"skopje": ["Skopje", "Скопје"],
"tirana": ["Tirana", "Tiranë"],
"kyiv": ["Kyiv", "Київ"],
"minsk": ["Minsk", "Мінск"],
"tallinn": ["Tallinn"],
"riga": ["Riga", "Rīga"],
"vilnius": ["Vilnius"],
"andorra la vella": ["Andorra la Vella"],
"vaduz": ["Vaduz"],
"luxembourg city": ["Luxembourg City", "Luxembourg", "Lëtzebuerg"],
"chisinau": ["Chișinău", "Chisinau"],
"valletta": ["Valletta", "Il-Belt Valletta"],
"nicosia": ["Nicosia", "Λευκωσία"],
"london": ["London"],
"washington": ["Washington, D.C."],
"abu dhabi": ["Abu Dhabi", "أبو ظبي"],
"berlin": ["Berlin"],
"amsterdam": ["Amsterdam"],
"paris": ["Paris"],
"madrid": ["Madrid"],
"rome": ["Rome", "Roma"],
"ottawa": ["Ottawa"],
"canberra": ["Canberra"],
"new delhi": ["New Delhi", "नई दिल्ली"],
"beijing": ["Beijing", "北京"],
"tokyo": ["Tokyo", "東京"],
"brasilia": ["Brasília"],
"mexico city": ["Mexico City", "Ciudad de México"],
"stockholm": ["Stockholm"],
"oslo": ["Oslo"],
"copenhagen": ["Copenhagen", "København"],
"helsinki": ["Helsinki"],
"bern": ["Bern", "Berne"],
"vienna": ["Vienna", "Wien"],
"brussels": ["Brussels", "Bruxelles", "Brussel"],
"dublin": ["Dublin", "Baile Átha Cliath"],
"warsaw": ["Warsaw", "Warszawa"],
"lisbon": ["Lisbon", "Lisboa"],
"moscow": ["Moscow", "Москва"],
"ankara": ["Ankara"],
"pretoria": ["Pretoria"],
"cape town": ["Cape Town"],
"bloemfontein": ["Bloemfontein"],
"wellington": ["Wellington", "Te Whanganui-a-Tara"],
"jerusalem": ["Jerusalem", "ירושלים"],
"riyadh": ["Riyadh", "الرياض"],
"buenos aires": ["Buenos Aires"],
"santiago": ["Santiago"],
"bogota": ["Bogotá"],
"bucharest": ["Bucharest", "București"],
"prague": ["Prague", "Praha"],
"budapest": ["Budapest"],
"athens": ["Athens", "Αθήνα"],
"zagreb": ["Zagreb"],
"ljubljana": ["Ljubljana"],
"bratislava": ["Bratislava"],
"sofia": ["Sofia", "София"],
  
};

  const industryExpansions = {
    "apple": ["Apple", "Mac", "iOS"],
    "microsoft": ["Microsoft", "Windows", "Azure"],
    "google": ["Google", "Android", "YouTube"],
    "amazon": ["Amazon", "AWS", "Prime"],
    "facebook": ["Facebook", "Meta", "Instagram"],
    "ibm": ["IBM", "Big Blue", "Watson"],
    "oracle": ["Oracle", "Database", "Cloud"],
    "intel": ["Intel", "Microprocessor", "Semiconductor"],
    "nvidia": ["Nvidia", "GPU", "Graphics"],
    "tesla": ["Tesla", "Electric Vehicle", "EV"],
    "netflix": ["Netflix", "Streaming", "Entertainment"],
    "twitter": ["Twitter", "X", "Social Media"],
    "linkedin": ["LinkedIn", "Professional Networking",],
    "salesforce": ["Salesforce", "CRM", "Cloud"],
    "adobe": ["Adobe", "Creative Cloud", "Photoshop"],
    "zoom": ["Zoom", "Video Conferencing", "Webinar"],
    "snap": ["Snap", "Snapchat", "Social Media"],
    "spotify": ["Spotify", "Music Streaming", "Podcast"],
    "airbnb": ["Airbnb", "Travel", "Hospitality"],
    "uber": ["Uber", "Ride Sharing", "Transportation"],
    "lyft": ["Lyft", "Ride Sharing", "Transportation"],
    "paypal": ["PayPal", "Online Payment", "Fintech"],
    "square": ["Square", "Payment Processing", "Fintech"],
    "stripe": ["Stripe", "Payment Processing", "Fintech"],
    "robinhood": ["Robinhood", "Fintech", "Stock Trading"],
    "zoominfo": ["ZoomInfo", "Sales Intelligence", "Data"],
    "palantir": ["Palantir", "Data Analytics", "Big Data"],
    "snapchat": ["Snapchat", "Social Media", "Messaging"],
    
  };

  
  const seniorityExpansions = {
  "intern": ["Intern", "Internship"],
  "junior": ["Junior", "Entry Level", "Jr", "Jr. Level"],
  "entry": ["Entry Level", "Entry", "Junior", "Jr", "Jr. Level"],
  "mid": ["Mid", "Mid Level", "Intermediate"],
  "senior": ["Senior", "Sr", "Sr. Level"],
  "lead": ["Lead", "Team Lead", "Tech Lead"],
  "manager": ["Manager", "Mgr", "Management"],
  "director": ["Director", "Dir"],
  "vp": ["VP", "Vice President"],
  "president": ["President", "Pres"],
  "founder": ["Founder", "Co-Founder"],
  "ceo": ["CEO", "Chief Executive Officer"],
  "cto": ["CTO", "Chief Technology Officer"],
  "cfo": ["CFO", "Chief Financial Officer"],
  "coo": ["COO", "Chief Operating Officer"],
  "cio": ["CIO", "Chief Information Officer"],
  "cmo": ["CMO", "Chief Marketing Officer"],
  "cso": ["CSO", "Chief Security Officer", "Chief Strategy Officer"],
  "cpo": ["CPO", "Chief Product Officer"],
  "chief technology officer": ["CTO", "Chief Technology Officer"],
  "chief": ["Chief", "C-Level", "C Suite"],
  "executive": ["Executive", "C-Level", "C Suite"],
  "founder": ["Founder", "Co-Founder", "Entrepreneur"],
  "entrepreneur": ["Entrepreneur", "Founder", "Co-Founder"],
  "c-level": ["C-Level", "C Suite", "CEO", "CTO", "CFO", "COO", "CIO", "CMO", "CSO"]
};


  function expandLocations(locations) {
    if (!isExpansionEnabled()) return locations.map(quoteIfNeeded);

    const flatSet = new Set();

    return locations.map(loc => {
      const key = loc.trim().toLowerCase();
      const expansions = locationExpansions[key];

      if (expansions && expansions.length > 1) {
        const deduped = expansions
          .map(quoteIfNeeded)
          .filter(item => {
            if (flatSet.has(item.toLowerCase())) return false;
            flatSet.add(item.toLowerCase());
            return true;
          });

        return deduped.length > 1 ? `(${deduped.join(" OR ")})` : deduped[0];
      } else {
        const cleaned = quoteIfNeeded(loc);
        if (flatSet.has(cleaned.toLowerCase())) return null;
        flatSet.add(cleaned.toLowerCase());
        return cleaned;
      }
    }).filter(Boolean);
  }



  function expandIndustries(industries) {
    if (!isExpansionEnabled()) return industries.map(quoteIfNeeded);
    
    const flatSet = new Set();

    return industries.map(ind => {
      const key = ind.trim().toLowerCase();
      const expansions = industryExpansions[key];

      if (expansions && expansions.length > 1) {
        const deduped = expansions
          .map(quoteIfNeeded)
          .filter(item => {
            if (flatSet.has(item.toLowerCase())) return false;
            flatSet.add(item.toLowerCase());
            return true;
          });

        return deduped.length > 1 ? `(${deduped.join(" OR ")})` : deduped[0];
      } else {
        const cleaned = quoteIfNeeded(ind);
        if (flatSet.has(cleaned.toLowerCase())) return null;
        flatSet.add(cleaned.toLowerCase());
        return cleaned;
      }
    }).filter(Boolean);
  }


  


function expandSeniorityLevels(levels) {
  if (!isExpansionEnabled()) return levels.map(quoteIfNeeded);

  const flatSet = new Set();
  return levels.map(level => {
    const key = level.trim().toLowerCase();
    const expansions = seniorityExpansions[key];

    if (expansions && expansions.length > 1) {
      const deduped = expansions
        .map(quoteIfNeeded)
        .filter(item => {
          const lower = item.toLowerCase();
          if (flatSet.has(lower)) return false;
          flatSet.add(lower);
          return true;
        });
      return deduped.length > 1 ? `(${deduped.join(" OR ")})` : deduped[0];
    } else {
      const cleaned = quoteIfNeeded(level);
      const lower = cleaned.toLowerCase();
      if (flatSet.has(lower)) return null;
      flatSet.add(lower);
      return cleaned;
    }
  }).filter(Boolean);
}
