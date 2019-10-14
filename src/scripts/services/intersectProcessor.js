import { intersect } from './helpers.js';

/**
 * Generate pairs of all the subjects that can be put together at the same time with no common students
 * @param {Object[]} students - Array of student objects
 * @param {string} students[].name - Student's name
 * @param {string[]} students[].subjects - List of subjects this student is attending
 */
export const generate = students => {
    let graph = generateGraph(students);
    graph = removeEdges(graph, students);

    return graph;
};

/**
 * Generates a fully connected graph where nodes are subjects
 * @param {Object[]} students - Array of student objects
 * @param {string} students[].name - Student's name
 * @param {string[]} students[].subjects - List of subjects this student is attending
 */
const generateGraph = students => {
    const sets = students.map(student => student.subjects);
    const reducer = (acc, subjects) => {
        for(let subject of subjects) acc.add(subject);
        return acc;
    };
    const unique = sets.reduce(reducer, new Set()); // A list of all subjects with no repetition

    let graph = {};

    for(let node1 of unique) {
        for(let node2 of unique) {
            if(node1 !== node2) {
                if(!graph[node1])graph[node1] = [];
                graph[node1].push(node2);
            }
        }
    }

    return graph;
};

/**
 * Generates an object with subjects as keys and values as arrays of students attending that class
 * @param {Object[]} students - Array of student objects
 * @param {string} students[].name - Student's name
 * @param {string[]} students[].subjects - List of subjects this student is attending
 */
const groupBySubject = students => {
    let result = {};
    for(let student of students) {
        for(let subject of student.subjects) {
            if(!result[subject])result[subject] = [];
            result[subject].push(student.name);
        }
    }

    return result;
};

/**
 * Since a student can't listen to two subjects at the same time the edges are removed between subjects that overlap
 * @param {Object} graph - An object representing the graph (see generateGraph)
 */
const removeEdges = (graph, students) => {
    const subjectStudentList = groupBySubject(students);

    for(let node1 in graph) {
        for(let node2 of graph[node1]) {
            if(intersect(subjectStudentList[node1], subjectStudentList[node2]).length !== 0){
                graph[node1].splice(graph[node1].indexOf(node2), 1);
                graph[node2].splice(graph[node2].indexOf(node1), 1);
            }
        }
    }

    return graph;
};