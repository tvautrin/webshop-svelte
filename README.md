[![Docker Image CI](https://github.com/tvautrin/webshop-svelte/actions/workflows/docker-image.yml/badge.svg)](https://github.com/tvautrin/webshop-svelte/actions/workflows/docker-image.yml)

# Svelte & Skaffold & Github Actions playground 

It's just a simple app developed with svelte JS. 

Skaffold has been add to enhanced developer experience and the deployment on a local kubernetes cluster.

At the end, when a commit is push to main, github actions runs and push the image built to my repo on docker hub (tvautrin/webshop-svelte)

To run project, there are many options :

## Running with npm

```bash
# Clone the project
git clone https://github.com/tvautrin/webshop-svelte.git
# Change folder
cd webshop-svelte
# Install dependencies
npm install
# Run project
npm run dev
```

Open your browser on http://localhost:5173/productcatalog

## Running with docker


```bash
docker run -p 30000:3000 tvautrin/webshop-svelte
```
 Open your browser on http://localhost:30000/productcatalog