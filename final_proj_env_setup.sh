#!/bin/bash

echo "Setting up the CS290 Final Project mongo environment vars..."
echo "(MONGO_PORT will be set to default mongo port)"

export MONGO_USER="cs290_hartmank"
export MONGO_PASSWORD="group21"
export MONGO_HOST="classmongo.engr.oregonstate.edu"
export MONGO_PORT="27017"
export MONGO_DB="cs290_hartmank"

echo 
echo "Finished Env. Setup!"
echo
