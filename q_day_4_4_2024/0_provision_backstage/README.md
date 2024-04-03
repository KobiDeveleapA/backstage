
## How to provision backstage?

In todays Backstage introduction workshop, we will provision, configure, and populate our newly created Backstage IDP (internal developer platform).
First, we will follow the instructions below to provision our first Backstage instance.

To install a fresh backstage latest version on local environemnt, run the following command:

```bash
  npx @backstage/create-app@latest
```

Next, if the command above is failing due to dependencies issues, make sure that your node version is above 18 and node-gyp is installed and configured in your system.

Now, lets run the following commands and start our Backstage application:

```bash
  cd <backstage_project_dir>
  yarn install 
  yarn dev
```

Access Backstage by following the next address:

```
localhost:3000
```
---


In addition to the Backstage latest version source code, in the following directory ```/backstage/develeap-backstage```  there are two files: 



```build.sh``` - contains yarn build commands (Idealy that would be a part of a CI pipeline).

```Dockerfile``` - For building the Backstage project as a Docker image.

These instructions are for deploying Backstage in a Kubernetes cluster. 

---

Clone the q-day-config repository:
```
git clone https://github.com/KobiDeveleapA/q-day-config.git
```

Inside this repository we can find two Helm charts: Backstage and Postgres.

First, let's install the Postgres database in our cluster:

```
cd postgres
helm install postgres .
```

Make sure that all of our pg replicas are up and running, adjust the relevant Backstage Docker image tag in the backstage Helm chart values file, and then install the Backstage helm chart:

```
cd backstage
helm install backstage .
```

Port forward the backstage instance service
```
kubectl port-forward -n backstage svc/backstage 7000:80
```

Access Backstage by following the next address:

```
localhost:7007
```
