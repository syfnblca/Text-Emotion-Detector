# 🤖 AI-Based Emotion Detection Web Application

---

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Notes](#notes)
- [License](#license)
- [Contact](#contact)

---

## Overview
This is a simple web application built with **Python** and **Flask** that uses a pretrained transformer model for AI-based emotion detection from text input.

<img width="1919" height="952" alt="image" src="https://github.com/user-attachments/assets/c4bd3865-9d4a-4203-9e00-2d02b7194ca4" />

---

## Prerequisites
- Python 3.7 or above
- Internet connection (for model download on first run)
- Git (optional, for cloning the repository)

---

## Setup Instructions

1. It is highly recommended to create and activate a virtual environment (venv) before installing dependencies:

```bash
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Unix or MacOS:
source venv/bin/activate
```

2. Install required dependencies with:

```bash
pip install -r requirements.txt
```

---

## Running the Application

After completing the setup instructions above, follow these steps to run the application:

1. Ensure your virtual environment is activated:
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On Unix or MacOS:
     ```bash
     source venv/bin/activate
     ```
2. Run the Flask application by executing:
   ```bash
   python app.py
   ```

3. Open your web browser and visit:
   [http://127.0.0.1:5000](http://127.0.0.1:5000)

You should now see the emotion detection web app ready to use.

*Note:* Make sure you have completed the dependency installation before running the application.

---

## Usage

1. Enter the text you want to analyze in the input box.
2. Click the **Detect Emotion** button.
3. The app will display detected emotions along with confidence scores.

---

## Notes

- The app uses the [`j-hartmann/emotion-english-distilroberta-base`](https://huggingface.co/j-hartmann/emotion-english-distilroberta-base) model from Hugging Face transformers for emotion classification.
- Ensure you have an internet connection on the first run to download the model files.

---

## License

This project is licensed under the [MIT License](LICENSE).  
*Please update the LICENSE file as needed.*

---

## Contact

For questions or feedback, please contact:

- Syafa Nabila — syafanblca29@gmail.com  


---

[Python Version](https://img.shields.io/badge/python-3.7%2B-blue)
[License](https://img.shields.io/badge/license-MIT-green)

