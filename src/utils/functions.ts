export async function fetchData(url: string){
    console.log("hook");
    
    let data
    try {
        data = (await fetch(url as RequestInfo)).json()
    } catch (err) {
        console.log(err);
        data = []
    }
    return data
}