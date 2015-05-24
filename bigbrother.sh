#!/bin/bash
scriptsPath="scripts/"
scripts=$( cd $scriptsPath && ls)

for script in $scripts; do
  command="./$scriptsPath$script"
  echo "Running $script"
  sh $command
done
