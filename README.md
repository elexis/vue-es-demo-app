# vue-es-demo-project

This project demonstrates the usage of the [Elexis-Server](https://github.com/elexis/elexis-server) (ES) vue.js plugin. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## Initial project setup

This project was set-up by executing the following steps:

1. Install [vue-cli](https://cli.vuejs.org/)
2. `vue-create vue-es-demo-project`
3. Select `default` on the question arising
4. `cd vue-es-demo-project`
5. `vue add router`
6. Select `yes` on the question `Use history mode for router?`
7. `vue add vuex`
8. `npm i @col.panic/vue-es -s`
9. `npm i pug-plain-loader`
10. Modify `main.js` to [install](https://www.npmjs.com/package/@col.panic/vue-es#installation) the plugin
11. Modify `components/HelloWorld.vue` to use the plugin

In order to run it, you need an [Elexis-Server](https://github.com/elexis/elexis-server) running on `es.localhost`, which is essentially the same IP as `localhost`. The reason the server has to run on `es.localhost` is that [HSTS](https://de.wikipedia.org/wiki/HTTP_Strict_Transport_Security) is being
activate the first time you access the ES, forcing any further communication over TLS. So as not to block your own app, running
on `localhost` we have to point to a different localhost name.