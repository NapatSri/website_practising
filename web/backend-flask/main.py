from flask import Flask, redirect, url_for, render_template,request
from data_generator import sender,printout

app = Flask(__name__)
user = ""

@app.route("/", methods=["POST", "GET"])
def my_index():
    if request.method == "POST":
        user = request.form["nm"]
        return render_template("index.html",token="Hello world!!",processed_data=printout(user))
    else:
        return render_template("index.html",token="Hello world!!",processed_data=sender())

app.run(debug=True)

