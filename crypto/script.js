document.addEventListener("DOMContentLoaded", function() {
    const features = document.querySelectorAll(".feature");

    features.forEach(feature => {
        feature.addEventListener("mouseover", () => {
            feature.style.transform = "scale(1.1)";
        });

        feature.addEventListener("mouseout", () => {
            feature.style.transform = "scale(1)";
        });
    });
});
