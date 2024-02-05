import Sequelize, { DataTypes, Model } from "sequelize";
import util from 'util'

const sequelize = new Sequelize('postgresql:///animal-app', {
    logging: false,
    define: {
        underscored: true,
        timestamps: false,
    },
})

class Species extends Model {
    [util.inspect.custom](){
        return this.toJSON()
    }
}

Species.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
    },
    animal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    length: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.TEXT,
    }
},{
    modelName: 'species',
    sequelize: sequelize
})

class Category extends Model {
    [util.inspect.custom](){
        return this.toJSON()
    }
}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }, 
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    }

},{
    modelName: 'category',
    sequelize: sequelize
})

Category.hasMany(Species, {foreignKey: 'categoryId'})
Species.belongsTo(Category, {foreignKey: 'categoryId'})

export { sequelize, Species, Category}

// await sequelize.sync()
