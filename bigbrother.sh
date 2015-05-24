#!/bin/bash
scriptsPath="scripts/"
scripts=$( cd $scriptsPath && ls)

hosts=("localhost example.com")

for host in $hosts; do
  echo ""
  echo "Connecting to" $host

  ssh $host mkdir .bigbrother
  scp -rq * $host:~/.bigbrother

  for script in $scripts; do
    echo "Running" $script

    ssh $host ~/.bigbrother/$scriptsPath$script
  done

  ssh $host rm -rf ~/.bigbrother
done
