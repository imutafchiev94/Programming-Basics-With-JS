function ReadBook(pagesToRead, pagesPerHour, days) {
    let totalHoursToRead = +pagesToRead / +pagesPerHour;
    let hoursToReadPerDay = +totalHoursToRead / +days;
    console.log(hoursToReadPerDay);
}

ReadBook("432", "15", "4");