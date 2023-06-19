"use strict";
import { getUsers, getFullNames, calcAverageAge } from './randomUsers';

/**
 * Main function
 */
const main = async () => {
  const users = await getUsers();
  console.log("Response: ", users.results.length);

  const usersFullName = getFullNames(users.results);
  console.log("Users Full Name: ", usersFullName);

  const usersAvgAge = calcAverageAge(users.results);
  console.log("Users Average Age: ", usersAvgAge);
};

// Call the main function
main();
