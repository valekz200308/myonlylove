onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const line1 = "I LOVE U";
    const line2 = "FAHIRA CIWANDANI";
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendText(text, callback) {
      if (index < text.length) {
        titleElement.innerHTML += text[index];
        index++;
        setTimeout(() => appendText(text, callback), 300);
      } else if (callback) {
        callback();
      }
    }

    appendText(line1, () => {
      titleElement.innerHTML += "<br>";
      index = 0;
      appendText(line2);
    });

    clearTimeout(c);
  }, 1000);
};
