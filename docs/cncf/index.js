module.exports = () => {
  return [
      {
          title: "CNCF",
          collapsable: false,
          children: [
            'docker.md',
            'k8s.md',
            'k0s.md',
            'k3s.md',
            'etcd.md',
            'kubernets.md',
            'helm.md',
            'containerd.md',
            'minikube.md',
            'prometheus+grafana.md'
          ]
      }
  ]
}