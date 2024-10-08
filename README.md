# Admin Site

This is a template for an _admin frontend site_, using [React](https://react.dev/) and [Tailwind](https://tailwindcss.com/). You can customize this template by editing the [`.projor/.pages` file](.projor/.pages), and using [ProJor](https://projor.io) to generate the code.

[Learn more about this template in the `.projor/README.md`](.projor/README.md).

_You can edit this description in [`.projor/project.pglobal.yaml`](.projor/project.pglobal.yaml)_

TODO: Screenshot here

## Running

You need to have [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/) installed. Then, you can run the following commands:

```
npm install
npm run serve
```

Then, upen `http://localhost:3000` in your browser.

You can also use [Docker](https://www.docker.com/) with this project.

* The final container image uses `nginx` to serve the static frontend. The [`Dockerfile`](Dockerfile) also uses the `node` image to build it first. This is the command to build the container image:

```
docker build -t my-org/admin-site:latest .
```

* You can also use `docker compose` to run the project. Run the following command:

```
docker compose up --build
```

Then, open `http://localhost:3000` in your browser.

## License

This template is licensed under the [MIT License](LICENSE.md).

[ProJor](https://projor.io) is licensed under either the [ProJor Free License](https://license.projor.io) or the [ProJor Commercial License](https://license.projor.io).