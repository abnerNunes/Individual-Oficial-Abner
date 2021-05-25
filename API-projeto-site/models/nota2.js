'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let itemUser2 = sequelize.define('itemUser2',{
		id: {
			field: 'idNota',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
        nota2: {
			field: 'nota',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		fkItem2: {
			field: 'fkItem',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		fkUsuario2: {
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

    return itemUser2;
};
