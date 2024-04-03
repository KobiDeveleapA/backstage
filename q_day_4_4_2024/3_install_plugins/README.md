# Backstage - (2) Create and add new templates to Backstage


## How to create new custom templates for Backstage and add it to the system?

One of the true powers of Backstage (as IDP) is the concept of software catalog templates.

Templates are a way for us creating a standarlized software components in our internal developer platform.

Templates can defined anything from a standart way to provision resources, manage data, manage developer workflows, software component documentation and much more.

For example:

- Template for provisioning temporary envrionments
- Template for provision a Go microservice on a Kubernetes cluster
- Template to stnadarlize tech docs
- Template for configurarin new CI pipelines

In this part of the workshop we will follow the process of creating a new custom software catalog template and adding the template to the Backstage IDP using two different main methods, using static file location and using Git as a source of truth.

Lets start with creating and adding a template as a static file location.

We will create a new template file in the following directory and name it as ```template.yaml```

```bash
  cd <backstage_project_dir>/packages/backend/
```

Next we will add the template file to our Backstage application by adding a reference to our newly create templated in the ```app-config.yaml``` file:

```bash
  <backstage_project_dir>/app-config.yaml

```

```bash
.
.
.
.
  catalog:
    import:
        entityFilename: catalog-info.yaml
        pullRequestBranchName: backstage-integration
    rules:
        - allow: [Component, System, API, Resource, Location]
    locations:
    - type: file
      target: template.yaml
      rules:
        - allow: [Template] 
.
.
.
```

Save the ```app-config.yaml``` file and run:

```yarn dev```

---

Next, lets add a new template using Git as the source of truth.

Again, we will add a reference to the desired template in the ```app-config.yaml``` file, but this time, the type of our location will be a url and target will be a path to our ```template.yaml``` file.

```bash
.
.
.
.
  catalog:
    import:
        entityFilename: catalog-info.yaml
        pullRequestBranchName: backstage-integration
    rules:
        - allow: [Component, System, API, Resource, Location]
    locations:
    - type: url
      target: https://github.com/backstage/software-templates/blob/main/scaffolder-templates/create-react-app/template.yaml
      rules:
        - allow: [Template] 
.
.
.
```

Save the ```app-config.yaml``` file and run:

```yarn dev```


