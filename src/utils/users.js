const users = [];

// Add User

const addUser = ({ id, username, room }) => {
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //validate the data

  if (!username || !room) {
    return {
      error: "Username and room are required",
    };
  }

  //check for unique username
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  if (existingUser) {
    return {
      error: "Username is in use",
    };
  }

  //strore user
  const user = { id, username, room };
  users.push(user);
  return user;
};

const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id;
  });

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  return users.filter((user) => {
    return user.room === room;
  });
};

// const user = addUser({
//   id: 20,
//   username: "lal",
//   room: "c++",
// });

// const user1 = addUser({
//   id: 20,
//   username: "lal",
//   room: "c++",
// });

// console.log(user1);
module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
