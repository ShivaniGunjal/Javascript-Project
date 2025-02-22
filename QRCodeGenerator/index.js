// function generateQRCode() {
//     const website = document.getElementById('website').value.trim();
//     if (website && isValidURL(website)) {
//         const qrcodeContainer = document.getElementById('qrcode');
//         qrcodeContainer.innerHTML = ""; // Clear existing QR code
//         new QRCode(qrcodeContainer, encodeURIComponent(website));

//         document.getElementById('qrcode-container').style.display = "block";
//     } else {
//         alert("Please enter a valid URL.");
//     }
// }
function generateQRCode() {
    const website = document.getElementById('website').value.trim();

    if (website && isValidURL(website)) {
        const qrcodeContainer = document.getElementById('qrcode');
        qrcodeContainer.innerHTML = ""; // Clear any existing QR code
        new QRCode(qrcodeContainer, website); // Generate the new QR code
        document.getElementById('qrcode-container').style.display = "block";
    } else {
        alert("Please enter a valid URL.");
    }
}

function isValidURL(url) {
    const pattern = new RegExp(
        "^(https?:\\/\\/)?" + // Protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // Domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // Port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // Query string
        "(\\#[-a-z\\d_]*)?$", // Fragment identifier
        "i"
    );
    return !!pattern.test(url);
}
