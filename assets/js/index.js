document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('popup').style.display = 'block';
    }, 5000); // 5 saniye sonra göster
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

