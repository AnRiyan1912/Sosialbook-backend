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
    await queryInterface.bulkInsert("Provinces", [
      {
        provinces_name: "Aceh",
      },
      {
        provinces_name: "Bali",
      },
      {
        provinces_name: "Bangka Belitung",
      },
      {
        provinces_name: "Banten",
      },
      {
        provinces_name: "Bengkulu",
      },
      {
        provinces_name: "Daerah Istimewa Yogyakarta",
      },
      {
        provinces_name: "Gorontalo",
      },
      {
        provinces_name: "DKI Jakarta",
      },
      {
        provinces_name: "Jambi",
      },
      {
        provinces_name: "Jawa Barat",
      },
      {
        provinces_name: "Jawa Tengah",
      },
      {
        provinces_name: "Jawa Timur",
      },
      {
        provinces_name: "Kalimantan Barat",
      },
      {
        provinces_name: "Kalimantan Selatan",
      },
      {
        provinces_name: "Kalimantan Tengah",
      },
      {
        provinces_name: "Kalimantan Timur",
      },
      {
        provinces_name: "Kalimantan Utara",
      },
      {
        provinces_name: "Kepulauan Riau",
      },
      {
        provinces_name: "Lampung",
      },
      {
        provinces_name: "Maluku Utara",
      },
      {
        provinces_name: "Maluku",
      },
      {
        provinces_name: "Nusa Tenggara Barat",
      },
      {
        provinces_name: "Nusa Tenggara Timur",
      },
      {
        provinces_name: "Papua Barat",
      },
      {
        provinces_name: "Papua",
      },
      {
        provinces_name: "Riau",
      },
      {
        provinces_name: "Sulawesi Selatan",
      },
      {
        provinces_name: "Sulawesi Tengah",
      },
      {
        provinces_name: "Sulawesi Tenggara",
      },
      {
        provinces_name: "Sulawesi Utara",
      },
      {
        provinces_name: "Sumatra Barat",
      },
      {
        provinces_name: "Sumatra Selatan",
      },
      {
        provinces_name: "Sumatra Utara",
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
