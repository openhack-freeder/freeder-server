/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('content', {
    idx: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    createTime: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    endTime: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    region: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    category: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    time: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'content'
  });
};
