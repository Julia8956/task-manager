require('../src/db/mongoose');
const Task = require('../src/models/task');


// Task.findByIdAndDelete('5d48fc8144f0d84394d49d2b')
// .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

const deleteTaskAndCount = async (id, completed) => {
    await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed });
    return count;
};

deleteTaskAndCount('5d4911f3ef783006649f7911', false)
.then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});