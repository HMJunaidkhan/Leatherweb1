// Function to open the image
function openImage(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");

    modal.style.display = "flex"; // Show modal
    modalImg.src = imgElement.src; // Set clicked image source
}

// Close the image when clicking outside it
document.getElementById("imageModal").addEventListener("click", function (event) {
    var modalImg = document.getElementById("modalImage");

    // If the clicked element is NOT the image, close the modal
    if (event.target !== modalImg) {
        this.style.display = "none";
    }
});

// Ensure the modal is hidden on page load
window.onload = function () {
    document.getElementById("imageModal").style.display = "none";
};



let isZoomed = false;

document.getElementById("modalImage").addEventListener("click", function () {
    if (!isZoomed) {
        this.style.transform = "scale(2)"; // Zoom-in
        this.style.cursor = "grab"; // Change cursor
        isZoomed = true;
    } else {
        this.style.transform = "scale(1)"; // Reset zoom
        this.style.cursor = "zoom-in";
        isZoomed = false;
    }
});
