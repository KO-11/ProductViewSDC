# Product-View
So you've decided to undertake the greatest Target component known to human kind?! 

It's pretty damn easy, my react components automatically pull from the database and populate data according to their images.

The only issue that you will have to address will be changing from MongoDB to Mysql to handle the different gaming systems. Each product has a "system" key that allows you to link up to Related items when the app is fully functioning.

It is currently not coded to work with Related Items but it shouldn't take any work to sync those two up. 

My CSS is a bit wonky but I've gone through and tried to finesse it a little bit. 

If my "shop all" element is giving you trouble, you can change it's orientation by adjusting the #shopall{} id in the css folder. That should be the only area that acts weird.

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

API endpoints:
- GET: '/api/items' get all products.
- PUT: '/api/items/:id' change one specific product.
- POST: '/api/items' post a product.
- DELETE: '/api/items' delete all products.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
