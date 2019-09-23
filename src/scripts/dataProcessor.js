/**
 * 
 * Generates a schedule for a single student given the overall schedule and a student object
 * 
 * @param {string[][]} schedule - A 2d array representing the schedule for a week. It is indexed as schedule[i][j] where i is a day of the week (a number from 0-4) and j is the number of the period
 * @param {Object} student -  An object describing a single student
 * @param {string} student.name - The student's name
 * @param {string[]} student.subjects - List of subjects this student is attending 
 */

export let individualSchedule = (schedule, student) => schedule.map(day => day.map(period => checkPeriod(student.subjects, period)));

/**
 * 
 * @param {any[]} arr - list of student's subjects
 * @param {any|any[]} elem A period that needs to be checked or an array containing many periods that need to be checked
 */

let checkPeriod = (subjects, elem) => { 
    if(elem instanceof Array) {
        for(let item of elem) {
            if (subjects.includes(item)) return item;
        } 
    } else {
        if(subjects.includes(elem)) return elem;
    }

    return '-';
};