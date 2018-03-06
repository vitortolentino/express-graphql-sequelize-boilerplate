import models from './index';

module.exports = (sequelize, DataTypes) => {
    var Book = sequelize.define('book', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        title: {
            type: DataTypes.STRING
        },
        author: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'books'
    });

    // Book.associate = ({author}) => {
    //     Book.belongsTo(author, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // }

    return Book;
}
