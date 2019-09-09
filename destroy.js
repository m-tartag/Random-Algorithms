function destroyer(arr) {
  // Remove all the values
  const args = Array.from(arguments);

  console.log(
    arr.filter(function(element) {
      return !args.includes(element);
    })
  );
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
