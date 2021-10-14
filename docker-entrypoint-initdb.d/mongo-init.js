print("Start ########################");
db = db.getSiblingDB("api_seminario_dev");
db.createUser({
  user: "api_user",
  pwd: "api1234",
  roles: [{ role: "readWrite", db: "api_seminario_dev" }],
});
db.createCollection("users");

db = db.getSiblingDB("api_seminario_test");
db.createUser({
  user: "api_user",
  pwd: "api1234",
  roles: [{ role: "readWrite", db: "api_seminario_test" }],
});
db.createCollection("users");

db = db.getSiblingDB("api_seminario_production");
db.createUser({
  user: "api_user",
  pwd: "api1234",
  roles: [{ role: "readWrite", db: "api_seminario_production" }],
});
db.createCollection("users");

print("END ##########################");
