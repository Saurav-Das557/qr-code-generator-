function generateQR() {
    const qrText = document.getElementById("qrText");
    const imgBox = document.getElementById("imgBox");
    const qrImage = document.getElementById("qrImage");

    if (qrText.value.length > 0) {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrText.value)}`;
        
        qrImage.onload = () => {
            imgBox.classList.add("show-img");
        };

        qrImage.onerror = () => {
            imgBox.classList.remove("show-img");
            qrText.classList.add('error');
            setTimeout(() => {
                qrText.classList.remove('error');
            }, 1000);
        };
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}