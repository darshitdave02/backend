let db = [];
let id  = 0;

const getAllTasks = async () => {
  return db;
};

const addTask = async (body) => {
  db.push({
    name: body.name,
    _id: id,
    isCompleted: false 
  });
  id+=1;
  return db;
  
};

const updateTask = async (id) => {
  db = db.map((item) => {
    if(item._id == id)
    {
      item.isCompleted = true;
    }
    return item;
  });
  return db;
};

const deleteTask = async (id) => {
  db = db.filter((item) => item._id != id);
  return db;
};

module.exports = {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask
};









    

