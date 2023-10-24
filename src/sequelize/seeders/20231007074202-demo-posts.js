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
    await queryInterface.bulkInsert("Posts", [
      {
        caption:
          "Pantai adalah tempat untuk bersantai melepas semua beban pikiran",
        user_id: 1,
        province_id: 17,
        city_id: 48,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        caption:
          "Kamu bagaikan setengah ragaku karena kamu adalah semangatku  😊",
        user_id: 1,
        province_id: 17,
        city_id: 48,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        caption: "Senja adalah teman ku❤️",
        user_id: 2,
        province_id: 17,
        city_id: 48,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        caption: "Senyum itu adalah ibadah🙂",
        user_id: 3,
        province_id: 17,
        city_id: 48,
        createdAt: new Date(),
        updatedAt: new Date(),
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
