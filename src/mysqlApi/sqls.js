const userlist = {
    add :  " INSERT INTO `users`.`userlist` (`name`,`userid`,`password`) VALUE ('ddd',324,'000') ",
    search : " SELECT `NAME` FROM `userlist`",
    update : "UPDATE `userlist` SET `NAME` = 'HHAHAHA' , `USERID` =222222 WHERE id=5 ",
    deletes : "DELETE FROM `USERLIST` WHERE `name` = 'ddd' ",
}

module.exports = {
    userlist
}