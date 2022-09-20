const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.hanbit.co.kr/academy/books/new_book_list.html';
axios.get(url)
    .then(response => {
        const $ = cheerio.load(response.data);

        $('.view_box').each((index, element)=> {
            let title = $(element).find('.book_tit').text().trim();
            let author = $(element).find('.book_writer').text().trim();
            author = author.split(',').map(x => x.trim()).join(', ');
            console.log(index+1,'-------------------------------------------------------');
            console.log(title);
            console.log(author);
        });
    })
    .catch(err => {
        console.log(err);
    });

