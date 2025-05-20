const mandatorySkillExpansions = {

  //Operating System
  "operating systems": ["Operating Systems", "OS", "Windows", "Linux", "macOS", "Unix", "Ubuntu", "Fedora", "Debian", "Red Hat", "CentOS"],
  "windows": ["Windows", "Windows OS", "Windows 10", "Windows 11"],
  "linux": ["Linux", "Linux OS", "Ubuntu", "Fedora", "Debian", "Red Hat", "CentOS"],
  "macos": ["macOS", "Mac OS", "Mac OS X"],
  "unix": ["Unix", "Unix OS", "AIX", "HP-UX", "Solaris"],
  "ubuntu": ["Ubuntu", "Ubuntu OS"],
  "fedora": ["Fedora", "Fedora OS"],
  "debian": ["Debian", "Debian OS"],
  "red hat": ["Red Hat", "Red Hat OS", "RHEL"],
  "centos": ["CentOS", "CentOS OS"],
  "bash": ["Bash", "Shell Scripting", "Command Line", "Terminal"],
  "shell scripting": ["Shell Scripting", "Bash", "Command Line", "Terminal"],
  "command line": ["Command Line", "CLI", "Bash", "Shell Scripting", "Terminal"],
  "terminal": ["Terminal", "Command Line", "CLI", "Bash", "Shell Scripting"],
  "cli": ["CLI", "Command Line", "Bash", "Shell Scripting", "Terminal"],
  "command line interface": ["CLI", "Command Line", "Bash", "Shell Scripting", "Terminal"],
  "virtualization": ["Virtualization", "VMware", "Hyper-V", "VirtualBox", "KVM"],
  "vmware": ["VMware", "VMware ESXi", "VMware Workstation", "VMware Fusion"],
  "hyper-v": ["Hyper-V", "Microsoft Hyper-V"],
  "virtualbox": ["VirtualBox", "Oracle VirtualBox"],
  "kvm": ["KVM", "Kernel-based Virtual Machine"],
  "docker": ["Docker", "Docker Compose", "Docker Swarm"],
  "docker compose": ["Docker Compose", "Docker"],
  "docker swarm": ["Docker Swarm", "Docker"], 
  "containerization": ["Containerization", "Docker", "Kubernetes"],
  "kubernetes": ["Kubernetes", "K8s", "K8"],
  "k8s": ["Kubernetes", "K8", "K8s"],
  "k8": ["Kubernetes", "K8s", "K8"],
  "cloud computing": ["Cloud Computing", "AWS", "Azure", "GCP", "Google Cloud"],
  "cloud": ["Cloud Computing", "AWS", "Azure", "GCP", "Google Cloud"],
  "cloud services": ["Cloud Services", "AWS", "Azure", "GCP", "Google Cloud"],
  "cloud platforms": ["Cloud Platforms", "AWS", "Azure", "GCP", "Google Cloud"],
  "cloud infrastructure": ["Cloud Infrastructure", "AWS", "Azure", "GCP", "Google Cloud"],
  "cloud architecture": ["Cloud Architecture", "AWS", "Azure", "GCP", "Google Cloud"],
  "cloud security": ["Cloud Security", "AWS", "Azure", "GCP", "Google Cloud"],
  "cloud storage": ["Cloud Storage", "AWS S3", "Azure Blob Storage", "Google Cloud Storage"],
  "cloud networking": ["Cloud Networking", "AWS VPC", "Azure Virtual Network", "Google Cloud VPC"],
  "cloud database": ["Cloud Database", "AWS RDS", "Azure SQL Database", "Google Cloud SQL"],
  "cloud computing platforms": ["Cloud Computing Platforms", "AWS", "Azure", "GCP", "Google Cloud"],
  "cloud computing services": ["Cloud Computing Services", "AWS", "Azure", "GCP", "Google Cloud"],
  "cloud computing architecture": ["Cloud Computing Architecture", "AWS", "Azure", "GCP", "Google Cloud"],
  "cloud computing security": ["Cloud Computing Security", "AWS", "Azure", "GCP", "Google Cloud"],
  "cloud computing storage": ["Cloud Computing Storage", "AWS S3", "Azure Blob Storage", "Google Cloud Storage"],
  "cloud computing networking": ["Cloud Computing Networking", "AWS VPC", "Azure Virtual Network", "Google Cloud VPC"],
  "cloud computing database": ["Cloud Computing Database", "AWS RDS", "Azure SQL Database", "Google Cloud SQL"],
  "aws": ["AWS", "Amazon Web Services"],
  "amazon web services": ["AWS", "Amazon Web Services"],
  "azure": ["Azure", "Microsoft Azure"],
  "google cloud": ["Google Cloud", "GCP", "Google Cloud Platform"],
  "gcp": ["GCP", "Google Cloud", "Google Cloud Platform"],
  "google cloud platform": ["Google Cloud", "GCP", "Google Cloud Platform"],
  "amazon s3": ["Amazon S3", "AWSS3", "AWS S3"],
  "aws s3": ["AWS S3", "Amazon S3", "AWSS3"],
  "aws lambda": ["AWS Lambda", "Amazon Lambda"],
  "aws ec2": ["AWS EC2", "Amazon EC2"],
  "aws rds": ["AWS RDS", "Amazon RDS"],
  "aws vpc": ["AWS VPC", "Amazon VPC"],
  "aws cloudfront": ["AWS CloudFront", "Amazon CloudFront"],
  "aws cloudformation": ["AWS CloudFormation", "Amazon CloudFormation"],
  "aws cloudwatch": ["AWS CloudWatch", "Amazon CloudWatch"],
  "aws cloudtrail": ["AWS CloudTrail", "Amazon CloudTrail"],
  "aws iam": ["AWS IAM", "Amazon IAM"],
  "aws route 53": ["AWS Route 53", "Amazon Route 53"],
  "aws dynamodb": ["AWS DynamoDB", "Amazon DynamoDB"],
  "aws sns": ["AWS SNS", "Amazon SNS"],
  "aws sqs": ["AWS SQS", "Amazon SQS"],
  "aws api gateway": ["AWS API Gateway", "Amazon API Gateway"],
  "aws elastic beanstalk": ["AWS Elastic Beanstalk", "Amazon Elastic Beanstalk"],
  "aws cloudformation": ["AWS CloudFormation", "Amazon CloudFormation"],
  "aws cloudfront": ["AWS CloudFront", "Amazon CloudFront"],
  "aws cloudtrail": ["AWS CloudTrail", "Amazon CloudTrail"],
  "aws cloud9": ["AWS Cloud9", "Amazon Cloud9"],
  "aws cloud9 ide": ["AWS Cloud9 IDE", "Amazon Cloud9 IDE"],
  "zsh": ["Zsh", "Z Shell"],
  "powershell": ["PowerShell", "Windows PowerShell"],
  "systemd": ["Systemd", "Linux Init System"],
  "init.d": ["Init.d", "SysV Init"],
  "gnome": ["GNOME", "GNOME Desktop Environment"],
  "kde": ["KDE", "K Desktop Environment"],
  "brew": ["Homebrew", "brew", "Mac Package Manager"],
  "chocolatey": ["Chocolatey", "Windows Package Manager"],
  "podman": ["Podman"],
  "lxc": ["LXC", "Linux Containers"],
  "vagrant": ["Vagrant"],
  "minikube": ["Minikube", "Local Kubernetes"],
  "rkt": ["rkt", "CoreOS Rocket"],
  "ansible": ["Ansible", "Configuration Management"],

  
  // === Frontend Developer ===
  "software development lifecycle": ["Software Development Lifecycle", "SDLC", "Agile", "Scrum", "Waterfall"],
  "agile": ["Agile", "Agile Methodology", "Agile Development"],
  "scrum": ["Scrum", "Scrum Methodology", "Scrum Framework"],
  "waterfall": ["Waterfall", "Waterfall Model", "Waterfall Methodology"],
  "html5": ["HTML5", "HTML"],
  "css3": ["CSS3", "CSS"],
  "javascript frameworks": ["JavaScript Frameworks", "JS Frameworks", "JavaScript Libraries"],
  "javascript libraries": ["JavaScript Libraries", "JS Libraries", "JavaScript Frameworks"],
  "javascript libraries and frameworks": ["JavaScript Libraries and Frameworks", "JS Libraries and Frameworks", "JavaScript Frameworks"],
  "javascript library": ["JavaScript Library", "JS Library", "JavaScript Framework"],
  "js frameworks": ["JS Frameworks", "JavaScript Frameworks", "JavaScript Libraries"],
  "js libraries": ["JS Libraries", "JavaScript Libraries", "JavaScript Frameworks"],
  "js library": ["JS Library", "JavaScript Library", "JavaScript Framework"],
  "javascript": ["JavaScript", "JS", "ECMAScript"],
  "js": ["JavaScript", "JS", "ECMAScript"],
  "typescript": ["TypeScript", "TS"],
  "ts": ["TypeScript", "TS"],
  "react": ["React", "React.js"],
  "vue": ["Vue", "Vue.js"],
  "angular": ["Angular", "Angular.js"],
  "html": ["HTML", "HTML5"],
  "css": ["CSS", "CSS3"],
  "sass": ["Sass", "SCSS"],
  "less": ["Less"],
  "tailwind": ["Tailwind", "Tailwind CSS"],
  "graphql": ["GraphQL"],
  "rest": ["REST", "RESTful"],
  "oop": ["OOP", "Object-Oriented Programming"],
  "object-oriented programming": ["OOP", "Object-Oriented Programming"],
  "webflow": ["Webflow", "Webflow Design", "Webflow Development", "Webflow CMS"],
  "figma": ["Figma"],
  "adobe xd": ["Adobe XD"],
  "sketch": ["Sketch"],
  "storybook": ["Storybook"],
  "bootstrap": ["Bootstrap"],
  "react native": ["React Native"],
  "flutter": ["Flutter"],
  "xamarin": ["Xamarin"],
  "cordova": ["Cordova", "PhoneGap"],
  "ionic": ["Ionic"],
  
  
  

  // === Backend Developer ===
  "nodejs": ["Node.js", "Node"],
  "python": ["Python", "Py"],
  "django": ["Django"],
  "flask": ["Flask"],
  "java": ["Java"],
  "spring": ["Spring", "Spring Boot"],
  "csharp": ["C#", "C Sharp", ".NET", ".NET Core", "ASP.NET"],
  "cpp": ["C++", "C Plus Plus"],
  "php": ["PHP"],
  "laravel": ["Laravel"],
  "ruby": ["Ruby"],
  "rails": ["Ruby on Rails", "RoR"],
  "go": ["Go", "Golang"],
  "kotlin": ["Kotlin"],
  "swift": ["Swift"],
  "sql": ["SQL", "T-SQL", "PL/SQL"],
  "mysql": ["MySQL"],
  "postgresql": ["PostgreSQL"],
  "sqlite": ["SQLite"],
  "mongodb": ["MongoDB"],
  "firebase": ["Firebase"],
  ".net": [".NET", ".NET Core", "ASP.NET"],
  "restful api": ["RESTful API", "REST API"],
  "pwa": ["PWA", "Progressive Web App"],
  "progressive web app": ["PWA", "Progressive Web App"],
  "ajax": ["AJAX", "Asynchronous JavaScript and XML"],
  "asynchronous javascript and xml": ["AJAX", "Asynchronous JavaScript and XML"],
  "liquid": ["Liquid"],
  "relational databases": ["Relational Databases", "SQL Databases", "RDBMS"],
  "non-relational databases": ["Non-Relational Databases", "NoSQL Databases", "Document Stores"],
  "nosql": ["NoSQL", "Non-Relational Databases", "Document Stores"],
  "nosql databases": ["NoSQL Databases", "Non-Relational Databases", "Document Stores"],
  "jenkins": ["Jenkins", "CI/CD", "Continuous Integration", "Continuous Deployment"],
  "continuous integration": ["CI/CD", "Continuous Integration", "Continuous Deployment"],
  "continuous deployment": ["CI/CD", "Continuous Integration", "Continuous Deployment"],
  "continuous delivery": ["CI/CD", "Continuous Integration", "Continuous Deployment"],
  "git hub": ["GitHub", "Git",],
  "gitlab": ["GitLab", "Git",],
  "git": ["Git", "GitHub", "GitLab"],
  "continuous integration tools": ["CI/CD", "Continuous Integration", "Continuous Deployment", "GitHub", "Jenkins", "GitLab CI", "CircleCI", "Travis CI", "Continuous Integration Tools"],
  "microservices": ["Microservices", "Microservices Architecture"],
  "serverless": ["Serverless", "Serverless Architecture"],
  "api": ["API", "Application Programming Interface"],
  "web services": ["Web Services", "SOAP", "REST"],
  "soap": ["SOAP", "Web Services"],
  "restful": ["RESTful", "REST"],
  "websocket": ["WebSocket", "Web Sockets"],
  "web sockets": ["WebSocket", "Web Sockets"],
  "message queue": ["Message Queue", "MQ", "Message Broker"],
  "message broker": ["Message Broker", "MQ", "Message Queue"],
  "event-driven architecture": ["Event-Driven Architecture", "EDA"],
  "event sourcing": ["Event Sourcing", "Event Store"],
  "event store": ["Event Store", "Event Sourcing"],
  "caching": ["Caching", "Cache", "Redis", "Memcached"],
  "redis": ["Redis", "In-Memory Data Store"],
  "memcached": ["Memcached", "In-Memory Data Store"],
  "load balancing": ["Load Balancing", "Load Balancer"],
  "api gateway": ["API Gateway", "API Management"],
  "api management": ["API Gateway", "API Management"],
  "oauth": ["OAuth", "Open Authorization"],
  "openid": ["OpenID", "OpenID Connect"],
  "express": ["Express", "Express.js"],
  "fastapi": ["FastAPI"],
  "nest": ["NestJS", "Nest"],
  "hapi": ["Hapi", "Hapi.js"],
  "apollo": ["Apollo", "Apollo GraphQL"],
  "grpc": ["gRPC"],
  "thrift": ["Thrift"],
  "websocket": ["WebSocket", "Web Sockets"],


  

  // === Fullstack Developer ===
  "fullstack": ["Full Stack", "Fullstack"],
  "frontend": ["Frontend", "Front-end", "Front End"],
  "front-end": ["Frontend", "Front-end", "Front End"],
  "front end": ["Frontend", "Front-end", "Front End"],
  "backend": ["Backend", "Back-end", "Back End"],
  "back-end": ["Backend", "Back-end", "Back End"],
  "back end": ["Backend", "Back-end", "Back End"],
  "frontend & backend developer": ["Full Stack Developer", "Full-Stack Developer", "Fullstack Developer", "FSD", "Frontend & Backend Developer"],
  "localization": ["Localization", "L10n", "Internationalization", "I18n"],
  "internationalization": ["Internationalization", "I18n", "Localization", "L10n"],

  // === Mobile Developer ===
  "android": ["Android"],
  "ios": ["iOS"],
  "flutter": ["Flutter"],
  "reactnative": ["React Native"],

  // === DevOps / Cloud ===
  "aws": ["AWS", "Amazon Web Services"],
  "azure": ["Azure", "Microsoft Azure"],
  "gcp": ["GCP", "Google Cloud Platform", "Google Cloud"],
  "docker": ["Docker"],
  "kubernetes": ["Kubernetes", "K8s"],
  "git": ["Git", "GitHub", "GitLab"],
  "devops": ["DevOps"],
  "cicd": ["CI/CD", "Continuous Integration", "Continuous Deployment"],
  "ci/cd": ["CI/CD", "Continuous Integration", "Continuous Deployment"],
  "linux": ["Linux", "Ubuntu", "Bash", "Shell Scripting"],
  "terraform": ["Terraform", "IaC"],
  "ansible": ["Ansible"],
  "puppet": ["Puppet"],
  "chef": ["Chef"],
  "circleci": ["CircleCI"],
  "travisci": ["TravisCI", "Travis CI"],
  "github actions": ["GitHub Actions", "GH Actions"],
  "gitlab ci": ["GitLab CI", "GitLab CI/CD"],
  "argo": ["Argo CD", "Argo Workflows"],
  "helm": ["Helm", "Kubernetes Helm"],
  "prometheus": ["Prometheus"],
  "nginx": ["Nginx", "NGINX Web Server"],
  "apache": ["Apache", "Apache HTTP Server"],
  "haproxy": ["HAProxy"],
  "load balancer": ["Load Balancer", "Reverse Proxy"],
  "cdn": ["CDN", "Content Delivery Network"],
  "cloudflare": ["Cloudflare"],
  "ibm cloud": ["IBM Cloud", "IBM Cloud Platform"],
  "digitalocean": ["DigitalOcean"],
  "oracle cloud": ["Oracle Cloud", "OCI", "Oracle Cloud Infrastructure"],
  "alibaba cloud": ["Alibaba Cloud", "Aliyun"],
  "linode": ["Linode"],

  //Marketing
  "seo": ["SEO", "Search Engine Optimization", "On-page SEO", "Off-page SEO", "Technical SEO"],
  "search engine optimization": ["SEO", "Search Engine Optimization", "On-page SEO", "Off-page SEO", "Technical SEO"],
  "google analytics": ["Google Analytics", "GA4", "Google Analytics 4", "Web Analytics"],
  "google ads": ["Google Ads", "Google AdWords", "Paid Search", "PPC Google"],
  "facebook ads": ["Facebook Ads", "Meta Ads", "Facebook Advertising", "Facebook Paid Campaigns"],
  "ppc (pay-per-click)": ["PPC", "Pay-Per-Click", "Paid Search", "CPC Marketing"],
  "social media marketing": ["Social Media Marketing", "SMM", "Social Campaigns", "Organic Social", "Paid Social"],
  "content marketing": ["Content Marketing", "Content Strategy", "Content Creation", "Inbound Marketing"],
  "email marketing": ["Email Marketing", "Email Campaigns", "Newsletter Marketing", "Email Automation"],
  "affiliate marketing": ["Affiliate Marketing", "Referral Marketing", "Partner Marketing"],
  "branding": ["Branding", "Brand Strategy", "Brand Identity", "Brand Development"],
  "copywriting": ["Copywriting", "Marketing Copywriting", "Sales Copy", "Ad Copy"],
  "marketing automation": ["Marketing Automation", "Automated Marketing", "Email Automation Tools", "Marketing Workflows"],
  "conversion optimization": ["Conversion Optimization", "CRO", "Conversion Rate Optimization", "Website Optimization"],
  "influencer marketing": ["Influencer Marketing", "Influencer Campaigns", "Influencer Collaborations"],
  "growth hacking": ["Growth Hacking", "Growth Marketing", "Rapid Experimentation"],
  "google tag manager": ["Google Tag Manager", "GTM", "Tag Management"],
  "crm (customer relationship management)": ["CRM", "Customer Relationship Management", "CRM Tools", "Salesforce", "HubSpot CRM"],
  "sem": ["SEM", "Search Engine Marketing", "Paid Search Marketing"],
  "search engine marketing": ["Search Engine Marketing", "SEM", "Paid Search"],
  "marketing strategy": ["Marketing Strategy", "Go-to-Market Strategy", "Strategic Marketing", "Digital Strategy"],

  // === QA / Testing ===
  "testing": ["Testing", "Unit Testing", "Integration Testing", "End-to-End", "End-to-End Testing", "Manual Testing", "Automation Testing"],
  "end-to-end": ["E2E", "End-to-End", "End to End"],
  "jest": ["Jest"],
  "cypress": ["Cypress"],
  "selenium": ["Selenium"],
  "selenide": ["Selenide"],
  "webdriverio": ["WebdriverIO"],
  "testcafe": ["TestCafe"],
  "cucumber": ["Cucumber", "Gherkin"],
  "playwright": ["Playwright", "Playwright Testing"],
  "playwright": ["Playwright"],
  "mocha": ["Mocha"],
  "chai": ["Chai"],
  "junit": ["JUnit"],
  "testng": ["TestNG"],
  "postman": ["Postman", "API Testing", "Postman Collections"],
  "soapui": ["SoapUI"],
  "rest assured": ["Rest Assured", "RestAssured"],
  "robot framework": ["Robot Framework"],
  "appium": ["Appium", "Mobile Automation"],
  "browser stack": ["BrowserStack"],
  "saucelabs": ["Sauce Labs"],
  "qtp": ["QTP", "QuickTest Professional", "UFT", "Unified Functional Testing"],
  "loadtesting": ["Load Testing", "Performance Testing", "Stress Testing"],
  "jmeter": ["JMeter", "Apache JMeter"],
  "k6": ["k6", "Grafana k6"],
  "bug tracking": ["Bug Tracking", "Bug Reporting", "Issue Tracking"],
  "testcase": ["Test Cases", "Test Plans", "Test Scenarios"],
  "test management": ["Test Management", "TestRail", "Zephyr", "Xray"],
  "tdd": ["TDD", "Test-Driven Development"],
  "test driven development": ["TDD", "Test-Driven Development"],
  "bdd": ["BDD", "Behavior-Driven Development", "Cucumber", "SpecFlow", "Gherkin"],
  "behavior-driven development": ["BDD", "Behavior-Driven Development", "Cucumber", "SpecFlow", "Gherkin"],
  "regression": ["Regression Testing"],
  "smoke testing": ["Smoke Testing"],
  "uat": ["UAT", "User Acceptance Testing", "User Acceptance",],
  "user acceptance testing": ["UAT", "User Acceptance Testing", "User Acceptance"],
  "uvt": ["UVT", "User Verification Testing", "User Verification"],
  "user verification testing": ["UVT", "User Verification Testing", "User Verification"],
  "qa automation": ["QA Automation", "Automation Engineer"],
  "manual qa": ["Manual QA", "Manual Tester"],
  "quality assurance": ["Quality Assurance", "QA"],
  "e2e": ["E2E", "E2E Testing", "End-to-End Testing", "End to End Testing"],
  "end-to-end testing": ["E2E", "E2E Testing", "End-to-End Testing", "End to End Testing"],
  "end to end testing": ["E2E", "E2E Testing", "End-to-End Testing", "End to End Testing"],
  "e2e testing": ["E2E", "E2E Testing", "End-to-End Testing", "End to End Testing"],
  "cross browser testing": ["Cross-browser Testing", "Cross Browser Testing", "Crossbrowser Testing"],
  "crossbrowser testing": ["Cross-browser Testing", "Cross Browser Testing", "Crossbrowser Testing"],
  "cross-browser testing": ["Cross-browser Testing", "Cross Browser Testing", "Crossbrowser Testing"],
  "code quality metrics": ["Code Quality Metrics", "Code Quality Analysis", "Code Quality Tools"],
  "jest": ["Jest"],
  "mocha": ["Mocha"],
  "chai": ["Chai"],
  "cypress": ["Cypress"],
  "selenium": ["Selenium"],
  "playwright": ["Playwright"],
  "puppeteer": ["Puppeteer"],
  "postman": ["Postman"],
  "soapui": ["SoapUI"],
  

  // === Data / Machine Learning / AI ===
  "machine learning": ["Machine Learning", "ML"],
  "deep learning": ["Deep Learning"],
  "tensorflow": ["TensorFlow"],
  "pytorch": ["PyTorch"],
  "scikitlearn": ["Scikit-learn"],
  "data": ["Data Science", "Data Analysis"],
  "pandas": ["Pandas"],
  "numpy": ["NumPy"],
  "cassandra": ["Cassandra"],
  "redis": ["Redis"],
  "elasticsearch": ["Elasticsearch"],
  "kibana": ["Kibana"],
  "logstash": ["Logstash"],
  "opensearch": ["OpenSearch"],
  "timescaledb": ["TimescaleDB"],
  "influxdb": ["InfluxDB"],
  "neo4j": ["Neo4j", "Graph Database"],
  "sql": ["SQL", "Structured Query Language"],

  // === Security / Cybersecurity ===
  "security": ["Security", "Cybersecurity", "Information Security", "Infosec"],
  "network security": ["Network Security", "Firewall Configuration", "IDS", "IPS"],
  "appsec": ["Application Security", "AppSec"],
  "cloudsecurity": ["Cloud Security", "AWS Security", "Azure Security", "GCP Security"],
  "vulnerability": ["Vulnerability Assessment", "Vulnerability Scanning"],
  "pentesting": ["Penetration Testing", "Ethical Hacking", "Red Teaming"],
  "threat modeling": ["Threat Modeling"],
  "incidentresponse": ["Incident Response", "IR"],
  "siem": ["SIEM", "Security Information and Event Management", "Splunk", "LogRhythm", "QRadar"],
  "firewall": ["Firewall", "Network Firewall", "Next-Gen Firewall"],
  "idsips": ["IDS", "IPS", "Intrusion Detection System", "Intrusion Prevention System"],
  "encryption": ["Encryption", "Cryptography", "SSL", "TLS", "PKI"],
  "iam": ["IAM", "Identity and Access Management"],
  "zerotrust": ["Zero Trust", "Zero Trust Architecture"],
  "compliance": ["Compliance", "GDPR", "HIPAA", "SOC 2", "ISO 27001"],
  "risk management": ["Risk Management", "Security Risk Assessment"],
  "forensics": ["Digital Forensics", "Computer Forensics"],
  "osint": ["OSINT", "Open Source Intelligence"],
  "malware": ["Malware Analysis", "Reverse Engineering"],
  "social engineering": ["Social Engineering", "Phishing Prevention"],
  "security tools": ["Wireshark", "Metasploit", "Nmap", "Burp Suite", "Nessus", "Kali Linux", "OpenVAS", "Snort"],
  "security awareness": ["Security Awareness", "Security Training"],
  "devsecops": ["DevSecOps", "Secure SDLC", "Security in CI/CD"],
  "oauth": ["OAuth", "OAuth 2.0"],
  "oidc": ["OIDC", "OpenID Connect"],
  "saml": ["SAML", "SAML 2.0"],
  "jwt": ["JWT", "JSON Web Token"],
  "certbot": ["Certbot", "Let's Encrypt"],
  "let's encrypt": ["Let's Encrypt", "Free SSL"],
  "ssl": ["SSL", "TLS", "Secure Sockets Layer", "Transport Layer Security"],


  // === Project Management Tools ===
  "jira": ["Jira", "Atlassian Jira"],
  "trello": ["Trello"],
  "asana": ["Asana"],
  "monday": ["Monday", "Monday.com"],
  "clickup": ["ClickUp"],
  "notion": ["Notion"],
  "confluence": ["Confluence"],
  "slack": ["Slack"],
  "msteams": ["Microsoft Teams", "MS Teams", "Teams"],
  "basecamp": ["Basecamp"],
  "wrike": ["Wrike"],
  "zoho": ["Zoho Projects", "Zoho"],
  "airtable": ["Airtable"],
  "smartsheet": ["Smartsheet"],
  "linear": ["Linear"],
  "clubhouse": ["Clubhouse", "Shortcut"],  // Shortcut is the new name for Clubhouse

  // === Web Designer Skills and Tools ===
  "figma": ["Figma"],
  "adobexd": ["Adobe XD", "XD"],
  "sketch": ["Sketch"],
  "photoshop": ["Photoshop", "Adobe Photoshop"],
  "illustrator": ["Illustrator", "Adobe Illustrator"],
  "canva": ["Canva"],
  "ux": ["UX", "User Experience"],
  "ui": ["UI", "User Interface"],
  "wireframing": ["Wireframing", "Wireframes"],
  "wireframes": ["Wireframing", "Wireframes"],
  "prototyping": ["Prototyping", "Interactive Prototypes"],
  "responsive": ["Responsive Design", "Mobile-First Design"],
  "accessibility": ["Accessibility", "WCAG", "A11y", "EEA"],
  "typography": ["Typography", "Web Typography"],
  "color": ["Color Theory", "Color Palettes", "Color Accessibility"],
  "design systems": ["Design Systems", "Component Libraries"],
  "branding": ["Branding", "Brand Guidelines", "Visual Identity"],
  "usability": ["Usability", "Usability Testing"],
  "interaction design": ["Interaction Design", "Microinteractions"],
  "storyboarding": ["Storyboarding", "User Flow Diagrams"],

  // === HR / Recruiter Skills and Tools ===
"ats": ["ATS", "Applicant Tracking System", "Applicant Tracking Systems"],
"workday": ["Workday"],
"success factors": ["SAP SuccessFactors", "SuccessFactors"],
"bamboohr": ["BambooHR"],
"greenhouse": ["Greenhouse"],
"lever": ["Lever"],
"smart recruiters": ["SmartRecruiters", "Smart Recruiters"],
"recruitee": ["Recruitee"],
"jobvite": ["Jobvite"],
"icims": ["iCIMS"],
"linkedin recruiter": ["LinkedIn Recruiter", "LinkedIn Talent Solutions"],
"boolean search": ["Boolean Search", "Boolean Strings"],
"sourcing": ["Sourcing", "Talent Sourcing"],
"screening": ["Candidate Screening", "Resume Screening"],
"interviewing": ["Interviewing", "Behavioral Interviews", "Structured Interviews"],
"onboarding": ["Onboarding", "Employee Onboarding"],
"offboarding": ["Offboarding", "Exit Interviews"],
"talent acquisition": ["Talent Acquisition", "TA"],
"hris": ["HRIS", "Human Resource Information System"],
"compliance": ["HR Compliance", "Labor Laws", "EEO", "GDPR", "OFCCP"],
"people analytics": ["People Analytics", "HR Analytics"],
"employee wellbeing": ["Employee Wellbeing", "Employee Wellness"],
"payroll": ["Payroll", "Payroll Systems"],
"benefits": ["Benefits Administration", "Employee Benefits"],
"training": ["Training & Development", "L&D", "Learning and Development"],
"performance": ["Performance Management", "Performance Reviews"],
"culture": ["Company Culture", "Employee Engagement"],
"diversity": ["Diversity and Inclusion", "DEI", "D&I"],
"headhunting": ["Headhunting", "Executive Search"],
"tech talent acquisition": ["Tech Talent Acquisition", "Technical Recruiter", "Technical Talent Acquisition"],
"talent management": ["Talent Management", "Talent Development"],

// === Accessibility Skills and Tools ===

// General Accessibility Concepts
"accessibility": ["Accessibility", "A11y", "Inclusive Design", "Universal Design", "WCAG", "Web Content Accessibility Guidelines"],
"section 508": ["Section 508", "Section 508 Compliance"],
"aria": ["ARIA", "Accessible Rich Internet Applications"],
"screen readers": ["Screen Readers", "NVDA", "JAWS", "VoiceOver"],
"keyboard navigation": ["Keyboard Navigation", "Tab Order", "Focus Management"],
"color contrast": ["Color Contrast", "Contrast Ratio", "Color Accessibility"],

// Web Developers
"semantic html": ["Semantic HTML", "Proper HTML5 Elements"],
"alt text": ["Alt Text", "Image Descriptions"],
"form accessibility": ["Accessible Forms", "Labeling", "Error Handling"],
"responsive accessibility": ["Responsive Accessibility", "Mobile Accessibility"],
"accessibility testing": ["Accessibility Testing", "Automated Accessibility Testing"],

// Designers / UX Professionals
"accessible ux": ["Accessible UX", "User Experience Design for Accessibility"],
"color blind friendly": ["Color Blind Friendly Design"],
"color blind friendly design": ["Color Blind Friendly Design"],
"typography accessibility": ["Accessible Typography", "Readable Fonts"],
"contrast tools": ["Contrast Checkers", "Color Oracle", "Stark"],
"design systems accessibility": ["Accessible Design Systems", "Component Accessibility"],

// QA / Testing Professionals
"manual accessibility testing": ["Manual Accessibility Testing"],
"axe": ["Axe", "Deque Axe"],
"lighthouse": ["Google Lighthouse", "Accessibility Audits"],
"pa11y": ["Pa11y"],
"tenon": ["Tenon"],
"screen readertesting": ["Screen Reader Testing"],
"automation accessibility": ["Accessibility Automation Testing"],
"IntelliJ IDEA": ["IntelliJ IDEA", "JetBrains IntelliJ IDEA"],
"jetvbrains": ["JetBrains", "JetBrains IDEs"],
"jetbrains intelliJ": ["JetBrains IntelliJ", "JetBrains IDEs"],
"jetbrains pycharm": ["JetBrains PyCharm", "JetBrains IDEs"],
"jetbrains webstorm": ["JetBrains WebStorm", "JetBrains IDEs"],
"eclipse": ["Eclipse", "Eclipse IDE"],
"swagger": ["Swagger", "OpenAPI"],
"openapi": ["OpenAPI", "Swagger"],
"postman": ["Postman", "API Testing", "Postman Collections"],
"accessibility checker": ["Accessibility Checker", "Automated Accessibility Testing"],
"test management systems": ["Test Management Systems", "TestRail", "Zephyr", "Xray"],
"test management": ["Test Management", "Test Management Systems", "TestRail", "Zephyr", "Xray"],

// Content Creators / Writers
"plain language": ["Plain Language", "Clear Writing"],
"captioning": ["Captioning", "Subtitles"],
"transcripts": ["Transcripts", "Audio Description"],
"structured content": ["Structured Content", "Headings and Lists"],

// Tools common across roles
"w3c validator": ["W3C Validator"],
"contrast checker": ["Contrast Checker Tools"],
"axe chrome": ["Axe Chrome Extension", "Axe Chrome", "Axe Devtools", "Axechrome"],
"axe devtools": ["Axe Chrome Extension", "Axe Chrome", "Axe Devtools", "Axechrome"],
"wave tool": ["WAVE Tool", "WAVE Chrome Extension", "WAVE Firefox Extension"], 
"wave": ["WAVE", "Web Accessibility Evaluation Tool"],

// Policy and Compliance (for Managers/Policy Makers)
"accessibility policy": ["Accessibility Policy", "Digital Accessibility Policy"],
"legal compliance": ["ADA Compliance", "Accessibility Laws", "Section 504", "European Accessibility Act"],

// Assistive Technologies (End-User Focus)
"braille": ["Braille Displays"],
"voice control": ["Voice Control", "Speech Recognition"],
"speech recognition": ["Voice Control", "Speech Recognition"],
"magnifiers": ["Screen Magnifiers"],


//AI
"chatgpt": ["ChatGPT", "GPT-3", "GPT-4"],
"gpt": ["GPT-3", "GPT-4", "Generative Pre-trained Transformer"],
"openai": ["OpenAI", "Open AI"],
"gemini": ["Gemini",],
"llm": ["LLM", "Large Language Model"],
"nlp": ["NLP", "Natural Language Processing"],
"computer vision": ["Computer Vision", "CV"],
"image recognition": ["Image Recognition", "Object Detection"],
"speech recognition": ["Speech Recognition", "Voice Recognition"],
"deepfake": ["Deepfake", "Deep Fake"],
"prompt engineering": ["Prompt Engineering", "Prompt Design"],
"data science": ["Data Science", "Data Analysis", "Data Analytics"],
"data engineering": ["Data Engineering", "Data Pipeline", "ETL"],
"data visualization": ["Data Visualization", "Data Viz"],
"big data": ["Big Data", "Hadoop", "Spark"],
"data mining": ["Data Mining", "Data Extraction"],
"data wrangling": ["Data Wrangling", "Data Cleaning", "Data Preparation"],
"data modeling": ["Data Modeling", "Data Architecture"],
"data governance": ["Data Governance", "Data Management"],
"data privacy": ["Data Privacy", "Data Protection", "GDPR", "CCPA"],
"data ethics": ["Data Ethics", "Responsible AI", "Fairness in AI"],
"data storytelling": ["Data Storytelling", "Data Narratives"],
"data analysis": ["Data Analysis", "Data Analytics"],
"data analyst": ["Data Analyst", "Data Analysis", "Data Analytics"],
"data scientist": ["Data Scientist", "Data Science", "Data Analysis", "Data Analytics"],
"data engineer": ["Data Engineer", "Data Engineering", "Data Pipeline", "ETL"],
"data visualization": ["Data Visualization", "Data Viz"],
"data mining": ["Data Mining", "Data Extraction"],
"data wrangling": ["Data Wrangling", "Data Cleaning", "Data Preparation"],
"data modeling": ["Data Modeling", "Data Architecture"],
"data governance": ["Data Governance", "Data Management"],
"ef core": ["Entity Framework Core", "EF Core"],
"entity framework": ["Entity Framework", "EF"],
"entity framework core": ["Entity Framework Core", "EF Core"],
"sql server": ["SQL Server", "Microsoft SQL Server"],
"nosql": ["NoSQL", "Non-relational Database"],
"nosql databases": ["NoSQL Databases", "Non-relational Databases"],
"cloud databases": ["Cloud Databases", "Cloud Database Management"],
"cloud computing": ["Cloud Computing", "Cloud Services"],
".net 8.0": [".NET 8.0", ".NET Core 8.0", ".NET 8"],
".net 7.0": [".NET 7.0", ".NET Core 7.0", ".NET 7"],



//Compliance
"rbac": ["RBAC", "Role-Based Access Control"],
"abac": ["ABAC", "Attribute-Based Access Control"],
"iam": ["IAM", "Identity and Access Management"],
"identity management": ["Identity Management", "Identity Governance"],
"access management": ["Access Management", "Access Control"],
"identity governance": ["Identity Governance", "Identity Management"],
"identity and access management": ["IAM", "Identity and Access Management"],
"identity and access governance": ["Identity Governance", "Identity Management"],
"identity and access management governance": ["IAM Governance", "Identity Governance", "Identity Management"],
"identity and access governance management": ["IAM Governance", "Identity Governance", "Identity Management"],
"mfa": ["MFA", "Multi-Factor Authentication"],
"two-factor authentication": ["2FA", "Two-Factor Authentication"],


//SAP
"o-data": ["O-Data", "OData"],
"odata": ["O-Data", "OData"],
"x-data": ["X-Data", "XData"],
"xdata": ["X-Data", "XData"],
"rest": ["REST", "Rest", "REST API", "RESTful", "RESTful API", "Representational State Transfer"],
"restful": ["RESTful", "RESTful API", "RESTful service", "REST architecture"],

// CDS / HANA
  "cds": ["CDS", "Core Data Services", "CDS View", "CDS Views", "CDS Modeling"],
  "core data services": ["CDS", "Core Data Services", "CDS Views"],
  "hana": ["HANA", "SAP HANA", "HANA DB", "HANA Database", "SAP HANA Database", "SAP HANA DB", "In-Memory HANA"],
  "hana db": ["HANA DB", "SAP HANA DB", "HANA Database", "SAP HANA"],
  "cds-hana": ["CDS/HANA", "CDS and HANA", "Core Data Services on HANA"],
// Restful Application Programming
  "rap": ["RAP", "SAP RAP", "Restful Application Programming Model", "Restful ABAP Programming", "ABAP RAP"],
  "restful abap programming": ["RAP", "SAP RAP", "Restful Application Programming Model", "Restful ABAP Programming", "ABAP RAP"],
  "restful application programming": [
    "Restful Application Programming",
    "Restful Application Programming Model",
    "SAP RAP",
    "RAP Model",
    "Restful ABAP",
    "ABAP RAP"
  ],

  // SAP Fiori UI
  "fiori": [
    "SAP Fiori",
    "Fiori",
    "Fiori UI",
    "SAP Fiori UI",
    "SAP Fiori UX",
    "Fiori User Interface",
    "SAP Fiori Apps",
    "Fiori Applications",
    "Fiori Elements",
    "Fiori Launchpad",
    "Fiori Design Guidelines"
  ],
  "sap fiori": [
    "SAP Fiori",
    "SAP Fiori UI",
    "SAP Fiori UX",
    "SAP Fiori Applications",
    "SAP Fiori Launchpad",
    "Fiori Elements"
  ],
  "sapui5": ["SAPUI5", "UI5", "SAP UI5", "SAP Fiori UI"],
  "sap fiori ui": ["SAPUI5", "UI5", "SAP UI5", "SAP Fiori UI"],
  "sap ui5": ["SAPUI5", "UI5", "SAP UI5", "SAP Fiori UI"],
  "ui5": ["SAPUI5", "UI5", "SAP UI5", "Fiori UI"]






};


function expandMandatorySkills(skills) {
  if (!isExpansionEnabled()) return skills.map(quoteIfNeeded);
  
  const flatSet = new Set();

  return skills.map(skill => {
    const key = skill.trim().toLowerCase();
    const expansions = mandatorySkillExpansions[key];

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
      const cleaned = quoteIfNeeded(skill);
      const lower = cleaned.toLowerCase();
      if (flatSet.has(lower)) return null;
      flatSet.add(lower);
      return cleaned;
    }
  }).filter(Boolean);
}

function expandNiceSkills(skills) {
  if (!isExpansionEnabled()) return skills.map(quoteIfNeeded);

  const flatSet = new Set();

  return skills.map(skill => {
    const key = skill.trim().toLowerCase();
    const expansions = mandatorySkillExpansions[key];

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
      const cleaned = quoteIfNeeded(skill);
      const lower = cleaned.toLowerCase();
      if (flatSet.has(lower)) return null;
      flatSet.add(lower);
      return cleaned;
    }
  }).filter(Boolean);
}