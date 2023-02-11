let contenedor =document.querySelector(".container");
let input = document.querySelector("input");
let addbott= document.querySelector(".btn-add");
let list_contenedor=document.querySelector(".li-container");
let ul = document.querySelector("ul")
let vacio=document.querySelector(".empty")

//capturamos variables de entrada
addbott.addEventListener('click',(e)=>{
    e.preventDefault();
    let texto = input.value;
      // console.log("valor ingresado",texto)
       if(texto !== ""){
        const li =document.createElement("li")
        const p =document.createElement("p")
        p.textContent= texto
        //p.appendChild(texto)
        li.appendChild(p)
        li.appendChild(deletElm())
        ul.appendChild(li)

        input.value=""
        vacio.style.display = "none";
       }
})

const deletElm=()=>{
    const deletItem= document.createElement("button")
    
    deletItem.className="btn-delete"

    deletItem.addEventListener('click',(e)=>{
        const item =e.target.parentElement;
       // console.log("soy item",e.target.parentElement)
        ul.removeChild(item);

        const items=document.querySelectorAll("li")

        items === 0 ?
            vacio.style.display="block"
        : null
    })
    return deletItem
}

