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
    await queryInterface.bulkInsert("Products", [
      {
        image_product:
          "https://down-id.img.susercontent.com/file/fa4ab5c6117314b32faec9981a378ea0",
        product_name: "Iphone 11 pro",
        price: 5000000,
        description: "Dijual iphone 11 pro sisa 2 unit lagi jual banting harga",
        type_id: 1,
        category_id: 17,
        user_id: 1,
        city_id: 48,
        province_id: 17,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        image_product:
          "https://imgx.gridoto.com/crop/0x0:0x0/700x500/filters:watermark(file/2017/gridoto/img/watermark_otomotifnet.png,5,5,60)/photo/gridoto/2018/04/20/3564423146.jpeg",
        product_name: "BMW E36 ",
        price: 95000000,
        description: "For sel car bmw e 36 pasti gacor",
        type_id: 2,
        category_id: 25,
        user_id: 2,
        city_id: 48,
        province_id: 17,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        image_product:
          "https://www.blibli.com/friends-backend/wp-content/uploads/2021/12/air-jordan.jpeg",
        product_name: "Sepatu Air Jordan",
        price: 0,
        description:
          "Kalau minat chat agar bisa dapat info selanjutnya di bagian harga gess",
        type_id: 1,
        category_id: 10,
        user_id: 3,
        city_id: 48,
        province_id: 17,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        image_product:
          "https://notordinaryblogger.com/wp-content/uploads/2022/01/Cek-Jam-Tangan-Rolex-Original.png",
        product_name: "Jam tangan rolexx",
        price: 0,
        description: "Dijual jam tangan rolexx untuk harga bisa chat ",
        type_id: 1,
        category_id: 11,
        user_id: 1,
        city_id: 48,
        province_id: 17,
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
