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
        image_post:
          "https://images.pexels.com/photos/2526398/pexels-photo-2526398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption:
          "Pantai adalah tempat untuk bersantai melepas semua beban pikiran",
        user_id: 1,
        province_id: 17,
        city_id: 48,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image_post:
          "https://cdn.pnghd.pics/data/1086/gambar-orang-korea-11.jpg",
        caption:
          "Kamu bagaikan setengah ragaku karena kamu adalah semangatku  😊",
        user_id: 1,
        province_id: 17,
        city_id: 48,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image_post:
          "https://images.pexels.com/photos/2438189/pexels-photo-2438189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption: "Senja adalah teman ku❤️",
        user_id: 2,
        province_id: 17,
        city_id: 48,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image_post:
          "https://cdn.pnghd.pics/data/171/foto-foto-orang-korea-25.jpg",
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
