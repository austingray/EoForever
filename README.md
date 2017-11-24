# Eo Forever
A browser based online RPG.

### Prerequisites
- [Yarn](https://yarnpkg.com/en/)
- [Docker](https://www.docker.com/community-edition)

The client uses SSR React components and [styled-components](https://github.com/styled-components/styled-components). This project follows the [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react).

### Development
- Install dependencies: `yarn`
- Eslint is configured to use Airbnb style guide
- Watch changes to assets: `yarn run watch`

The folder structure:

`.knex/` - Keeps the knexfile that specifies the database connection. It also houses the database migrations. See http://knexjs.org/ for documentation.

`bin/` - Project scripts.

`public/` - All files that should be publicly accessible via the web server, including the built scripts/css.

`src/` - The source files for react, scss, and pre-optimized images.

`template/` - The template file (the site html) and the method that accepts a react component and returns the template html with the server rendered react component.

### Run
- This projects uses docker-compose: `docker-compose up`
- Build assets: `yarn run build`
- Run database migrations (if they exist): `docker-compose run web yarn run db:migrate`

### Routing
Routes are configured in the file `src/react/App/index`.
