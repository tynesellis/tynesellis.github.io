const resume = [//Array containing objects of data to be pushed to resume page
    {
        name: "Paul Ellis",
        email: "tynesellis@icloud.com",
        introText: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
        work: "Professional Experience",
        job1: "Metropolitan Nashville Police Department",
        job1dates: "Dates of Employment: June, 2008 - September, 2017",
        job1role1: "Field Operations Bureau | Patrol Officer",
        job1role1text: "Description of duties.....................................................",
        job1role2: "Field Operations Bureau | Midnight Flex Team Officer",
        job1role2text: "Description of duties.....................................................",
        job1role3: "Criminal Investigations Division | Domestic Violence Detective",
        job1role3text: "Description of duties.....................................................",
        job2: "Dell, Inc.",
        job2dates: "Dates of Employment: July, 2006 - June, 2008",
        job2role1: "Sales Representative | Business Sales Division",
        job2role1text: "duties.......ha ha..............................",
        job2role2: "Account Manager | Business Sales Division",
        job2role2text: "duties.......ha ha..............................",
        education: "Education",
        school: "Lipscomb University",
        degree: "B.A. Communications | Journalism Concentration | Public Relations Minor"
    }
];


const resumeString = JSON.stringify(resume);//serialize for browser storage
localStorage.setItem("resumeDB", resumeString); //send to browser storage