var db = app.db; 


var table = function(table_id) {
    this.gettableById.call(table_id, function(err, result){
        if (err) throw err;

        this.id = result.id;
        this.name = result.guest_name;
        this.phone = result.phone_number;
        this.email = result.email;
    });
}

table.prototype.gettableById = function (table_id, callback) {
    db.query(
        'call gettableById(?);',
        [ table_id ],
        function(err, results, fields) {
            if(err) {
                callback(err);
            } else {
                callback(null, results[0][0]);
            }
        }
    );
}

module.exports = table;