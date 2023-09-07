document.getElementById('checkPasswordBtn').addEventListener('click', function() {
    var passwordInput = document.getElementById('passwordInput').value;
    var resultMessage = document.getElementById('resultMessage');
    
    if (passwordInput === 'OMKJ') {
        resultMessage.textContent = 'LINK DO YOUTUBE EXPLICANDO';
    } else {
        resultMessage.textContent = 'try again';
    }
});
