function isValidDate(day, month, year) {
    // Check if the year is a leap year
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // Days in each month
    const daysInMonth = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check if month is valid
    if (month < 1 || month > 12) {
        return false;
    }

    // Check if day is valid for the given month
    if (day < 1 || day > daysInMonth[month - 1]) {
        return false;
    }

    // If both checks pass, the date is valid
    return true;
}

// Example usage:
console.log(isValidDate(29, 2, 2024));  // true (leap year)
console.log(isValidDate(29, 2, 2023));  // false (not a leap year)
console.log(isValidDate(31, 4, 2024));  // false (April has 30 days)




Or

function getValidDate(day, month, year) {
    // Check if the year is a leap year
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // Days in each month
    const daysInMonth = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check if month is valid
    if (month < 1 || month > 12) {
        return null;
    }

    // Check if day is valid for the given month
    if (day < 1 || day > daysInMonth[month - 1]) {
        return null;
    }

    // Create and return the valid Date object
    return new Date(year, month - 1, day);
}

// Example usage:
let date = getValidDate(29, 2, 2024);  // returns valid Date object: Thu Feb 29 2024
console.log(date);

date = getValidDate(31, 4, 2024);  // returns null because April has only 30 days
console.log(date);