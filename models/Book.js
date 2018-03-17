export default (sequelize, DataTypes) => {
    var Book = sequelize.define('Book', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'books'
    });

    Book.associate = (models) => {
        Book.belongsTo(models.Author, {
            foreignKey: {
                allowNull: false,
                field: 'author',
                name: 'author'
            }
        })
    }   

    return Book;
}
