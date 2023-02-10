// console.log("Hello World")

type Course = {
    courseNumber: string;
    courseName: string;
    semesterTaken: string
};

const courses:Array<Course> = [
    { courseNumber: "ANT 345", courseName: "Global Perspectives", semesterTaken: "Fall 2021"},
    { courseNumber: "CIS 241", courseName: "System Level Programming and Utilities", semesterTaken: "Fall 2021"},
    { courseNumber: "CIS 263", courseName: "Data Structures and Algorithms", semesterTaken: "Winter 2022"},
    { courseNumber: "CIS 351", courseName: "Computer Organization and Assembly", semesterTaken: "Winter 2022"},
    { courseNumber: "CIS 343", courseName: "Structure of Programming Languages", semesterTaken: "Fall 2022"},
    { courseNumber: "CIS 457", courseName: "Data Communications", semesterTaken: "Fall 2022"},
    { courseNumber: "CIS 371", courseName: "Web Application Programming", semesterTaken: "Winter 2023"}
];

const tArea4 = document.getElementById("area4-table");
const coursesTable = document.createElement("table");

for (var course of courses) {
    const row = document.createElement("tr");
    const code = document.createElement("td");
    const className = document.createElement("td");
    const semester = document.createElement("td");
    code.innerText = course.courseNumber;
    className.innerText = course.courseName;
    semester.innerText = course.semesterTaken;
    row.appendChild(code);
    row.appendChild(className);
    row.appendChild(semester);
    coursesTable.appendChild(row);
}

tArea4?.appendChild(coursesTable);

type Company = {
    companyName: string,
    companyUrl: string
}

const companies:Array<Company> = [
    { companyName: "Dow", companyUrl: "https://www.dow.com/en-us" },
    { companyName: "Ford", companyUrl: "https://www.ford.com/" },
    { companyName: "Microsoft", companyUrl: "https://www.microsoft.com/en-us/" }
];

const area6 = document.getElementById("area6-list");
const companyList = document.createElement("ul");
for (var company of companies) {
    const entry = document.createElement("li");
    const link = document.createElement("a");
    link.innerText = company.companyName;
    link.setAttribute("href", company.companyUrl);
    entry.appendChild(link);
    companyList.appendChild(entry);
}

area6?.appendChild(companyList);

type SocialMedia = {
    icon: string,   // this can be a name of a local image or a URL to a remote image
    url: string   // URL of the said social media company
}

const socialMedias:Array<SocialMedia> = [
    { icon: "instagram.png", url: "https://www.instagram.com/" },
    { icon: "facebook.webp", url: "https://www.facebook.com/" },
    { icon: "images.png", url: "https://www.twitter.com/" },
    { icon: "f6e93a06b500b2d87ffd32e1f56f7c6f.jpg", url: "https://www.pinterest.com/" },
    { icon: "amazon.png", url: "https://www.amazon.com/" }
];

const area8 = document.getElementById("area8-icons");
for (var social of socialMedias) {
    const newDiv = document.createElement("span");
    const link = document.createElement("a");
    link.setAttribute("href", social.url);
    const icon = document.createElement("img");
    icon.setAttribute("src", social.icon);
    icon.setAttribute("height", "75")
    link.appendChild(icon)
    newDiv.appendChild(link)
    area8?.appendChild(newDiv)
}