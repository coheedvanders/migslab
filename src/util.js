import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

const apiDomain = "https://localhost:5001/";

export default {
  synchLoop(condition, callback) {
    while (condition) {
      callback();
    }
  },
  executePostRequest(username, password, apiUrl, data, callback) {
    const token = Buffer.from(
      `username=${username};password=${password};orgshortname=`,
      "utf8"
    ).toString("base64");
    var url = apiDomain + apiUrl;
    axios
      .post(url, data, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(function(response) {
        callback(response);
      });
  },
  generateRandomString(len) {
    let text = " ";
    let chars =
      "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < len; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return text;
  },
};
