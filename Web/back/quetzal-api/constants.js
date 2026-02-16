import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   port: process.env.DB_PORT || 10627
};

export const PORT = process.env.PORT || 8000;

export const statLimits = {
   health: {min: 1, max: 1000},
   mana: {min: 0, max: 300},
   defense: {min: 0, max: 250},
   damage: {min: 0, max: 125},
   speed: {min: 1, max: 8},
};