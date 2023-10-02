"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("ProductTypes", [
      {
        type_name: "goods for sale",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        type_name: "vihicle for sale",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        type_name: "house for sale",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
