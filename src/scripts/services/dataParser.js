/**
 * 
 * @param {Array[][]} table - data returned from reading a csv file
 */
export const parse = table => {
    // Clean the data up
    //console.table(table);
    table[0].splice(0, 4);
    //let skipCols = [];
    const subjectList = table[0].map((e, i) => e ? e: table[0][i-1]).filter((_, i) => i < 27);
    table.splice(0, 2);

    console.log(subjectList);
    let results = [];
    for(let row of table) {
        const name = row[2];
        if(!name)break; // We've reached the end of the list
        //console.log(name);
        row.splice(0, 4); 
        row.splice(30, row.length);
        let subjects = [];

        for(let i=0;i<row.length;i++) {
            if(row[i]) subjects.push(subjectList[i]);
        }

        results.push({ name, subjects });
    } 

    return results;
};