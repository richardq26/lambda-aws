"use strict";

module.exports.hello = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hola mundoooooo"
      }
    ),
  };
  // (lugar del error, respuesta)
  return callback(null, response)
};
