module.exports.config = {
  name: "dog",
  version: "1.0.1",
  permssion: 0,
  prefix: true,
  credits: "ARIF-BABU",
  description: "",
  category: "Picture",
  cooldowns: 5,
  dependencies: {
        "axios": "",
        "fs-extra": ""
    }
}

module.exports.run = async ({ api, event }) => {
        const axios = require('axios');
        const request = require('request');
        const fs = require("fs");
        axios.get('https://nekos.life/api/v2/img/woof').then(res => {
        let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);

        let callback = function () {
                                        api.sendMessage({
                                                attachment: fs.createReadStream(__dirname + `/cache/dog.${ext}`)
                                        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/dog.${ext}`), event.messageID);
                                };
                                request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/dog.${ext}`)).on("close", callback);
                        })
    }
