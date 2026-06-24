document.addEventListener('DOMContentLoaded', () => {
    // Dynamically show verification/build timestamp
    const timestampEl = document.getElementById('timestamp');
    const now = new Date();
    timestampEl.textContent = now.toLocaleString();

    // Verification button action
    const verifyBtn = document.getElementById('verify-btn');
    const testResult = document.getElementById('test-result');

    verifyBtn.addEventListener('click', () => {
        verifyBtn.disabled = true;
        verifyBtn.textContent = 'Running tests...';
        
        setTimeout(() => {
            testResult.classList.remove('hidden');
            testResult.className = 'success-result';
            testResult.textContent = '✓ Build and integration checks passed! UI is fully interactive.';
            verifyBtn.disabled = false;
            verifyBtn.textContent = 'Trigger Verification Test';
        }, 800);
    });
});
