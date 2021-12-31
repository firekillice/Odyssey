module.exports = () => {
    return [
        {
            title: "网络",
            collapsable: false,
            children: [
                'etcd.md',
                'docker.md',
                'k3s.md',
                'k8s.md',
                'elk.md',
                'helm.md',
                'iptables.md',
                'php-use-k8s.md',
            ]
        }
    ]
}