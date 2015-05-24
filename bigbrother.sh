#!/bin/bash
scriptsPath="scripts/"
scripts=$( cd $scriptsPath && ls)

host="example.com"

ssh $host mkdir .bigbrother
scp -r * $host:~/.bigbrother

for script in $scripts; do
  echo "Running $script"

  ssh $host ~/.bigbrother/$scriptsPath$script
done

ssh $host rm -rf ~/.bigbrother
