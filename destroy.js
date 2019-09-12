function destroyer(arr) {
  // Remove all the values

  // Grab Arguments
  const args = Array.from(arguments);

  // filter array for values != arguments

  console.log(
    arr.filter(function(element) {
      return !args.includes(element);
    })
  );
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
