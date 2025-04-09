const serializeUser = (user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
  };
  
  const serializeUsers = (users) => {
    return users.map(serializeUser);
  };

  module.exports = {
    serializeUser,
    serializeUsers,
  };