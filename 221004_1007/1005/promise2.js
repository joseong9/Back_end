function findAndSaveUser(Users) {
    Users.findOne({}, (err, user) => {
        if (err) {
            return console.error(err);
        }
        user.name = 'zero';
        user.save((err) => {
            if(err) {
                return console.error(err);
            }
            Users.findOne({ gender: 'm' }, (err, user) => {
            });
        });
    })
}