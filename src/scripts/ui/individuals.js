import { individualSchedule } from '../services/dataProcessor.js';

const students = JSON.parse(sessionStorage.getItem('students'));
const schedule = JSON.parse(sessionStorage.getItem('schedule'));

console.log(schedule);

const table = document.getElementById('schedule-display');

const renderSchedule = student => {
    table.innerHTML = '';
    const sch = individualSchedule(schedule, student);

    for(let row of sch) {
        let r = document.createElement('tr');
        for(let val of row) {
            let col = document.createElement('td');
            col.classList += val == '-' ? 'shaded' : '';
            let text = document.createTextNode(val);
            col.appendChild(text);
            r.appendChild(col);
        }
        table.appendChild(r);
    }
};

const generateStudentList = () => {
    const studentList = document.getElementById('student-list');
    for(let student of students) {
        let li = document.createElement('li');
        let btn = document.createElement('button');
        btn.innerHTML = student.name;

        btn.addEventListener('click', () => renderSchedule(student));

        li.appendChild(btn);
        studentList.appendChild(li);
    }
};


generateStudentList();
renderSchedule(students[0]);