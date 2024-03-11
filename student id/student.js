////////////////////////////////////////////////////////////student.js
let students=[
    {
        id:101,
        name:'Ram Kumar',
        username:"ram",
        pwd:1111,
        gender:"Male",
        marks:[23,45,56,78,47],
        role:"student"
    },
    {
        id:102,
        name:'Venkatesh',
        username:"venky",
        pwd:2222,
        gender:"Male",
        marks:[78,96,92,67,79],
        role:"admin"
    },
    {
        id:103,
        name:'Dhruva Kumar',
        username:"dhruva",
        pwd:3333,
        gender:"Male",
        marks:[56,89,45,67,81],
        role:"student"
    },
    {
        id:104,
        name:'Jyothsna',
        username:"jyothsna",
        pwd:4444,
        gender:"Female",
        marks:[47,36,89,73,65],
        role:"student"
    }
];

let maxMarks=500;

//total marks
function totalMarks(marks)
{
    let total=0;
    for(let m of marks)
    {
        total=total+m;
    }
    return total;
}

//find percentage

function getPercentage(marks)
{
    let total=totalMarks(marks);
    let percentage=((total/maxMarks)*100).toFixed(0);
    return percentage;
}

//Pass Or Fail

function hasPass(marks)
{
    if(marks[0]<=35||marks[1]<=35||marks[2]<=35||marks[3]<=35||marks[4]<=35)
    {
        return "Fail";
    }
    else
    {
        return "Pass";
    }
}

// Display only passed students
function displayPassedStudents(students) {
    if (students.length > 0) {
        let passedStudents = students.filter(student => hasPass(student.marks) === "Pass");

        if (passedStudents.length > 0) {
            let eachStudent = ``;
            passedStudents.forEach((student) => {
                let total = totalMarks(student.marks);
                let percentage = getPercentage(student.marks);
                let isPass = hasPass(student.marks);

                eachStudent += `<tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.gender}</td>
                    <td>${percentage}%</td>
                    <td>${isPass}</td>
                </tr>`;
            });

            document.getElementById('table-section').innerHTML = eachStudent;
        } else {
            document.getElementById('table-section').innerHTML = `<tr><td colspan="5">No students have passed</td></tr>`;
        }
    }
}

function displayFailedStudents(students) {
    if (students.length > 0) {
        let passedStudents = students.filter(student => hasPass(student.marks) === "Fail");

        if (passedStudents.length > 0) {
            let eachStudent = ``;
            passedStudents.forEach((student) => {
                let total = totalMarks(student.marks);
                let percentage = getPercentage(student.marks);
                let isPass = hasPass(student.marks);

                eachStudent += `<tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.gender}</td>
                    <td>${percentage}%</td>
                    <td>${isPass}</td>
                </tr>`;
            });

            document.getElementById('table-section').innerHTML = eachStudent;
        } else {
            document.getElementById('table-section').innerHTML = `<tr><td colspan="5">No students have failed</td></tr>`;
        }
    }
}

//Display Student Details In Admin Section

function displayStudents(students)
{
    if(students.length>0)
    {
        let eachStudent=``;
        students.forEach((student)=>
        {
            let total=totalMarks(student.marks);
            let percentage=getPercentage(student.marks);
            let isPass=hasPass(student.marks);

            eachStudent+=`<tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${percentage}%</td>
            <td>${isPass}</td>
        </tr>`
        });
        document.getElementById('table-section').innerHTML=eachStudent;
    }
}
displayStudents(students);
