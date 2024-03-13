const BASE_URL = 'http://127.0.0.1:3000/api/v1';

export async function getUserService({email}) {
    let user = await fetch(`${BASE_URL}/users/email/${email}`, {
        method: 'GET'
    });

    user = await user.json();

    return user;
}

export async function createUserService(data) {
    let user = await fetch(`${BASE_URL}/users/create`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email,
            avatar: data.avatar,
            profession: data.profession
        })
    });

    user = await user.json();

    return user;
}