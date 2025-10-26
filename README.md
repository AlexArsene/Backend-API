# Contacts API Backend

Simple REST API for managing contacts (name/email).

## Local run
npm install
node server.js
# Test: curl http://localhost:3000/contacts

## Docker build
docker build -t backend-app:v001 .
docker run -d --name backend -p 3000:3000 backend-app:v001

## Jenkins pipeline
Pipeline for build, test, deploy to Staging/Production.
