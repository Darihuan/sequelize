const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    {
        dialect: 'sqlite',
        storage: 'database.sqlite'
    }
);
sequelize
    .authenticate()
    .then(() => {
            console.log('Connection has been established successfully.');
    })
    .catch(err => {
            console.error('Unable to connect to the database:', err);
    });


const Persona = sequelize
    .define('Persona',
    {
        id_persona: {type:Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        user: Sequelize.STRING,
        password: Sequelize.STRING,
        name: Sequelize.STRING,
        surname: Sequelize.STRING,
        companyEmail: Sequelize.STRING,
        personalEmail: Sequelize.STRING,
        city: Sequelize.STRING,
        active: Sequelize.BOOLEAN,
        createdDate: Sequelize.DATE
    });

sequelize.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`);
    });

module.exports = Persona;