class DateFormatter extends Date {

    mySQLDate() {
        var resultDate = this.toISOString().slice(0, 19).replace('T', ' ');
        return resultDate;
    }
}
  
// console.log(new DateFormatter('August 19, 1975 23:15:30').mySQLDate());
// expected output: "19-Aug-1975"