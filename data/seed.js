const fs = require('fs');
const split2 = require('split2');
const split = require('split');
const faker = require('faker');
const Readable = require('stream').Readable;
const Writable = require('stream').Writable;


var systems = ['PS5', 'PS4', 'switch', 'xbox one']
var games = ["Marvel's Spider-Man: Miles Morales Launch Edition", "Devil May Cry 5: Special Edition", "Immortals Fenyx Rising", "Watch Dogs: Legion", "Guilty Gear: Strive"]

var writableStream = fs.createWriteStream('data.txt');
var readableStream = fs.createReadStream('data.txt');

writableStream.on('finish', function() {
  console.log('write complete');
})

writableStream.on('error', function(err) {
  console.log(err);
})

const seedFunc = () => {
  for (let i = 0; i < 10000000; i++) {
    // if (i ===0) {
    //   writableStream.write('[');
    // }
    let item = {};

    item.id = i;
    item.item = games[Math.floor(Math.random()*5)];
    item.price = 40.99 + Math.floor(Math.random()*5)*Math.floor(Math.random()*5);
    item.system = systems[Math.floor(Math.random()*4)];

    item.imgUrl = [];
    let numImg = Math.floor(Math.random()*5 + 2);
    for (let j = 0; j < numImg; j++) {
      let img = `https://loremflickr.com/640/480/videogames?random=${j}`;
      item.imgUrl.push(img);
    }

    let jsonItem = JSON.stringify(item);
    writableStream.write(jsonItem + '\n');
    // if(i === 9) {
    //   writableStream.write(jsonItem + ', ');
    // } else {
    //   writableStream.write(jsonItem + ']');
    // }
  }
}

seedFunc();

// const seedFunc = (item) => {
//   var data = JSON.stringify(item);
//   fs.writeFile('message.txt', data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });
  // db.insertMany(arr)
  //   .then(() => {
  //     console.log("seeded");
  //     mongoose.connect.close();
  //   })
  //   .catch((err) => {
  //     console.log("Not seeded");
  //   })
// };

// seedFunc({id: 1, item: 'game', price: 56.99, imgUrl: ['stringurl'], sytem: 'systemstring'});