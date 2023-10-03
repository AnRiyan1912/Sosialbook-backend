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
    await queryInterface.bulkInsert("ProductCategories", [
      {
        category_name: "Peralatan",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Mebel",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Peralatan rumah tangga",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Perkakas",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Kebun",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Vidio Game",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Buku, Film, & Musik",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Tas & Koper",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Pakaian & Sepatu Wanita",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Pakaian & Sepatu Pria",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Perhiasan & aksesories",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Kesehatan & Kecantikan",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Bayi & Anak-Anak",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Kebutuhan Hewan Peliharaan",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Mainan & Game",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Elektronik & Komputer",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Telepon seluler",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Sepeda",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Seni & Kerajinan",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Olahraga & Outdoor",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Komponen otomotif",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Alat Music",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Barang Antik & Koleksi",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Cuci Gudang",
        type_id: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Mobil/Truck",
        type_id: 2,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Sepeda Motor",
        type_id: 2,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Powersport",
        type_id: 2,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "RV/Camper",
        type_id: 2,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Trailer",
        type_id: 2,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Perahu",
        type_id: 2,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Komersial/Industri",
        type_id: 2,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Lainnya",
        type_id: 2,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Rumah",
        type_id: 3,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Rumah Bandar",
        type_id: 3,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Apartement/Kondominium ",
        type_id: 3,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        category_name: "Kamar saja",
        type_id: 3,
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
