const resume = [//Array containing objects of data to be pushed to resume page
    {
        name: "Paul Ellis",
        email: "tynesellis@icloud.com",
        work: "Professional Experience",
        job1: "Metropolitan Nashville Police Department",
        job1dates: "Dates of Employment: June, 2008 - September, 2017",
        job1role1: "Field Operations Bureau | Patrol Officer",
        job1role2: "Field Operations Bureau | Midnight Flex Team Officer",
        job1role3: "Criminal Investigations Division | Domestic Violence Detective",
        job2: "Dell, Inc.",
        job2dates: "Dates of Employment: July, 2006 - June, 2008",
        job2role1: "Sales Representative | Business Sales Division",
        job2role2: "Account Manager | Business Sales Division",
        education: "Education",
        school: "Lipscomb University",
        degree: "B.A. Communications | Journalism Concentration | Public Relations Minor"
    }
];


const resumeString = JSON.stringify(resume);//serialize for browser storage
localStorage.setItem("resumeDB", resumeString); //send to browser storage