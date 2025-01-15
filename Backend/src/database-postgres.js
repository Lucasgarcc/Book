import { randomUUID } from "node:crypto";
import { sql } from "./db.js";

export class DBPostgres {
  // Método para listar livros, com filtro opcional
  async list(search) {
    try {
      let data;

      if (search) {
        data = await sql`
          SELECT * FROM books 
          WHERE name ILIKE ${'%' + search + '%'}
        `;
      } else {
        data = await sql`SELECT * FROM books`;
      }

      return data;
    } catch (error) {
      console.error("Erro ao listar livros:", error);
      throw new Error("Erro ao listar livros");
    }
  }

  // Método para criar um novo livro
  async create(data) {
    try {
      const dataID = randomUUID();
      const { name, description, image, category } = data;

      if (!name || !description || !image || !category) {
        throw new Error("Todos os campos são obrigatórios!");
      }

      await sql`
        INSERT INTO books (id, name, description, image, category) 
        VALUES (${dataID}, ${name}, ${description}, ${image}, ${category})
      `;

      return { id: dataID };
    } catch (error) {
      console.error("Erro ao criar livro:", error);
      throw new Error("Erro ao criar livro");
    }
  }

  // Método para atualizar um livro existente
  async update(id, data) {
    try {
      const { name, description, image, category } = data;

      if (!id || !name || !description || !image || !category) {
        throw new Error("ID e todos os campos são obrigatórios!");
      }

      await sql`
        UPDATE books 
        SET name = ${name},
            description = ${description},
            image = ${image},
            category = ${category}
        WHERE id = ${id}
      `;

      return { id };
    } catch (error) {
      console.error("Erro ao atualizar livro:", error);
      throw new Error("Erro ao atualizar livro");
    }
  }

  // Método para deletar um livro
  async delete(id) {
    try {
      if (!id) {
        throw new Error("ID é obrigatório para deletar!");
      }

      await sql`DELETE FROM books WHERE id = ${id}`;
    } catch (error) {
      console.error("Erro ao deletar livro:", error);
      throw new Error("Erro ao deletar livro");
    }
  }
}
