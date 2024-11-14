export function guestIdGenerator() {
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let guestId = "";

    for (let i = 0; i < 20; i++) {
      const coinFlip = Math.floor(Math.random() * 2);
      const randomNum = Math.floor(Math.random() * 10);
      const randomLetter = Math.floor(Math.random() * alphabet.length);

      if (!coinFlip) {
        guestId += randomNum.toString();
      } else {
        guestId += alphabet[randomLetter];
      }
    }

    return guestId;
  }