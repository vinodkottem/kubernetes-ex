 
kubectl create -f redis-master-deployment.yaml

kubectl port-forward <pod> 6379:6379   
