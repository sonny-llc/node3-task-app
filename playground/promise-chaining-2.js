require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5d064504a5c6c222186f6e55').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
}

deleteTaskAndCount('5d065cbef287cc352c392d07').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});