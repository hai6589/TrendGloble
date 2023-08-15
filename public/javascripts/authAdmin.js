$(function () {
    Auth.bindingEvent();

})

const Auth = {
    bindingEvent: () => {

        $('.form-submit').unbind();
        $('.form-submit').click(function (e) {
            Auth.action.singIn();
        })
    },
    action: {
        singIn: () => {
            let username = $('#User').val();
            let password = $('#password').val();

            // Validate data

            // Call api
            let url = 'http://localhost:3000/admin/api/auth/signin';
            fetch(url, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    username,
                    password

                })
            }).then(async (res) =>{
                let responseBody = await res.json();
                let token = responseBody.data.token;
                
                localStorage.setItem('token', token);
                setTimeout(() => {
                    window.location= '/admin/home';
                })
            })
        }
    }
}