const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

const getHtml = async () => {
  try {
    return await axios.get("http://www.swu.ac.kr/index.do");
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("div.list.on ul").children("li");

    $bodyList.each(function(i, elem) {
      ulList[i] = {
          title: $(this).find('a').text(),
          url: $(this).find('a').attr('href'),
          date: $(this).find('span.date').text()
      };
    });

    const data = ulList.filter(n => n.title);
    return data;
  })
  .then(res => log(res));
