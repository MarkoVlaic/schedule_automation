import { parse } from '../services/dataParser.js';
import { generateTable } from '../services/helpers.js';

const generateElements = () => {
    const elements = [];
    const days = ['Pon', 'Uto', 'Sri', 'Cet', 'P    qet'];

    for(let day of days) {
        const node = document.createElement('th');
        node.appendChild(document.createTextNode(day));
        elements.push(node);
    }

    for(let i=0;i<40;i++) {
        const input = document.createElement('input', {type: 'text'});
        elements.push(input);
    }

    return elements;
};

const table = document.getElementById('schedule');
const elements = generateElements();
generateTable(elements, 9, 5, table);

const setBtn = document.getElementById('set');
setBtn.addEventListener('click', () => {
    const values = elements.filter((_, i) => i > 4).map(elem => elem.value);
    
    let result = new Array();
    for(let i=0;i<values.length;i++) {
        if(i%5 == 0)result.push(new Array());
        result[Math.floor(i/5)].push(values[i]);
    }
    console.log('this is the result', result);
    sessionStorage.setItem('schedule', JSON.stringify(result));
});

const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', () => {
    Papa.parse(fileInput.files[0], {
        complete: results => {
            const students = parse(results.data);
            sessionStorage.setItem('students', JSON.stringify(students));
        }
    });
});

const uploadBtn = document.getElementById('upload');
uploadBtn.addEventListener('click', () => {
    fileInput.click();
});