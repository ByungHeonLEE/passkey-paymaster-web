const login = async () => {
    const url = "http://localhost:32701/auth/login";

    const body = {
        email: "eric@gmail.com",  // Lowercase 'email', not 'Email'
        pw: "eric"          // 'password', not 'Pw'
    };

    try {
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        console.log(await res.text());  // This will output the JSON response
    } catch (error) {
        console.error('Error logging in:', error);
    }
}

login();