import prisma from "@/libs/prisma"

export async function POST(request) {
    const { anime_mal_id, user_email, anime_image, anime_title, anime_episode, time } = await request.json()
    const data = { anime_mal_id, user_email, anime_image, anime_title, time }

    const createHistory = await prisma.History.create({ data })
    
    if (!createHistory) return Response.json({ status: 500, isCreated: false })
    else return Response.json({ status: 200, isCreated: true })
}