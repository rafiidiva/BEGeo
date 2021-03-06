// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });


//Register plugins
fastify.register(require('fastify-static'), require("./config/static").public);
fastify.register(require('fastify-static'), require("./config/static").assets);
fastify.register(require('fastify-static'), require("./config/static").forms);
// Declare a route
fastify.get('/', async (request, reply) => {
  reply.sendFile('index.html');// serving path.join(__dirname, 'public', 'index.html') directly
});

// Declare a route
fastify.get('/apa', async (request, reply) => {
  return { hello: 'apa' };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()