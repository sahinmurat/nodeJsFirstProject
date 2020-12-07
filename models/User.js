const {Sequelize, DataTypes} = require('sequelize');
require('dotenv').config();

//< connecting to db >
const {DB_USERNAME,  DB_PASSWORD,  DB_HOSTNAME,  DB_PORT,  DB_NAME} = process.env; 
const  sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`);

sequelize
.authenticate()
.then(()=> console.log('succeded db'))
.catch((err)=> console.log('Unable to connect!', err));
// </connecting to db >

// ORM table
// recruiter table in the clarusway

// modelname attribute options

const UserModel = sequelize.define(
    "recruiter",
    {
        // attribute
        // id firstName lastName update createdate
        firstName:{
            type: DataTypes.STRING,
        },
        lastName:{
            type: DataTypes.STRING
        }
    }

    ,
    {
        // options
    }
)
module.exports = UserModel;