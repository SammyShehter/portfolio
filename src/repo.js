export async function getAllPosts() {
    try {
        const res = await fetch("https://blogue.sammyshehter.com/api/posts/all")
        if (!res.ok) {
            throw new Error("Failed to fetch data")
        }

        const json = await res.json()
        if (!json.posts?.length) {
            throw new Error("Fetched data doesn't contain posts")
        }
        return json.posts
    } catch (error) {
        console.error("Error in getAllPosts: ", error)
        return []
    }
}
