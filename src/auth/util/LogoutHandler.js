const logoutHandler = async () => {
    // revoke accessToken on the serverside
    const res = await fetch('http://127.0.0.1:8000/api/logout',{
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        })
    });

    const response = await res.json();
    console.log("message from server = " + response.message);

    // clear accesstoken from the localstorage client side
    localStorage.removeItem('accessToken');
    router.push('/login');
}

export default logoutHandler;