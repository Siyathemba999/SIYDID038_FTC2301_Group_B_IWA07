const nickname = "null";
const firstname = "null";



if (nickname) {
    console.log(`Good morning, ${nickname}!`)
}
else if (firstname) {
    console.log(`Good morning, ${firstname}!`)
}
else {
    console.log("Good morning!")
}

/**
 * The code did not work because everything inside the quotations were being treated as a string 
 * String literals were not used 
 */