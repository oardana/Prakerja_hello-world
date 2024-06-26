const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function updateClock() {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    day = padZero(day);
    month = padZero(month);
    hours = padZero(hours);
    minutes = padZero(minutes);
    seconds = padZero(seconds);

    var formattedTime = day + ' - ' + month + ' - ' + year + ' ' + hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').innerHTML = formattedTime;
}

function padZero(num) {
    return (num < 10 ? '0' : '') + num;
}

setInterval(updateClock, 1000);

updateClock();

document.getElementById('formContact').addEventListener('submit' , function(event){
    event.preventDefault();

    var email = document.getElementById('email').value;
    var noTelepon = document.getElementById('notelepon').value;

    var emailError = document.getElementById('emailError');
    var noteleponError = document.getElementById('noteleponError');

    emailError.textContent = '';
    noteleponError.textContent = '';

    var emailvalid = validasiEmail(email);
    var noTeleponvalid = validasinoTelepon(noTelepon);

    if(emailvalid && noTeleponvalid){
        alert('Berhasil');
    }else{
        if(!emailvalid){
            emailError.textContent = "Email Tidak valid";
        }
        if(!noTeleponvalid){
            noteleponError.textContent = "No Telepon harus 12 angka";
        }
    }
    
});

        function validasiEmail(email) {
            var emailaccess = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailaccess.test(email);
        }

        function validasinoTelepon(notelepon) {
            var noteleponaccess = /^\d{12,}$/;
            return noteleponaccess.test(notelepon);
        }

        function konversi() {
            const fahrenheit = document.getElementById("fahrenheit").value;
            const celsius = (fahrenheit - 32) * 5 / 9;
            document.getElementById("result").innerText = `Celcius: ${celsius.toFixed(2)}`;
        }

        document.getElementById('toggleColor').addEventListener('click', function() {
            var containerFluid = document.querySelector('.contact');
            if (containerFluid.classList.contains('bg-primary')) {
                containerFluid.classList.remove('bg-primary');
                containerFluid.style.backgroundColor = '#25D366';
            } else {
                containerFluid.style.backgroundColor = '';
                containerFluid.classList.add('bg-primary');
            }
        });