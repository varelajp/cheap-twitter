# cheap-twitter
A "Poor Man's Twitter" application in a single web page.


<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJtuKXq9ZzQUddKX4F8OQ8sWV-VlwxWJ_3Q&usqp=CAU" width="120">&nbsp;&nbsp;&nbsp;<b>and</b>&nbsp;&nbsp;&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/260px-Django_logo.svg.png" width="150">&nbsp;&nbsp;&nbsp;<b> can make </b>&nbsp;&nbsp;&nbsp;<img src="https://play-lh.googleusercontent.com/J8k5q78xv4R8Smi4vOE6iUphLvOz0efC-0lzoyGfd0KRUlAv4ekuCtlss6KBN-tMvEw" width="100">

Python api test consisting of an SPA with a form for any visitor to tweet and an unpaginated table to display all tweets.
___
Live Demo (in a man also poor's free hosting)
-----

http://varelajp.pythonanywhere.com/  

Manage remote data
-----

http://varelajp.pythonanywhere.com/admin/  
You can check and play with the data.  
Username: admin  
Password: admin

Using the API from your machine
-----

Download and extract this [``api-consumer``](http://varelajp.pythonanywhere.com/static/cheap-twitter-api-consumer.zip) folder and open its ``index.html`` in a web browser connected to internet (you need connection to reach remote python api).  
No need of web server or extra configuration.

Configuring the API locally
-----


You need git and Python installed to run:  
``git clone git@github.com:varelajp/cheap-twitter.git``  
``cd cheap-twitter``  
``python -m venv .venv``  
``source .venv/bin/activate``  
``pip install -r requirements.txt``  
``python manage.py migrate``  
``python manage.py runserver``  
Open http://localhost:8000/ in a web browser.

You can configure the app skipping virtual environment and using your own pip installation. Also, you can set the app to be served by your own web server (Apache, Nginx).
