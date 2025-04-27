// --- DATA SOURCES ---
const jobTitleSuggestions = [
    "Product Manager", "Senior Product Manager", "Junior Product Manager",
    "Associate Product Manager", "Technical Product Manager", "Product Owner",
    "Digital Product Manager", "Lead Product Manager", "Group Product Manager",
    "Director of Product Management", "VP of Product", "Product Strategy Manager",
    "Product Development Manager",
    
    "Data Scientist", "Senior Data Scientist", "Junior Data Scientist",
    "Lead Data Scientist", "Machine Learning Scientist", "Applied Scientist",
    "Research Scientist", "Data Science Engineer", "AI Data Scientist",
    "Business Data Scientist", "Quantitative Researcher", "Quantitative Analyst (Quant)",
    
    "UI/UX Designer", "Senior UI/UX Designer", "Junior UI/UX Designer",
    "UX Designer", "UI Designer", "Product Designer", "Interaction Designer",
    "User Experience Researcher", "UX Researcher", "Visual Designer",
    "UX Architect", "Mobile UX Designer", "Web UI Designer", "UX Strategist",
    
    "Sales Representative", "Sales Associate", "Account Executive", "Account Manager",
    "Inside Sales Representative", "Outside Sales Representative", "Field Sales Representative",
    "Sales Development Representative (SDR)", "Business Development Representative (BDR)",
    "Territory Sales Manager", "Regional Sales Manager", "Enterprise Sales Executive",
    "Retail Sales Associate",
    
    "Graphic Designer", "Senior Graphic Designer", "Junior Graphic Designer",
    "Visual Designer", "Brand Designer", "Creative Designer",
    "Digital Designer", "Motion Graphic Designer", "3D Designer",
    "Production Artist", "Visual Content Creator", "Marketing Designer",
    "Print Designer", "Multimedia Designer",
    
    "Project Manager", "Senior Project Manager", "Junior Project Manager",
    "Technical Project Manager", "IT Project Manager", "Agile Project Manager",
    "Scrum Master", "Program Manager", "Project Coordinator",
    "Project Leader", "Implementation Manager", "Project Director",
    "Operations Project Manager",
    
    "DevOps Engineer", "Senior DevOps Engineer", "Junior DevOps Engineer",
    "Cloud DevOps Engineer", "DevOps Specialist", "Infrastructure Engineer",
    "Site Reliability Engineer (SRE)", "Platform Engineer", "Systems Reliability Engineer",
    "Automation Engineer", "Build and Release Engineer", "CI/CD Engineer",
    "DevOps Architect",

    "Software Engineer", "Senior Software Engineer", "Junior Software Engineer",
    "Frontend Engineer", "Backend Engineer", "Full Stack Engineer", "Full Stack Developer",
    "Frontend Developer", "Backend Developer", "Application Developer", "Mobile App Developer",
    "iOS Developer", "Android Developer", "Web Developer", "Embedded Software Engineer",
    "Cloud Engineer", "Platform Engineer", "Machine Learning Engineer", "AI Engineer",
    "Data Engineer", "DevOps Engineer", "Site Reliability Engineer (SRE)",
    "Security Engineer", "Software Architect", "Solutions Architect", "Technical Lead",
    "Software Development Engineer (SDE)", "Systems Engineer", "Game Developer", "Unity Developer",
    "Unreal Engine Developer", "Blockchain Developer", "Smart Contract Developer",
    "Software Development Manager", "Engineering Manager", "CTO (Chief Technology Officer)",

    "Marketing Specialist", "Marketing Manager", "Digital Marketing Specialist", "Digital Marketing Manager",
    "Social Media Specialist", "Social Media Manager", "Content Marketing Specialist", "Content Marketing Manager",
    "SEO Specialist", "SEO Manager", "PPC Specialist", "PPC Manager", "Email Marketing Specialist",
    "Email Marketing Manager", "Growth Marketing Manager", "Performance Marketing Specialist",
    "Performance Marketing Manager", "Brand Manager", "Brand Marketing Specialist", "Product Marketing Manager",
    "Product Marketing Specialist", "Marketing Communications Specialist", "Marketing Communications Manager",
    "Affiliate Marketing Manager", "Affiliate Marketing Specialist", "Influencer Marketing Specialist",
    "Influencer Marketing Manager", "Event Marketing Specialist", "Event Marketing Manager",
    "Demand Generation Manager", "B2B Marketing Specialist", "B2C Marketing Specialist", "Trade Marketing Specialist",
    "Marketing Campaign Manager", "Advertising Specialist", "Advertising Manager", "Market Research Analyst",
    "Market Research Manager", "Media Buyer", "Media Planner", "Community Manager", "Content Strategist",
    
    "HR Specialist", "HR Manager", "HR Assistant", "HR Coordinator", "HR Generalist", "HR Business Partner",
    "Talent Acquisition Specialist", "Talent Acquisition Manager", "Recruiter", "Technical Recruiter",
    "Human Resources Director", "Human Resources Assistant", "Human Resources Manager",
    "Employee Relations Specialist", "People Operations Specialist", "People Operations Manager",
    "Compensation and Benefits Specialist", "HR Consultant", "HR Administrator",
    "Staffing Specialist", "Organizational Development Specialist", "Training and Development Manager",
    "HRIS Analyst (Human Resources Information Systems Analyst)",

    "QA Engineer", "QA Analyst", "QA Tester", "Quality Assurance Engineer", "Quality Assurance Analyst",
    "Software QA Engineer", "QA Automation Engineer", "QA Automation Tester", "QA Manual Tester",
    "Quality Engineer", "Test Engineer", "Software Tester", "Quality Assurance Specialist",
    "QA Lead", "Senior QA Engineer", "Junior QA Engineer", "Manual QA Tester", "Automation QA Tester",
    "SDET (Software Development Engineer in Test)", "Quality Assurance Manager", "Quality Assurance Technician",
    "QA Coordinator", "QA Consultant", "Testing Specialist", "Test Automation Engineer", "Quality Control Analyst",
    "Quality Assurance Associate", "Functional Tester", "Performance Tester", "Regression Tester"
];

const seniorityLevelsSuggestions = [
    "Senior", "Junior", "Lead", "Manager", "Director", "VP", "c-level", "Intern", "Associate", "Analyst",
];

// --- CONFIG ---
const suggestionSources = {
    "jobTitles": jobTitleSuggestions,
    "excludeJobTitles": jobTitleSuggestions,
    "seniorityLevels": seniorityLevelsSuggestions,
    "excludeseniorityLevels": seniorityLevelsSuggestios
};

// --- FUNCTIONS ---
function displaySuggestions(input, suggestions, sectionId) {
    clearSuggestions(sectionId);

    const suggestionContainer = document.createElement("div");
    suggestionContainer.classList.add("suggested-results");

    suggestions.forEach(suggestion => {
        const suggestionElement = document.createElement("div");
        suggestionElement.classList.add("suggestion");
        suggestionElement.textContent = suggestion;
        suggestionElement.onclick = () => {
            input.value = suggestion;
            clearSuggestions(sectionId);
        };
        suggestionContainer.appendChild(suggestionElement);
    });

    document.getElementById(sectionId).appendChild(suggestionContainer);
}

function filterSuggestions(input, sectionId) {
    const query = input.value.toLowerCase();
    const allSuggestions = suggestionSources[sectionId] || [];
    const filtered = allSuggestions.filter(item => item.toLowerCase().startsWith(query));

    if (query.length === 0 || !filtered.length) {
        clearSuggestions(sectionId);
        return;
    }

    displaySuggestions(input, filtered, sectionId);
}

function clearSuggestions(sectionId) {
    const suggestionContainers = document.querySelectorAll(`#${sectionId} .suggested-results`);
    suggestionContainers.forEach(container => container.remove());
}

// --- CLICK OUTSIDE TO CLOSE ---
document.addEventListener("click", (event) => {
    const allInputs = [
        { inputId: "jobTitlesInput", containerId: "jobTitles" },
        { inputId: "excludeJobTitlesInput", containerId: "excludeJobTitles" },
        { inputId: "seniorityLevelsInput", containerId: "seniorityLevels" },
        { inputId: "excludeseniorityLevelsInput", containerId: "excludeseniorityLevels" },
    ];

    allInputs.forEach(({ inputId, containerId }) => {
        const input = document.getElementById(inputId);
        const container = document.getElementById(containerId);

        const clickedInside = input && (input.contains(event.target) || container?.contains(event.target));

        if (!clickedInside) {
            clearSuggestions(containerId);
        }
    });
});
