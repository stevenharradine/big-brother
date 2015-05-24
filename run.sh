#!/bin/bash
scriptsPath="scripts-enabled/"
scripts=$( cd $scriptsPath && ls)
hosts=( "$@" )

for host in $hosts; do
  echo ""
  echo "Connecting to" $host

  ssh $host mkdir .bigbrother
  scp -rq * $host:~/.bigbrother

  for script in $scripts; do
    echo "Running" $script

    ssh $host ~/.bigbrother/$scriptsPath$script | node to-data-store.js
  done

  ssh $host rm -rf ~/.bigbrother
done
