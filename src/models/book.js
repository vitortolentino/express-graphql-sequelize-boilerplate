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
    });

    return Book;
}
