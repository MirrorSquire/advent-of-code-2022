import fs from "fs"

const sum = (a, b) => a + b
fs.readFile('day-1/data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const grouped = data.split(/\n\n/gm)
    const summed = grouped.map((group) =>  group.split(/\n/gm).map(Number).reduce(sum))

    const sorted = [...summed].sort((a, b) =>  b-a)
    console.log("part 1", sorted[0])
    console.log("part 2", sorted.slice(0, 3).reduce(sum))
});
