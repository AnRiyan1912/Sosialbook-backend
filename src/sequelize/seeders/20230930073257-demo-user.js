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
    await queryInterface.bulkInsert("Users", [
      {
        image_profile:
          "https://flazztax.com/wp-content/uploads/2022/02/Ketahui-Wajib-Pajak-Orang-Pribadi-dan-Kewajibannya-1200x675.jpg",
        username: "andre",
        password:
          "$2b$10$w2l1WGrsZc5iuWkiT56GluGLSmh1ffG2Blqt7ngKUby69sEKxCXgS",
        firstname: "andre",
        lastname: "riyanto",
        bio: "Never give up bruh",
        age: 19,
        email: "andreriyantoo19@gmail.com",
        date_of_birth: "2004-12-19",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        image_profile:
          "https://flazztax.com/wp-content/uploads/2022/02/Ketahui-Wajib-Pajak-Orang-Pribadi-dan-Kewajibannya-1200x675.jpg",
        username: "jamal",
        password:
          "$2b$10$UhxafI1yUrOV97NuSeLOxOV9nMYYPORctomo/7GUzR2P4cNlzaqUi",
        firstname: "jamal",
        lastname: "wicaksono",
        bio: "Never surender",
        age: 29,
        email: "jamalwicaksono@gmail.com",
        date_of_birth: "2004-02-22",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        image_profile:
          "https://cdn1-production-images-kly.akamaized.net/SyRFEsgZ-JJ1P2VoWven4KIp9H8=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3220607/original/002220400_1598510794-9b3ee95069a9d94d80dfcdba43.jpg",
        username: "aulia",
        password:
          "$2b$10$bNMhE.OiJZr7K9ENuJoTbeoZF8iTjot/2IzkYjBcZNdY2HuTR.0I6",
        firstname: "aulia",
        lastname: "risti zahra",
        bio: "Run for gimic",
        age: 19,
        email: "auliaristi@gmail.com",
        date_of_birth: "2004-10-19",
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
