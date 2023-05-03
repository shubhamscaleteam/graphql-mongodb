import { Users } from "../../models/userModel.js";

export default {
  Query: {
    users: async () => {
      const finUsers = await Users.find();
      return finUsers;
    },
    user: async (_, { _id }) => {
      const findUser = await Users.findById(_id);
      return findUser;
    },
  },

  Mutation: {
    createUser: async (_, { input }) => {
      return await Users.create(input);
    },

    deleteUser: async (_, { _id }) => {
      const findUser = await Users.findById(_id);

      if (!findUser) {
        throw new Error("User not found..!!");
      }

      const user = await Users.deleteOne(findUser);

      if (user) {
        const message = {
          message: "User deleted successfully..!!",
        };

        return message;
      }
    },

    updateUser: async (_, { _id, input }) => {
      const findUser = await Users.findById(_id);

      if (!findUser) {
        throw new Error("User not found..!!");
      }

      findUser.userName = input.userName;
      findUser.age = input.age;
      findUser.gender = input.gender;
      findUser.email = input.email;

      const updatedUser = await findUser.save();

      if (updatedUser) {
        const message = { message: "User updated successfully..!!" };
        return message;
      }
    },
  },
};
