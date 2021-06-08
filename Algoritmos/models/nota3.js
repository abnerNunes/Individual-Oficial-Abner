'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let itemUser3 = sequelize.define('itemUser3',{
		id: {
			field: 'idNota',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
        nota3: {
			field: 'nota',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		fkItem3: {
			field: 'fkItem',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		fkUsuario3: {
			field: 'fkUsuario',
			type: DataTypes.INTEGER,
			allowNull: false
		}


	}, 
	{
		tableName: 'itemUser', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return itemUser3;
};
