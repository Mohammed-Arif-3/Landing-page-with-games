from flask import Flask, render_template,redirect

app = Flask(__name__,static_folder="static", template_folder="templates")

@app.route('/')
def index():
    return render_template('Offside.html')

@app.route('/StickHero')
def stick():
    return render_template('stickhero.html')

@app.route('/Menja')
def menja():
    return render_template('Menja.html')

@app.route('/Metroid')
def metroid():
    return render_template('Metroid.html')



@app.route('/rock')
def rocky():
    return render_template('quiz.html')

if __name__ =='__main__':
    app.run(host='0.0.0.0',debug=True)

