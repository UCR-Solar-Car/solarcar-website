#!/bin/sh

cd /home/projects/soclarcar/soclarcar-website-main-branch

# Builds the `main` branch 
res=$(git pull origin main | grep Already)

if [[ ${res} =~ 'Already' ]]
then
  echo 'Site already up to date'
else
  npm ci
  npm run build
  npm run export
fi