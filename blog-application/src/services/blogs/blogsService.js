// const BASE_URL = 'http://127.0.0.1:3000/api/v1';

const BASE_URL = 'https://bd51-212-102-40-84.ngrok-free.app/api/v1';

export async function getAllBlogsService() {
    let blogs = await fetch(`${BASE_URL}/blogs`, {
        method: 'GET'
    });
    blogs = await blogs.json();

    return blogs;
}

export async function getBlogService(id) {
    let blog = await fetch(`${BASE_URL}/blogs/${id}`, {
        method: 'GET'
    });

    blog = await blog.json();

    return blog;
}
