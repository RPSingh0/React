const BASE_URL = 'http://127.0.0.1:3000/api/v1';

export async function getAllBlogsService() {
    let blogs = await fetch(`${BASE_URL}/blog/all`, {
        method: 'GET'
    });

    if (blogs.status === 204) {
        throw new Error('Data not found!');
    }

    blogs = await blogs.json();

    return blogs;
}

export async function getBlogService(id) {
    let blog = await fetch(`${BASE_URL}/blog/byId/${id}`, {
        method: 'GET'
    });

    console.log(blog);

    if (blog.status === 204) {
        throw new Error('Data not found!');
    }

    blog = await blog.json();

    return blog;
}

export async function getAllBlogTopicService() {
    let topics = await fetch(`${BASE_URL}/blog/topics`, {
        method: 'GET'
    });

    if (topics.status === 204) {
        throw new Error('Data not found!');
    }

    topics = await topics.json();

    return topics;
}

export async function getAllBlogsByTopicService(topic) {
    let blogs = await fetch(`${BASE_URL}/blog/byTopic/${topic}`, {
        method: 'GET'
    });

    if (blogs.status === 204) {
        throw new Error('Data not found!');
    }

    blogs = await blogs.json();

    return blogs;
}

export async function getFavouriteBlogs() {
    let blogs = await fetch(`${BASE_URL}/blog/favourite`, {
        method: 'GET'
    });

    if (blogs.status === 204) {
        throw new Error('Data not found!');
    }

    blogs = await blogs.json();

    return blogs;
}

export function parseAllBlogs(data) {
    return data.data.blogs;
}

export function parseSingleBlog(data) {
    return data.data.blog[0];
}