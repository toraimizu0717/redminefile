{
  "log-driver": "json-file",
  "log-opts": {"max-size": "10m", "max-file": "3"},
  "default-address-pools":[
        {"base":"172.17.0.0/12","size":20},
        {"base":"10.99.0.0/12","size":20},
        {"base":"192.168.0.0/16","size":24}
    ]
}