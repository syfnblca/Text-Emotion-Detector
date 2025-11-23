document.addEventListener('DOMContentLoaded', () => {
    const analyzeBtn = document.getElementById('analyzeBtn');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const systemResponse = document.getElementById('system_response');
    const textInput = document.getElementById('textToAnalyze');

    analyzeBtn.addEventListener('click', async () => {
        const textToAnalyze = textInput.value.trim();

        // Clear previous results
        systemResponse.innerHTML = '';

        if (textToAnalyze.length === 0) {
            systemResponse.innerHTML = '<div class="error-message">Please enter some text to analyze.</div>';
            return;
        }

        // Show loading spinner and disable button
        loadingIndicator.style.display = 'inline-block';
        analyzeBtn.disabled = true;

        try {
            const response = await fetch(`/emotionDetector?textToAnalyze=${encodeURIComponent(textToAnalyze)}`);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to fetch emotion data.');
            }

            const data = await response.json();

            // Build result HTML
            const resultList = document.createElement('ul');
            resultList.classList.add('result-list');

            ['anger', 'disgust', 'fear', 'joy', 'sadness'].forEach(emotion => {
                const li = document.createElement('li');
                li.classList.add('result-item');
                li.textContent = `${emotion.charAt(0).toUpperCase() + emotion.slice(1)}: ${data[emotion].toFixed(3)}`;
                resultList.appendChild(li);
            });

            const dominantEmotion = document.createElement('p');
            dominantEmotion.style.fontWeight = '700';
            dominantEmotion.style.marginTop = '15px';
            dominantEmotion.textContent = `Dominant Emotion: ${data.dominant_emotion.charAt(0).toUpperCase() + data.dominant_emotion.slice(1)}`;

            systemResponse.appendChild(resultList);
            systemResponse.appendChild(dominantEmotion);

        } catch (error) {
            systemResponse.innerHTML = `<div class="error-message">${error.message}</div>`;
        } finally {
            loadingIndicator.style.display = 'none';
            analyzeBtn.disabled = false;
        }
    });
});
