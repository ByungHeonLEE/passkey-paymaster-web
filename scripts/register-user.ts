const post = async () => {
    const url = "http://localhost:32701/signup/create-user"
    //랜덤바이트 프라이빗 키 포스트 요청 
    const body = {
        "Email": "eric@gmail.com",
        "Pw": "eric"
    }
    const res = await fetch(url, {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    })
    console.log(await res.text())
}

post();