#!/bin/bash
scriptsPath="scripts/"
scripts=$( cd $scriptsPath && ls)

for script in $scripts; do
  echo "Running $script"
  sh ./$scriptsPath$script
done
