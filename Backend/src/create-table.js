import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTS form;`.then(() => {
//   console.log("Tabela apagada!");
// });

sql`
  CREATE TABLE books ( 
    id TEXT PRIMARY KEY, 
    name TEXT, 
    description TEXT, 
    image TEXT, 
    category TEXT
  );
`.then(() => {
  console.log('Tabela criada!');
}).catch(err => {
  console.error('Erro ao criar a tabela:', err);
});
