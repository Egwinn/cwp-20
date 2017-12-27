module.exports = function (sequelize, DataTypes) {
  return sequelize.define('city', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.CHAR(35),
      allowNull: false,
      defaultValue: ''
    },
    CountryCode: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: '',
      references: {
        model: 'country',
        key: 'Code'
      }
    },
    District: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: ''
    },
    Population: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
      tableName: 'city'
    });
};
