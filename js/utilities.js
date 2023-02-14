function getCookie (key) {
    let name = key + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(name, val) {
    const d = new Date();
    const days = 365;
    d.setTime(d.getTime() + (days*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + val + ";" + expires;
}


export var rootURL = 'https://photo-app-secured.herokuapp.com';

export async function loginFirst(username, password) {
    const postData = {
        "username": username,
        "password": password
    };
    const response = await fetch(`${rootURL}/api/token/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
    });
    const data = await response.json();
    console.log('Login complete. Cookie (access_token_cookie_js) set.')
    setCookie('access_token_cookie_js', data.access_token); 
}

export function getHeaders () {
    return {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getCookie('access_token_cookie_js')
    };
}

