function Projects(name, count) {
    let hours = +count * 3;

    console.log(`The architect ${name} will need ${hours} hours to complete ${count} project/s.`);
}

Projects("George", "4");