/*import { individualSchedule } from './dataProcessor.js';

const schedule = [
    ['hrv', 'pov', 'mat', 'mat', 'tzk', ['lik', 'dra', 'gla']],
    ['teh', 'teh', 'fiz', 'fiz'],
    ['pov', 'mat', ['fra', 'njem', 'nje']],
    ['mat', 'hrv', 'hrv'],
    ['eng', 'bio', 'kem', 'geo']
];

const student = {
    name: 'Klara',
    subjects: ['hrv', 'mat', 'lik', 'kem']
};

console.log(individualSchedule(schedule, student));*/
import { generate } from './intersectProcessor.js';

const students = [
    {
        name: 'a',
        subjects: ['mat', 'bio']
    },
    {
        name: 'b',
        subjects: ['mat', 'fiz']
    },
    {
        name: 'c',
        subjects: ['mat', 'fiz']
    },
    {
        name: 'd',
        subjects: ['bio', 'kem']
    },
    {
        name: 'e',
        subjects: ['kem']
    }
];

console.table(generate(students));