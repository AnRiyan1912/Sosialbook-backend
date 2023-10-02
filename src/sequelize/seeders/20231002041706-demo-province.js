"use strict";

const axios = require("axios");
const { Provinces } = require("../models");

const importProvinceFromApi = async () => {
  try {
    const api_key = "6865fc5581ba0addc3deceabdedecf50";
    const response = await axios.get(
      "https://api.rajaongkir.com/starter/province",
      {
        headers: {
          key: api_key,
        },
      }
    );

    const province_data = response.data.rajaongkir.results;

    for (const provinces of province_data) {
      await Provinces.create({
        province_name: provinces.province,
      });
    }

    console.log("Success import data Provinces");
  } catch (err) {
    console.log("Failed import data provinces", err?.message);
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

    await importProvinceFromApi();
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
