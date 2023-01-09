async function runTimeOut() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Time out");
    } catch (error) {
        console.log(error);
    }
}

runTimeOut();