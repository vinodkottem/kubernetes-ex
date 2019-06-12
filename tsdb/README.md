## Sample openTSDB on k8s

### Run openTSDB and scollector

- OpenTSDB exposed at a NodePort `30787` and uses `hostPath` to save data at `/tmp/docker-tsdb`
- Get the scollector binary based on your OS from `https://github.com/bosun-monitor/bosun/releases/download/0.8.0-preview`
- Run the `scollector` to send metrics to `localhost:30787` as defined in `conf.toml` file

```bash
mkdir /tmp/docker-tsdb

kubectl create -f tsdb.yaml

cd scollector

wget https://github.com/bosun-monitor/bosun/releases/download/0.8.0-preview/tsdbrelay-darwin-amd64

scollector -conf conf.toml
```

### References

- https://github.com/bosun-monitor/bosun/releases/tag/0.8.0-preview
- http://bosun.org/scollector/
- http://opentsdb.net/docs/build/html/index.html
- http://opentsdb.net/docs/build/html/resources.html
- https://hub.docker.com/r/petergrace/opentsdb-docker/
- https://godoc.org/bosun.org/cmd/scollector
