#!/bin/bash
uptime=$( uptime | sed 's/.\([^,]*\) .*/\1/')
echo $uptime day
