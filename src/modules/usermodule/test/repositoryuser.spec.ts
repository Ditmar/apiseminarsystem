import mongoose from "mongoose";
import { createModel } from "../model/UserModel";
import UserRepository from "../repositories/UserRepository";
const newUser = {
  name: "Test",
  email: "test@gmail.com",
  password: "12335445",
};
beforeAll(() => {
  mongoose.connect(
    "mongodb://api_user:api1234@0.0.0.0:27017/api_seminario_test"
  );
});
afterAll(() => {
  mongoose.disconnect();
});
describe("Crud Operators of UserRespistory Class create", () => {
  test("Should be create an User ", async () => {
    const userRepo = new UserRepository(createModel(mongoose));
    const expected = await userRepo.create(newUser);
    expect(expected.name).toBe(newUser.name);
  });
  test("Should be get a list of users find ", async () => {
    const userRepo = new UserRepository(createModel(mongoose));
    const expected: any = await userRepo.find({});
    expect(typeof expected).toBe("object");
    expect(expected.length).toBeGreaterThan(0);
  });
  test("Should be get only one user findOne", async () => {
    const userRepo = new UserRepository(createModel(mongoose));
    const expected = await userRepo.create(newUser);
    const testData = await userRepo.findOne(expected.id);
    expect(expected.id).toBe(testData.id);
  });
  test("Should be update an user in their params name, email", async () => {
    const userRepo = new UserRepository(createModel(mongoose));
    const updateUser = await userRepo.create(newUser);
    await userRepo.update(updateUser.id, {
      name: "Update User",
      email: "update@gmail.com",
    });
    const expected = await userRepo.findOne(updateUser.id);
    expect(expected.name).toBe("Update User");
  });
  test("Should be delete user from collection users", async () => {
    const userRepo = new UserRepository(createModel(mongoose));
    const list: any = await userRepo.find({});
    list.forEach(async (item: any) => {
      await userRepo.delete(item.id);
    });
    const expected: any = await userRepo.find({});
    expect(expected.length).toBe(0);
  });
});
