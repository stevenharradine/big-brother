#!/bin/bash
scriptsPath="scripts-enabled/"
scripts=$( cd $scriptsPath && ls -d */ )
hosts=( "$@" )

for host in $hosts; do
  echo ""
  echo "Connecting to" $host

  ssh $host mkdir .bigbrother
  scp -rq * $host:~/.bigbrother

  for script in $scripts; do
    echo "  Running" $script

    ssh $host ~/.bigbrother/$scriptsPath$script""run.sh | node loader.js $scriptsPath$script""process.js $host
  done

  ssh $host rm -rf ~/.bigbrother
done
