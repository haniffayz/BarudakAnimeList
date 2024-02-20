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
    const schedules = await response.json()
    return schedules
}
export const getRandomAnime = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BAS_URL}/${resource}?${query}`)
    const schedules = await response.json()
    return schedules
}

export const getNestedAnimeResponse = async(resource, objectProperty) => {
    const response = await getAnimeResponse(resource)
    return response.data.flatMap(item => item[objectProperty])
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap

    const response = {
        data: data.slice(first, last)
    }

    return response
}


