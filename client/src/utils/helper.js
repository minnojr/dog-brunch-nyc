export async function getUserLocation() {
    let x =  {};
    await navigator.geolocation.getCurrentPosition((res) => {
        x = res.coords;
        console.log("\n1");
        console.log(x);
    });

    return x;
}
