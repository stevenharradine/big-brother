# Big Brother
Monitor systems remotely through SSH, the goal is to otherwise be agent-less on the end systems being monitored

## Use
Note: This works best with key based (password-less) SSH.
### Update hosts array
```
~/big-brother$ nano bigbrother.sh

hosts=("localhost example.com")
```
### Then run
```
~/big-brother$ ./bigbrother.sh
```
