const BASE_URL = 'http://127.0.0.1:3000/api/v1';
// const BASE_URL = 'https://f50f-169-150-254-102.ngrok-free.app/api/v1';

export async function getAllBlogs() {
    let blogs = await fetch(`${BASE_URL}/blogs`, {
        method: 'GET'
    });
    blogs = await blogs.json();

    return blogs;
}

export async function getBlog(id) {
    let blog = await fetch(`${BASE_URL}/blogs/${id}`, {
        method: 'GET'
    });

    blog = await blog.json();

    return blog;
}