// https://dnd5esrd.d20.cz/grimoar/grimoar-moci.html

[...document.querySelectorAll("main h4")]
  .map((header) => ({
    namecz: header.childNodes[1].textContent.trim().toLowerCase(),
    nameen: header.nextElementSibling.textContent.trim().toLowerCase(),
  }))
  .reduce((acc, curr) => {
    acc[curr.nameen] = curr.namecz;
    return acc;
  }, {});
