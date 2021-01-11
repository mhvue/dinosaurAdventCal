//all the links for youtube vidoes, games..etc 

//as of 1/3/2021: want to change this it is a template for links table 
module.exports = (sequelize, DataTypes)=>{
    const LinksDB = sequelize.define("links",{
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: true
        },
        linksInfo: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    LinksDB.associate = models =>{
        LinksDB.hasMany(models.facts)
    }

    return LinksDB;
}

