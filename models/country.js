module.exports = function (sequelize, DataTypes) {
  return sequelize.define('country', {
    Code: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    Name: {
      type: DataTypes.CHAR(52),
      allowNull: false,
      defaultValue: ''
    },
    Continent: {
      type: DataTypes.ENUM('Asia', 'Europe', 'North America', 'Africa', 'Oceania', 'Antarctica', 'South America'),
      allowNull: false,
      defaultValue: 'Asia'
    },
    Region: {
      type: DataTypes.CHAR(26),
      allowNull: false,
      defaultValue: ''
    },
    SurfaceArea: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0.00'
    },
    IndepYear: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    Population: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    LifeExpectancy: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    GNP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    GNPOld: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    LocalName: {
      type: DataTypes.CHAR(45),
      allowNull: false,
      defaultValue: ''
    },
    GovernmentForm: {
      type: DataTypes.CHAR(45),
      allowNull: false,
      defaultValue: ''
    },
    HeadOfState: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    Capital: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Code2: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ''
    }
  }, {
      tableName: 'country'
    });
};
