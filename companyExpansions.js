const companyExpansions = {
  "google": ["Google", "Alphabet", "YouTube"],
  "amazon": ["Amazon", "AWS", "Prime", "Amazon Web Services"],
  "facebook": ["Facebook", "Meta", "Instagram", "WhatsApp"],
  "meta": ["Meta", "Facebook", "Instagram", "WhatsApp"],
  "microsoft": ["Microsoft", "Windows", "Azure"],
  "apple": ["Apple", "Mac", "iOS",],
  "ibm": ["IBM", "International Business Machines"],
  "oracle": ["Oracle", "Oracle Corporation"],
  "intel": ["Intel", "Intel Corporation"],
  "nvidia": ["NVIDIA", "NVIDIA Corporation"],
  "tesla": ["Tesla", "Tesla Motors", "Tesla, Inc."],
  "twitter": ["Twitter", "X"],
  "linkedin": ["LinkedIn", "Microsoft LinkedIn"],
  "salesforce": ["Salesforce", "Salesforce.com"],
  "adobe": ["Adobe", "Adobe Systems"],
  "zoom": ["Zoom", "Zoom Video Communications"],
  "snap": ["Snap", "Snap Inc."],
  "spotify": ["Spotify", "Spotify Technology"],
  "airbnb": ["Airbnb", "Airbnb, Inc."],
  "uber": ["Uber", "Uber Technologies"],
  "lyft": ["Lyft", "Lyft, Inc."],
  "paypal": ["PayPal", "PayPal Holdings"],
  "square": ["Square", "Block, Inc."],
  "stripe": ["Stripe", "Stripe, Inc."],
  "snapchat": ["Snapchat", "Snap Inc."],
  "tiktok": ["TikTok", "ByteDance"],
  "netflix": ["Netflix", "Netflix, Inc."],
  "hulu": ["Hulu", "Hulu, LLC"],
  "pinterest": ["Pinterest", "Pinterest, Inc."],
  "reddit": ["Reddit", "Reddit, Inc."],
  "twitch": ["Twitch", "Twitch Interactive"],
  "discord": ["Discord", "Discord Inc."],
  "github": ["GitHub", "Microsoft GitHub"],
  "bitbucket": ["Bitbucket", "Atlassian Bitbucket"],
  "slack": ["Slack", "Slack Technologies"],
  "zoominfo": ["ZoomInfo", "ZoomInfo Technologies"],
  "palantir": ["Palantir", "Palantir Technologies"],
  "robinhood": ["Robinhood", "Robinhood Markets"],
  "coinbase": ["Coinbase", "Coinbase Global"],
  "shopify": ["Shopify", "Shopify Inc."],
  "etsy": ["Etsy", "Etsy, Inc."],
  "walmart": ["Walmart", "Walmart Inc."],
  "costco": ["Costco", "Costco Wholesale"],
  "target": ["Target", "Target Corporation"],
  "home depot": ["Home Depot", "The Home Depot"],
  "lowes": ["Lowe's", "Lowe's Companies"],
  "best buy": ["Best Buy", "Best Buy Co."],
  "ford": ["Ford", "Ford Motor Company"],
  "gm": ["GM", "General Motors"],
  "toyota": ["Toyota", "Toyota Motor Corporation"],
  "honda": ["Honda", "Honda Motor Co."],
  "bmw": ["BMW", "Bayerische Motoren Werke"],
  "mercedes": ["Mercedes", "Mercedes-Benz"],
  "audi": ["Audi", "Audi AG"],
  "volkswagen": ["Volkswagen", "Volkswagen AG"],
  "hyundai": ["Hyundai", "Hyundai Motor Company"],
  "nissan": ["Nissan", "Nissan Motor Corporation"],
  "space x": ["SpaceX", "Space Exploration Technologies Corp."],
  "blue origin": ["Blue Origin", "Blue Origin LLC"],
  "boeing": ["Boeing", "Boeing Company"],
  "lockheed": ["Lockheed", "Lockheed Martin"],
  "raytheon": ["Raytheon", "Raytheon Technologies"],
  "northrop": ["Northrop", "Northrop Grumman"],
  "general dynamics": ["General Dynamics", "GD"],
  "honeywell": ["Honeywell", "Honeywell International"],
  "siemens": ["Siemens", "Siemens AG"],
  "ge": ["GE", "General Electric"],
  "3m": ["3M", "3M Company"],
  "caterpillar": ["Caterpillar", "Caterpillar Inc."],
  "john deere": ["John Deere", "Deere & Company"],
  "exxon": ["Exxon", "ExxonMobil"],
  "chevron": ["Chevron", "Chevron Corporation"],
  "bp": ["BP", "British Petroleum"],
  "shell": ["Shell", "Royal Dutch Shell"],
  "total": ["Total", "TotalEnergies"],
  "conoco": ["Conoco", "ConocoPhillips"],
  "pepsico": ["PepsiCo", "Pepsi"],
  "coca cola": ["Coca-Cola", "Coca-Cola Company"],
  "nestle": ["Nestlé", "Nestle"],
  "unilever": ["Unilever", "Unilever PLC"],
  "kraft": ["Kraft", "Kraft Heinz"],
  "mondelez": ["Mondelez", "Mondelez International"],
  "procter": ["Procter", "Procter & Gamble"],
  "pg": ["PG", "Procter & Gamble"],
  "l'oreal": ["L'Oréal",],
  "loreal": ["L'Oréal", "L'Oréal Group"],
  "estee lauder": ["Estée Lauder", "Estée Lauder Companies"],
  "nike": ["Nike", "Nike, Inc."],
  "adidas": ["Adidas", "Adidas AG"],
  "puma": ["Puma", "Puma SE"],
  "under armour": ["Under Armour", "UA"],
  "reebok": ["Reebok", "Reebok International"],
  "new balance": ["New Balance", "New Balance Athletics"],
  "asics": ["ASICS", "ASICS Corporation"],
  "louis vuitton": ["Louis Vuitton", "LVMH"],
  "gucci": ["Gucci", "Gucci Group"],
  "chanel": ["Chanel", "Chanel S.A."],
  "hermes": ["Hermès", "Hermès International"],
  "prada": ["Prada", "Prada S.p.A."],
  "burberry": ["Burberry", "Burberry Group"],
  "ralph lauren": ["Ralph Lauren", "Ralph Lauren Corporation"],
  "calvin klein": ["Calvin Klein", "Calvin Klein Inc."],
  "tommy hilfiger": ["Tommy Hilfiger", "Tommy Hilfiger Corporation"],
  "h&m": ["H&M", "H&M Hennes & Mauritz"],
  "zara": ["Zara", "Zara SA"],
  "ikea": ["IKEA", "IKEA Group"],
  "costco": ["Costco", "Costco Wholesale"],
  "home depot": ["Home Depot", "The Home Depot"],
  "lowes": ["Lowe's", "Lowe's Companies"],
  "best buy": ["Best Buy", "Best Buy Co."],
  "walmart": ["Walmart", "Walmart Inc."],
  "target": ["Target", "Target Corporation"],
  "alibaba": ["Alibaba", "Alibaba Group"],
  "jd.com": ["JD.com", "JD"],
  "baidu": ["Baidu", "Baidu, Inc."],
  "tencent": ["Tencent", "Tencent Holdings"],
  "bytedance": ["ByteDance", "ByteDance Ltd."],
  "didi": ["Didi", "Didi Chuxing"],
  "meituan": ["Meituan", "Meituan Dianping"],
  "xiaomi": ["Xiaomi", "Xiaomi Corporation"],
  "huawei": ["Huawei", "Huawei Technologies"],
  "lenovo": ["Lenovo", "Lenovo Group"],
  "samsung": ["Samsung", "Samsung Electronics"],
  "lg": ["LG", "LG Electronics"],
  "htc": ["HTC", "HTC Corporation"],
  "nokia": ["Nokia", "Nokia Corporation"],
  "motorola": ["Motorola", "Motorola Solutions"],
  "blackberry": ["BlackBerry", "BlackBerry Limited"],
  "qualcomm": ["Qualcomm", "Qualcomm Incorporated"],
  "broadcom": ["Broadcom", "Broadcom Inc."],
  "amd": ["AMD", "Advanced Micro Devices"],
  "arm": ["ARM", "ARM Holdings"],
  "pepco": ["Pepco", "Pepco Holdings"],
  "duke energy": ["Duke Energy", "Duke Energy Corporation"],
  "exelon": ["Exelon", "Exelon Corporation"],
  "southern company": ["Southern Company", "Southern Company Gas"],
  "firstenergy": ["FirstEnergy", "FirstEnergy Corporation"],
  "pseg": ["PSEG", "Public Service Enterprise Group"],
  "con edison": ["Con Edison", "Consolidated Edison"],
  "national grid": ["National Grid", "National Grid plc"],
  "evergy": ["Evergy", "Evergy, Inc."],
  "xcel energy": ["Xcel Energy", "Xcel Energy Inc."],
  "next era energy": ["NextEra Energy", "NextEra Energy, Inc."],
  "enel": ["Enel", "Enel S.p.A."],
  "edf": ["EDF", "Électricité de France"],
  "engie": ["Engie", "Engie SA"],
  "schneider electric": ["Schneider Electric", "Schneider Electric SE"],
  "abb": ["ABB", "ABB Ltd."],
  "general electric": ["General Electric", "GE"],
  "continental": ["Continental", "Continental AG"],
  "bosch": ["Bosch", "Robert Bosch GmbH"],
  "philips": ["Philips", "Philips Electronics"],
  "rockwell automation": ["Rockwell Automation", "Rockwell Automation, Inc."],
  "emerson": ["Emerson", "Emerson Electric"],
  "schlumberger": ["Schlumberger", "Schlumberger Limited"],
  "halliburton": ["Halliburton", "Halliburton Company"],
  "baker hughes": ["Baker Hughes", "Baker Hughes Company"],
  "weatherford": ["Weatherford", "Weatherford International"],
  "baker hughes": ["Baker Hughes", "Baker Hughes Company"],
  "slb": ["SLB", "Schlumberger Limited"],
  "bnp paribas": ["BNP Paribas", "BNP"],
  "hsbc": ["HSBC", "HSBC Holdings"],
  "jp morgan": ["JP Morgan", "JPMorgan Chase"],
  "goldman sachs": ["Goldman Sachs", "Goldman Sachs Group"],
  "bank of america": ["Bank of America", "BofA"],
  "citigroup": ["Citigroup", "Citi"],
  "wells fargo": ["Wells Fargo", "Wells Fargo & Company"],
  "barclays": ["Barclays", "Barclays PLC"],
  "credit suisse": ["Credit Suisse", "Credit Suisse Group"],
  "deutsche bank": ["Deutsche Bank", "Deutsche Bank AG"],
  "ubs": ["UBS", "UBS Group"],
  "ing": ["ING", "ING Group"],
  "santander": ["Santander", "Banco Santander"],
  "bbva": ["BBVA", "Banco Bilbao Vizcaya Argentaria"],
  "otp bank": ["OTP Bank", "OTP Bank Nyrt."],
  "raiffeisen": ["Raiffeisen", "Raiffeisen Bank International"],
  "intesa sanpaolo": ["Intesa Sanpaolo", "Intesa Sanpaolo S.p.A."],
  "unicredit": ["UniCredit", "UniCredit S.p.A."],
  "sberbank": ["Sberbank", "Sberbank of Russia"],
  "gazprom": ["Gazprom", "Gazprom Neft"],
  "lukoil": ["Lukoil", "Lukoil Oil Company"],
  "rosneft": ["Rosneft", "Rosneft Oil Company"],
  "novatek": ["Novatek", "Novatek Gas and Power"],
  "total": ["Total", "TotalEnergies"],
  "bp": ["BP", "British Petroleum"],
  "shell": ["Shell", "Royal Dutch Shell"],
  "exxonmobil": ["ExxonMobil", "Exxon Mobil Corporation"],
  "chevron": ["Chevron", "Chevron Corporation"],
  "conoco phillips": ["ConocoPhillips", "Conoco Phillips"],
  "marathon oil": ["Marathon Oil", "Marathon Petroleum"],
  "valero": ["Valero", "Valero Energy"],
  "equinor": ["Equinor", "Equinor ASA"],
  "enbridge": ["Enbridge", "Enbridge Inc."],
  "transcanada": ["TransCanada", "TC Energy"],
  "first solar": ["First Solar", "First Solar, Inc."],
  "sunpower": ["SunPower", "SunPower Corporation"],
  "philip morris": ["Philip Morris", "Philip Morris International", "PMI"],	
  "pmi": ["PMI", "Philip Morris International"],
  "altria": ["Altria", "Altria Group"],
  "bat": ["BAT", "British American Tobacco"],
  "jti": ["JTI", "Japan Tobacco International"],
  "next era energy": ["NextEra Energy", "NextEra Energy, Inc."],
  "royal bank of scotland": ["Royal Bank of Scotland", "RBS"],
  "london stock exchange": ["London Stock Exchange", "LSE"],
  "nasdaq": ["NASDAQ", "NASDAQ Stock Market"],
  "nyse": ["NYSE", "New York Stock Exchange"],
  "cme group": ["CME Group", "Chicago Mercantile Exchange"],
  "intercontinental exchange": ["Intercontinental Exchange", "ICE"],
  "cboe": ["CBOE", "CBOE Global Markets"],
  "fidelity": ["Fidelity", "Fidelity Investments"],
  "vanguard": ["Vanguard", "The Vanguard Group"],
  "blackrock": ["BlackRock", "BlackRock, Inc."],
  "state street": ["State Street", "State Street Corporation"],
  "t rowe price": ["T. Rowe Price", "T. Rowe Price Group"],
  "charles schwab": ["Charles Schwab", "The Charles Schwab Corporation"],
  "robinhood": ["Robinhood", "Robinhood Markets"],
  "sofi": ["SoFi", "SoFi Technologies"],
  "acorns": ["Acorns", "Acorns Grow"],
  "betterment": ["Betterment", "Betterment LLC"],
  "wealthfront": ["Wealthfront", "Wealthfront Inc."],
  "chime": ["Chime", "Chime Financial"],
  "paypal": ["PayPal", "PayPal Holdings"],
  "venmo": ["Venmo", "Venmo LLC"],
  "cash app": ["Cash App", "Square, Inc."],
  "zelle": ["Zelle", "Early Warning Services"],
  "adobe": ["Adobe", "Adobe Systems"],
  "autodesk": ["Autodesk", "Autodesk, Inc."],
  "intuit": ["Intuit", "Intuit Inc."],
  "sap": ["SAP", "SAP SE"],
  

  // Add more company synonyms or related entities
  };



  function expandCompanies(companies) {
  if (!isExpansionEnabled()) return companies.map(quoteIfNeeded);

  const flatSet = new Set();

  return companies.map(company => {
    const key = company.trim().toLowerCase();
    const expansions = companyExpansions[key];

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
      const cleaned = quoteIfNeeded(company);
      const lower = cleaned.toLowerCase();
      if (flatSet.has(lower)) return null;
      flatSet.add(lower);
      return cleaned;
    }
  }).filter(Boolean);
}


function expandPastCompanies(companies) {
  if (!isExpansionEnabled()) return companies.map(quoteIfNeeded);

  const flatSet = new Set();

  return companies.map(company => {
    const key = company.trim().toLowerCase();
    const expansions = companyExpansions[key];

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
      const cleaned = quoteIfNeeded(company);
      const lower = cleaned.toLowerCase();
      if (flatSet.has(lower)) return null;
      flatSet.add(lower);
      return cleaned;
    }
  }).filter(Boolean);
}

function expandExcludeCompanies(companies) {
  if (!isExpansionEnabled()) return companies.map(quoteIfNeeded);

  const flatSet = new Set();

  return companies.map(company => {
    const key = company.trim().toLowerCase();
    const expansions = companyExpansions[key];

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
      const cleaned = quoteIfNeeded(company);
      const lower = cleaned.toLowerCase();
      if (flatSet.has(lower)) return null;
      flatSet.add(lower);
      return cleaned;
    }
  }).filter(Boolean);
}