import NextAuth from "next-auth"
import githubAuth from "next-auth/providers/github"
import googleAuth from "next-auth/providers/google"
import instagramAuth from "next-auth/providers/instagram"

export const authOption = {
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_CLIENT,
            clientSecret: process.env.GITHUB_SECRET
        }),
        googleAuth({
            clientId: process.env.GOOGLE_CLIENT,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        instagramAuth({
            clientId: process.env.INSTAGRAM_CLIENT,
            clientSecret: process.env.INSTAGRAM_SECRET,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }