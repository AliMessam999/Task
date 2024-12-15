// ============================
// LEFT ANIMATION (from left to right)
// ============================

// Function to check if an element is in the viewport (considering partial visibility)
function isInViewportLeft(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < windowHeight * 0.75 && rect.bottom >= 0;
}

// Add the visible class when the element is in the viewport (left-side animation)
function handleScrollLeft() {
    const featureItems = document.querySelectorAll('.feature-item');

    featureItems.forEach(item => {
        if (isInViewportLeft(item) && !item.classList.contains('visible')) {
            item.classList.add('visible'); // Add the animation class
        }
    });
}

// Debounced scroll event to improve performance (left-side animation)
let timeoutLeft;
window.addEventListener('scroll', () => {
    clearTimeout(timeoutLeft);
    timeoutLeft = setTimeout(handleScrollLeft, 50); // Delay to reduce the frequency of scroll checks
});

// Call handleScrollLeft on page load to trigger any elements already in the viewport (left-side animation)
window.addEventListener('load', handleScrollLeft);


// ============================
// RIGHT ANIMATION (from right to left)
// ============================

// Function to check if an element is in the viewport (considering partial visibility)
function isInViewportRight(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < windowHeight * 0.75 && rect.bottom >= 0;
}

// Add the visible class when the element is in the viewport (right-side animation)
function handleScrollRight() {
    const c1Items = document.querySelectorAll('.c1');

    c1Items.forEach(item => {
        if (isInViewportRight(item) && !item.classList.contains('visible')) {
            item.classList.add('visible'); // Add the animation class
        }
    });
}

// Debounced scroll event to improve performance (right-side animation)
let timeoutRight;
window.addEventListener('scroll', () => {
    clearTimeout(timeoutRight);
    timeoutRight = setTimeout(handleScrollRight, 50); // Delay to reduce the frequency of scroll checks
});

// Call handleScrollRight on page load to trigger any elements already in the viewport (right-side animation)
window.addEventListener('load', handleScrollRight);
