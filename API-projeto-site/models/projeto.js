'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let projeto = sequelize.define('projeto',{
		id: {
			field: 'idProjeto',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
        nomeProjeto: {
			field: 'nomeProjeto',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		tipoProjeto: {
			field: 'tipoProjeto',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		linkProjeto: {
			field: 'linkProjeto',
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
		tableName: 'projeto', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return projeto;
};
