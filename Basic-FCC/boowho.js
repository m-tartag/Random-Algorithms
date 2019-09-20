function booWho(bool) {
  if (typeof bool !== 'boolean') {
    return false;
  }
  return true;
}

console.log(booWho(null));
