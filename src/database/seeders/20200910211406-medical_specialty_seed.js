"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("medical_specialty", [
      {
        nome: "alergologia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "angiologia buco maxilo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "angiologia cardiologia clínica",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "angiologia cardiologia infantil",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "cirurgia cabeça e pescoço",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "cirurgia cardíaca",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "cirurgia de torax",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "cirurgia geral",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "cirurgia pediátrica",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "cirurgia plástica",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "cirurgia torácic",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "cirurgia vascular",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "clínica médica",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("medical_specialty", null, {});
  },
};
