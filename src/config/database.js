module.exports = {
  username: process.env.DB_USERNAME || "vinicius",
  password: process.env.DB_PASSWORD || "123456",
  database: process.env.DB_DATABASE_NAME || "hospital",
  host: process.env.HOST || "127.0.0.1",
  dialect: "mysql",
  dialectOptions: {
    connectTimeout: 1000 * 10, // 1000 * 10 milissegundos = 10 segundos
  },
};
