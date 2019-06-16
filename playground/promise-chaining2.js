require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5d064504a5c6c222186f6e55').then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});