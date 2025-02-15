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
    document.addEventListener("DOMContentLoaded", function () {
        const sizeChartLinks = document.querySelectorAll(".size-chart-link");
        const sizeChartPopup = document.getElementById("sizeChartPopup");
        const popupImage = document.getElementById("popupImage");
    
        // Hide popup on page load
        sizeChartPopup.style.display = "none";
    
        // Add event listeners to all size chart links
        sizeChartLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
    
                // Get the correct image source
                const imageSrc = this.getAttribute("data-image");
    
                // Set the popup image source
                popupImage.src = imageSrc;
    
                // Show the popup
                sizeChartPopup.style.display = "flex";
            });
        });
    
        // Close popup when clicking outside the image
        sizeChartPopup.addEventListener("click", function (event) {
            if (!event.target.closest(".popup-content")) {
                sizeChartPopup.style.display = "none";
                popupImage.src = ""; // Clear image to avoid flickering issue
            }
        });
    });
    
    
