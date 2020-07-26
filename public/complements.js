// Listens to the button, and requests the "/complements" directory.
// It returns a response in json.
// Then change the innertext of the p element ".complement"
// And one option to catch errors.

document
  .querySelector(".request-complement")
  .addEventListener("click", function() {
    fetch("/complement")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector(".complement").innerText = data.complement;
      })
      .catch(function(err) {
        console.error(err);
      });
  });