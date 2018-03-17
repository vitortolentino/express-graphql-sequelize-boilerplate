import fs        from 'fs';
import path      from 'path';
import Sequelize from 'sequelize';
const basename = path.basename(module.filename)
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const modelPath = path.join(__dirname, '../models');

const sequelize = config.use_env_variable ?
    new Sequelize(process.env[config.use_env_variable]) :
    new Sequelize(config.database, config.username, config.password, config);

const db = {};
fs
    .readdirSync(modelPath)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
