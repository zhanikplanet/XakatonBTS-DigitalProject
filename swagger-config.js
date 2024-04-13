module.exports = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Bank System Service',
        version: '1.0.0',
        description: 'A simple Bank System API with Swagger documentation',
      },
      servers: [
        {
          url: 'http://localhost:3000/api',
          description: 'Local server',
        },
      ],
    },
    apis: ['./routes/*.js'],
  };