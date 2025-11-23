"""
This is the starting file of the server.
It serves api request with appropriate response
"""
from flask import Flask, render_template, request, jsonify
from EmotionDetection.emotion_detection import emotion_detector

app = Flask("Emotion Detector")

@app.route("/emotionDetector")
def emo_detector():
    """
    It takes input text from user and sends to appropriate function, 
    then returns response based on user text emotions. 
    Returns JSON response.
    """
    text_to_analyze = request.args.get('textToAnalyze')
    if not text_to_analyze or text_to_analyze.strip() == "":
        return jsonify({"error": "No text provided for analysis."}), 400
    
    response = emotion_detector(text_to_analyze)
    anger = response['anger']
    disgust = response['disgust']
    fear = response['fear']
    joy = response['joy']
    sadness = response['sadness']
    dominant_emotion = response['dominant_emotion']
    
    if dominant_emotion is None:
        return jsonify({"error": "Invalid text! Please try again."}), 400

    return jsonify({
        "anger": anger,
        "disgust": disgust,
        "fear": fear,
        "joy": joy,
        "sadness": sadness,
        "dominant_emotion": dominant_emotion
    })

@app.route("/")
def render_index_page():
    """
    It starts server on defined server and port for development. 
    """
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5002)
