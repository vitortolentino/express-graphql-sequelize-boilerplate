module.exports = (sequelize, DataTypes) => {
    var Author = sequelize.define('author', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'authors'
    });

    // Author.associate = ({book}) => {};

    return Author;
}
