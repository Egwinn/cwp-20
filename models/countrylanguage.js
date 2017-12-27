module.exports = function (sequelize, DataTypes) {
  return sequelize.define('countrylanguage', {
    CountryCode: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      references: {
        model: 'country',
        key: 'Code'
      }
    },
    Language: {
      type: DataTypes.CHAR(30),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    IsOfficial: {
      type: DataTypes.ENUM('T', 'F'),
      allowNull: false,
      defaultValue: 'F'
    },
    Percentage: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0.0'
    }
  }, {
      tableName: 'countrylanguage'
    });
};
