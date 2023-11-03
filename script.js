document.addEventListener("DOMContentLoaded", function () {
    const thumbsUpButton = document.getElementById("thumbs-up");
    const thumbsDownButton = document.getElementById("thumbs-down");
    const feedbackResult = document.getElementById("feedback-result");

    // Load feedback data from local storage
    let feedbackData = JSON.parse(localStorage.getItem("feedback")) || { thumbsUp: 0, thumbsDown: 0 };

    // Update feedback result display
    function updateFeedbackDisplay() {
        const totalVotes = feedbackData.thumbsUp + feedbackData.thumbsDown;
        const feedbackPercentage = totalVotes === 0 ? 0 : (feedbackData.thumbsUp / totalVotes) * 100;
        feedbackResult.textContent = `Feedback: ${feedbackPercentage.toFixed(1)}%`;
    }

    updateFeedbackDisplay();

    // Handle thumbs up button click
    thumbsUpButton.addEventListener("click", function () {
        feedbackData.thumbsUp++;
        updateFeedbackDisplay();
        localStorage.setItem("feedback", JSON.stringify(feedbackData));
    });

    // Handle thumbs down button click
    thumbsDownButton.addEventListener("click", function () {
        feedbackData.thumbsDown++;
        updateFeedbackDisplay();
        localStorage.setItem("feedback", JSON.stringify(feedbackData));
    });
});
