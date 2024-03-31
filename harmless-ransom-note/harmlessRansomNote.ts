function harmlessRansomNote(note: string, magazine: string): boolean {
  const allWordsNote = note.split(' ');
  const allWordsMagazine = magazine.split(' ');
  const magazineObj: { [m: string]: number } = {};

  allWordsMagazine.forEach(e => {
    if (!magazineObj[e]) magazineObj[e] = 0;
    magazineObj[e]++;
  })

  let notePossible = true;
  allWordsNote.forEach(e => {
    if (magazineObj[e]) {
      magazineObj[e]--
      if (magazineObj[e] < 0) notePossible = false;
    }
    else {
      notePossible = false
    };
  })

  return notePossible;
}

console.log(harmlessRansomNote(
  'lets write a note', "lets continue with our harmless ransom note algorithm we are now going to write some code to check if we have the necessary words in our magazine to write our No.Let's start by looping through every word in our no array.We will say no array.For each word as we loop through our no array we want to check if each word is present on our magazineobject if the word is not present.We know that we cannot write a ransom note because we do not have the right words."
))