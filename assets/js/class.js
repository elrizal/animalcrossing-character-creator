document.getElementById("submit").addEventListener("click", function() {

  const enterName = document.querySelector("#name").value;
  const enterType = document.getElementById("type").value;
  const enterPersonality = document.getElementById("personality").value;
  const enterStyle = document.getElementById("style").value;
  const enterCatchphrase = document.getElementById("enter-catch").value;

  const resultDiv = document.getElementById("result");
  const enterNew = document.querySelector(".enter-new-guy");

  event.preventDefault();

// ============================================= 
// Character creation with constructors:
//Instantiation:
  class templateCharacter {
    constructor(name, species, personality, style, catchphrase) {
      this.name = name;
      this.species = species;
      this.personality = personality;
      this.style = style;
      this.catchphrase = catchphrase;
    }
    showStats(){
      console.log(`${this.name} - ${this.species} - ${this.style}`)
    }
  }
// then we make a new instant of the above object
  class newChar extends templateCharacter {
    constructor(name, species, personality, style, catchphrase) {
      super(name, species, personality, style, catchphrase); //"super" needs to be
      // called in order to access "this"
    }
  }
  const characterToAdd = new newChar(
    enterName,
    enterType,
    enterPersonality,
    enterStyle,
    enterCatchphrase
  );
  characterToAdd.showStats()
// ============================================= 
// Add info from the new "characterToAdd" object and remove the form:
  function addAndDestroy() {
    enterNew.classList.add("animate__animated", "animate__bounceOut");
    enterNew.addEventListener("animationend", () => {
      enterNew.remove();
      resultDiv.classList.add("animate__animated", "animate__bounceIn");
      resultDiv.innerHTML = `<div class="trendy-box">
      <div class="name"><h2>${characterToAdd.name}</h2>
      </div><br />
      <h3>"${characterToAdd.catchphrase}"
      </h3>
       
      <label>I am a:</label><h3>${characterToAdd.species}</h3>
      <label>I am usually:</label><h3>${characterToAdd.personality}</h3>
      <label>My fashion sense is generally:</label><h3>${characterToAdd.style}</h3>
      </div>
      `;
    });
  }

  addAndDestroy();
});
