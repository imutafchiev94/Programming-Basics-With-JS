function guessPassword(password) {
    const secretPassword = "s3cr3t!P@ssw0rd";

    if (password === secretPassword) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

guessPassword("s3cr3t!p@ss");