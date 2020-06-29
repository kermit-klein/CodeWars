// Description:
// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names) {
  if (names.length != 0) {
    let listOfNames = names[0].name;
    if (names.length > 1) {
      for (i = 1; i < names.length - 1; i++) {
        listOfNames = listOfNames.concat(", ", names[i].name);
      }
      listOfNames = listOfNames.concat(" & ", names[names.length - 1].name);
    }
    return listOfNames;
  } else {
    return "";
  }
}
