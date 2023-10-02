"use strict";
const axios = require("axios");
const { City } = require("../models");

const importCityFromApi = async () => {
  try {
    const response = await axios.get(
      "https://api.rajaongkir.com/starter/city",
      {
        headers: {
          key: "6865fc5581ba0addc3deceabdedecf50",
        },
      }
    );
    const city_data = response.data.rajaongkir.results;
    for (const city of city_data) {
      await City.create({
        city_name: city.city_name,
        province_id: city.province_id,
      });
    }
    console.log("Success import data and add to database");
  } catch (err) {
    console.log("Failed import data City", err?.message);
  }
};

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
    await importCityFromApi();
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
