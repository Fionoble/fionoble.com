export default function handler(req, res) {
    const { blogId } = req.query;
    console.log(blogId)
    return true
}