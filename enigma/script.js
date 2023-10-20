document.getElementById('checkPasswordBtn').addEventListener('click', function() {
    var passwordInput = document.getElementById('passwordInput').value;
    var resultMessage = document.getElementById('resultMessage');
    
    if (passwordInput === 'OMKJ') {
        resultMessage.textContent = 'Congratulations, you just received a ticket for 10/28, don't be late.';
    } else {
        resultMessage.textContent = 'try again';
    }
});
