// const fetch = require("node-fetch");

const API_ENDPOINT = "https://fakestoreapi.com/products?limit=6";

exports.handler = async () => {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return { body: data };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }
};
