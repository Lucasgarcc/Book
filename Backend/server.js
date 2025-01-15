import fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import { DBPostgres } from './database-postgres.js';

// Criando uma instância do servidor Fastify
const server = fastify();

// Configurar CORS
server.register(fastifyCors, {
  origin: '*', // Permite todos os domínios
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
  credentials: true, // Permite envio de cookies (se necessário)
});

// Banco de dados: criando uma instância
const database = new DBPostgres();

// Rota para registro dos dados
server.post('/books', async (request, reply) => {
  try {
    const { name, description, image, category } = request.body;

    await database.create({
      name,
      description,
      image,
      category,
    });

    return reply.status(201).send({ message: 'Livro cadastrado com sucesso' });
  } catch (error) {
    console.error('Erro ao cadastrar livro:', error);

    return reply.status(500).send({ error: 'Erro ao cadastrar livro' });
  }
});

// Rota listar os dados registrados
server.get('/books', async (request) => {
  const search = request.query.search || '';
  const register = await database.list(search);

  return register;
});

// Rota para atualizar os dados registrados
server.put('/books/:id', async (request, reply) => {
  try {
    const registerID = request.params.id;
    const { name, description, image, category } = request.body;

    await database.update(registerID, {
      name,
      description,
      image,
      category,
    });

    return reply.status(200).send({ message: 'Livro atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar livro:', error);

    return reply.status(500).send({ error: 'Erro ao atualizar livro' });
  }
});

// Rota deletar os dados registrados
server.delete('/books/:id', async (request, reply) => {
  try {
    const registerID = request.params.id;
    await database.delete(registerID);

    return reply.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar livro:', error);

    return reply.status(500).send({ error: 'Erro ao deletar livro' });
  }
});

// Criando a conexão com servidor e resposta
server.listen({ host: '0.0.0.0', port: process.env.PORT ?? 3333 }, (err, address) => {
  if (err) {
    console.error('Erro ao iniciar o servidor:', err);
    process.exit(1);
  }
  console.log(`Server running on port ${address}`);
});


