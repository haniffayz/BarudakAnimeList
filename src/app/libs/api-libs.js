export const getAnimeResponse = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BAS_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}
export const getAnimeEpisodes = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BAS_URL}/${resource}?${query}`)
    const episode = await response.json()
    return episode
}
export const getAnimeSchedules = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BAS_URL}/${resource}?${query}`)
    const episode = await response.json()
    return episode
}

export const getNewsAnimeResponse = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BAS_URL}/${resource}?${query}`)
    const news = await response.json()
    return news
}


export const getNestedAnimeResponse = async(resource, objectProperty) => {
    const response = await getAnimeResponse(resource)
    if (response.data) {
        return response.data.flatMap(item => item[objectProperty]);
    } else {
        console.error("Response data is undefined");
        return []; 
    }
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap 
    
    const response  = {
        data: data.slice(first, last)
    }
    return response
}