function add(numbers) {
    if (!numbers) return 0;

    let delimiter = ",";
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = parts[0].slice(2);
        numbers = parts[1];
    }

    const numberList = numbers.replace(/\n/g, delimiter).split(delimiter);
    const total = numberList.reduce((sum, num) => {
        const number = parseInt(num, 10);
        if (number < 0) {
            throw new Error("negative numbers not allowed: " + numberList.filter(n => parseInt(n, 10) < 0).join(", "));
        }
        return sum + number;
    }, 0);

    return total;
}

module.exports = { add };
