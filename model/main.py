import pickle
import os
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

# Load the pkl file
pkl_path = 'energy_model.pkl'
if not os.path.exists(pkl_path):
    raise FileNotFoundError(f"The file '{pkl_path}' does not exist in the current directory: {os.getcwd()}")

with open(pkl_path, 'rb') as file:
    modeldata = pickle.load(file)

@app.route('/')
def home():
    return 'Hello, World!'

@app.route('/api/data', methods=['POST'])
def get_data():
    if request.method == 'POST':
        print('recive')
        user_input = request.json.get('user_input')
        print(user_input)
        # data = modeldata(user_input)
        # return jsonify({'data': data})
        return jsonify(user_input)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
