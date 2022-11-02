const LoginAuthenticator = async (credentials) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST',
                'Access-Control-Allow-Headers': 'Content-Type',
             },
            body: JSON.stringify(credentials),
        });
        
        const responseData = await response.json();
        return responseData.accessToken;
    
    } catch (e) {
        console.error(e);
    }
};

export default LoginAuthenticator;