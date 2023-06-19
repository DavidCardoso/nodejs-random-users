"use strict";
import axios from 'axios';

/**
 * API URL
 */
const apiUrl = "https://randomuser.me/api/?results=20";

/**
 * Axios options parameter
 */
const options: object = {
  method: "GET",
  url: apiUrl
};

/**
 * Get random users from API
 * @param options
 * @returns PROMISE_ANY result
 */
export const getUsers = async (): Promise<any> => {
  const result = await axios
    .request(options)
    .then((response) => response.data)
    .catch((err) => console.error(err));
  return result;
};

/**
 * Get the full name of the users
 * @param users
 * @returns ARRAY_STRING fullNames
 */
export const getFullNames = (users: Array<any>): Array<string> => {
  const fullNames = users.map(
    (item) => (item.name.fullName = `${item.name.first} ${item.name.last}`)
  );
  return fullNames;
};

/**
 * Calculate the average age of the users
 * @param users
 * @returns NUMBER avgAge
 */
export const calcAverageAge = (users: Array<any>): number => {
  const sumAge = users.reduce(
    (accumulator, item) => accumulator + item.dob.age,
    0
  );

  const avgAge = sumAge / users.length;

  return avgAge;
};

