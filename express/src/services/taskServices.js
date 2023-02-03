const db = require('../../../database/models');

const getAllTasks = async () => {
  const tasks = await db.Task.findAll();
  return tasks;
};

const addTask = async (body) => {
  try {
    const task = await db.Task.create({name: body.name, isCompleted: body.isCompleted});
    return task;
  } 
  catch (err) {
    console.log('failed to add task');
  }
  
  
};

const completeTask = async (_id) => {
  try {
    await db.Task.update({isCompleted: true},{
      where: {
        id: _id
      }
      
    });
    
  }
  catch (err) {
    console.log('failed to update task');
  }
};

const deleteTask = async (_id) => {
  try {
    await db.Task.destroy ({
      where: {
        id: _id
      }
    });
  }
  catch (err) {
    console.log('failed to delete task');
  }
};

module.exports = {
  getAllTasks,
  addTask,
  completeTask,
  deleteTask
};









    

