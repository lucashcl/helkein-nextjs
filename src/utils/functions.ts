export async function fetchData(url: string){
    const data = (await fetch(url as RequestInfo)).json()
    return data
}