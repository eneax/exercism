const getUser = (restOfURL) => {
  if (/^users=/.test(restOfURL)) {
    return restOfURL.slice(6);
  }

  return "";
};

const makeNewObject = (name) => ({
  name: name,
  owes: {},
  owed_by: {},
  balance: 0,
});

const updateObject = (obj, owesOrOwedby, user, amount) => {
  obj.balance += owesOrOwedby === "owes" ? -amount : amount;
  const reverseSide = owesOrOwedby === "owes" ? "owed_by" : "owes";

  if (obj[reverseSide][user]) {
    amount -= obj[reverseSide][user];

    if (amount >= 0) {
      delete obj[reverseSide][user];
    } else {
      obj[reverseSide][user] = -amount;
    }
  }

  if (amount > 0) {
    obj[owesOrOwedby][user] = obj[owesOrOwedby][user]
      ? obj[owesOrOwedby][user] + amount
      : amount;
  }
};

export class RestAPI {
  #users = [];

  #getApis = {
    "/users": (restOfURL) => {
      const userName = getUser(restOfURL);

      if (userName === "") {
        return {
          users: this.#users,
        };
      } else {
        for (let user of this.#users) {
          if (user.name === userName) {
            return { users: [user] };
          }
        }
      }
    },
  };

  #postApis = {
    "/add": (payload) => {
      const newUser = makeNewObject(payload.user);
      this.#users.push(newUser);
      return newUser;
    },
    "/iou": (payload) => {
      const users = [];
      for (const user of this.#users) {
        if (user.name === payload.lender) {
          updateObject(user, "owed_by", payload.borrower, payload.amount);
          users.push(user);
        } else if (user.name === payload.borrower) {
          updateObject(user, "owes", payload.lender, payload.amount);
          users.push(user);
        }
      }

      return { users };
    },
  };

  constructor(usersObj) {
    for (let user of usersObj.users) {
      this.#users.push(user);
    }
  }

  get(url) {
    const params = url.split("?");
    return this.#getApis[params[0]](params[1]);
  }

  post(url, payload) {
    return this.#postApis[url](payload);
  }
}
