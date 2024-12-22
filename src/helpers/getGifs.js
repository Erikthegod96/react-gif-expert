export const getGift = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=1MjpA1hSVbQBQS6fyCDG66UAF0xdZYdG&q=${categoria}&limit=5`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs
}
