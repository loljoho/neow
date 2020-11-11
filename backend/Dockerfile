# Dockerfile for Back End Flask application

# base image
FROM python:3.8

# set working directory
WORKDIR /app

# set environmental variables
ENV FLASK_APP=api.py
ENV FLASK_RUN_HOST=0.0.0.0

# install gcc, other dependencies
RUN apk add --no-cache gcc musl-dev linux-headers

# copy requirements and install dependencies
COPY requirements.txt ./
RUN pip install -r requirements.txt

# public nudity, i guess
EXPOSE 5000
COPY . ./

# start app
# wut?
CMD ["flask", "run"]
