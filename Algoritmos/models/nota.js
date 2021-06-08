'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let itemUser = sequelize.define('itemUser',{
		id: {
			field: 'idNota',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
        nota: {
			field: 'nota',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		fkItem: {
			field: 'fkItem',
			type: DataTypes.INTEGER,
			allowNull: false
		}, 
		fkUsuario: {
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

    return itemUser;
};
