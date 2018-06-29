/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contents', {
    idx: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    date: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    time: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    where: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
  	timestamps: false
  }, {
    tableName: 'contents'
  });
};
