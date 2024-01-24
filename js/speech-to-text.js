let speechRecognition;

// Function to toggle Speech-to-Text
function toggleSpeechToText() {
    if (!speechRecognition) {
        startSpeechRecognition();
    } else {
        stopSpeechRecognition();
    }
}

function startSpeechRecognition() {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        speechRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

        speechRecognition.onstart = function () {
            console.log('Speech recognition started');
        };

        speechRecognition.onresult = function (event) {
            const transcript = event.results[0][0].transcript;
            console.log('Speech recognition result:', transcript);

            // Add your logic to handle the transcript (e.g., update input field)
            document.getElementById('habit-input').value = transcript;
        };

        speechRecognition.onerror = function (event) {
            console.error('Speech recognition error:', event.error);
            stopSpeechRecognition();
        };

        speechRecognition.onend = function () {
            console.log('Speech recognition ended');
        };

        speechRecognition.start();
    } else {
        console.error('Speech recognition not supported in this browser');
    }
}

function stopSpeechRecognition() {
    if (speechRecognition) {
        speechRecognition.stop();
        speechRecognition = null;
        console.log('Speech recognition stopped');
    }
}

function toggleSpeechToText() {
    // Add your logic for toggling Speech-to-Text here
}