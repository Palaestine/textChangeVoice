

const convBtn = document.querySelector("button");
let textArea = document.querySelector("textarea");


let speech = new SpeechSynthesisUtterance();


convBtn.addEventListener("click" , () =>{

    speech.text = textArea.value;
    window.speechSynthesis.speak(speech);
});

/* الاصوااااااات */

let voices = [];
let voiceSelect = document.querySelector("select");


window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voices = [0];

    voices.forEach((voice , i) => (voiceSelect.options[i] = new Option(voice.name , i)))
}


voiceSelect.addEventListener("change" , ()=>{
    speech.voice = voices[voiceSelect.value]
});


