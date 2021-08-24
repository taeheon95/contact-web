import { EditContact } from "./types";

const url = "http://localhost:3000/contacts";

export const getAll = async () => {
  const response = await fetch(url);
  return response;
};

export const remove = async (id: number) => {
  const result = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
  return result;
};

export const create = async (editContact: EditContact) => {
  const result = await fetch(`${url}`, {
    method: "POST",
    body: JSON.stringify({
      ...editContact,
      age: Number(editContact.age),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result;
};
