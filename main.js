const p = document.querySelector("p");
const click = document.querySelector(".click");
const copy = document.querySelector(".copy");
click.addEventListener("click", e => {
    copy.classList.add("pointer");
    p.innerHTML = "";
    p.append(document.createTextNode(generate()));
})

copy.addEventListener("click", e => {
    if (copy.classList.contains("pointer"))
        navigator.clipboard.writeText(p.innerText);
});











function generate() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?`~";
    let pass = "";
    let l = 16;
    let cLetter = characters[Math.floor(Math.random() * 26)];
    let scLetter = characters[Math.floor(Math.random() * 26) + 26];
    let num = characters[Math.floor(Math.random() * 10) + 52];
    let special = characters[Math.floor(Math.random() * 30) + 62];
    let temp = [cLetter, scLetter, num, special]
    for (let i = 4; i > 0; i--) {
        let index = Math.floor(Math.random() * i);
        pass += "" + temp[index];
        temp.splice(index, 1);
    }
    for (let i = 0; i < l; i++) {
        pass += "" + characters[Math.floor(Math.random() * characters.length)];
    }
    return pass;
}