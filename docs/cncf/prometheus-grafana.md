## prometheus 

### docker 
* config(yml)
```
global:
  scrape_interval:     15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.
  # scrape_timeout is set to the global default (10s).

# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:
  # - "first_rules.yml"
  # - "second_rules.yml"

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.
  - job_name: 'prometheus'
    # metrics_path defaults to '/metrics'
    # scheme defaults to 'http'.
    static_configs:
    - targets: ['127.0.0.1:9090']

  - job_name: 'baseball-local-t4-mertrics'
    metrics_path: '/metrics'
    scrape_interval: 5s
    static_configs:
    - targets: ['api-t4.ingress.bq.capstonedev.cn']
```
* docker run -d -p 9090:9090 -v `pwd`/prometheus.yaml:/etc/prometheus/prometheus.yml  prom/prometheus:latest
* docker run -d -p 9090:9090 -v `C:\Users\PC\.prometheus\prometheus.yaml:/etc/prometheus/prometheus.yml  prom/prometheus:latest

## grafana
### docker 
* docker run -d -p 3000:3000 grafana/grafana-oss:latest
