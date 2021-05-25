create database INAD;

use INAD;

create table Usuario(
idUsuario int primary key auto_increment,
nomeUsuario varchar(45),
emailUsuario varchar(70),
senhaUsuario varchar(25)
);

create table Projeto(
idProjeto int primary key auto_increment,
nomeProjeto varchar(45),
tipoProjeto varchar(20),
linkProjeto varchar(125),
fkUsuario int,
foreign key(fkUsuario) references Usuario(idUsuario)
);

create table Item(
idItem int primary key auto_increment,
nomeItem varchar(65)
);

create table itemUser(
idNota int primary key auto_increment,
nota int check(nota<=10),
fkItem int,
foreign key(fkItem) references Item(idItem),
fkUsuario int,
foreign key(fkUsuario) references Usuario(idUsuario)
);

insert into Usuario values(null, 'Abner', 'abner@gmail.com', '123123'),
							(null, 'Sim', 'sim@gmail.com', '123sim');
                            
insert into Projeto values(null, 'Fvck Evrt', 'Álbum', 'https://oioi.com', 1);

 insert into Item values(null, 'We Are Not Your Kind'),
						(null, 'Reckless and Rentless'); 
                        
insert into Item values(null, 'Pantheon of The Nightside Gods');
                              


select * from itemuser;

select * from usuario;

select * from item;
