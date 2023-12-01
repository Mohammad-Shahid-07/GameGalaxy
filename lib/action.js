'use server'
export const fetchGames = async (page) => {
    const key = process.env.API_KEY;
    try {
        const res = await fetch(`https://api.rawg.io/api/games?key=${key}&page=${page}&page_size=9`)
        const data = await res.json()
        return data.results;
    } catch (error) {
        console.log(error);
        throw error;
    }
   
}