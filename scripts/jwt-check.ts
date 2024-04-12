const check = async () => {
    const url = "http://localhost:32701/profile"

    //make sure the token should be replaced with the return value of login-test
    const token = "";

    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    console.log(await res.text())
}

check();