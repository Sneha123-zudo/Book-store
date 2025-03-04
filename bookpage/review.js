// Load book details from localStorage
window.onload = function () {
    document.getElementById("bookImage").src = localStorage.getItem("bookImage");
    document.getElementById("bookTitle").innerText = localStorage.getItem("bookTitle");
    document.getElementById("bookAuthor").innerText = "By " + localStorage.getItem("bookAuthor");
    loadReviews();
};

// Function to add a review
function addReview() {
    let reviewText = document.getElementById("reviewText").value.trim();
    let rating = parseInt(document.getElementById("selectedRating").value);

    if (reviewText === "" || rating === 0) {
        alert("Please write a review and select a rating before submitting.");
        return;
    }

    let reviews = JSON.parse(localStorage.getItem("bookReviews")) || [];

    reviews.push({
        text: reviewText,
        rating: rating
    });

    localStorage.setItem("bookReviews", JSON.stringify(reviews));

    document.getElementById("reviewText").value = "";
    document.getElementById("selectedRating").value = "0";
    loadReviews();
}

// Function to load reviews
function loadReviews() {
    let reviewsContainer = document.getElementById("reviews");
    reviewsContainer.innerHTML = "";

    let reviews = JSON.parse(localStorage.getItem("bookReviews")) || [];

    if (reviews.length === 0) {
        reviewsContainer.innerHTML = "<p>No reviews yet.</p>";
        return;
    }

    reviews.forEach(review => {
        let div = document.createElement("div");
        div.classList.add("review-item");
        div.innerHTML = `
            <p><strong>Rating:</strong> ${getColoredStars(review.rating)}</p>
            <p>${review.text}</p>
        `;
        reviewsContainer.appendChild(div);
    });
}

// Function to generate stars with colors
function getColoredStars(rating) {
    let colors = ["red", "orange", "yellow", "gold", "green"];
    let stars = "";

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += `<span style="color:${colors[rating - 1]}; font-size:20px;">★</span>`;
        } else {
            stars += `<span style="color:gray; font-size:20px;">★</span>`;
        }
    }

    return stars;
}

// Function to update rating selection
function rate(n) {
    remove();
    let colors = ["red", "orange", "yellow", "gold", "green"];
    for (let i = 0; i < n; i++) {
        stars[i].style.color = colors[n - 1];
    }
    document.getElementById("output").innerText = "Rating is: " + n + "/5";
    document.getElementById("selectedRating").value = n;
}

// To remove previous styles
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].style.color = "gray";
        i++;
    }
}

// Initialize stars
let stars = document.getElementsByClassName("star");
