'use strict';

const Kitty = require('./models/kitty');
const mongoose = require('mongoose');
const process = require('process');
const { ArgumentParser } = require('argparse');

async function connect(dburl) {
   return mongoose.connect(dburl, { useNewUrlParser: true });
}

async function populateKitties() {
   await Promise.all([
      new Kitty({ name: 'drea' }).save(),
      new Kitty({ name: 'buckie' }).save(),
      new Kitty({ name: 'bubba' }).save(),
      new Kitty({ name: 'eevee' }).save()
   ]);
}

async function populateDb() {
   await populateKitties();
}

function closeConn() {
   mongoose.connection.close();
}

function onError(err) {
   console.error(err);
   closeConn();
}

function main() {
   let parser = new ArgumentParser({ 
      description: 'cli for populating boot with sample data' 
   });

   parser.addArgument('--dburl', 
      { 
         defaultValue: 'mongodb://localhost:27017/kitties',
         help: 'URL to the mongodb to populate. ' +
            'Defaults to mongodb://localhost:27017/kitties'
      });
   let args = parser.parseArgs();

   connect(args.dburl)
      .then(populateDb)
      .then(closeConn)
      .catch(onError);
}

main();
