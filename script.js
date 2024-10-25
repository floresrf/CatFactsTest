let btn_generate = document.querySelector('.btn_generate')

btn_generate.addEventListener("click", function(){
    function fetchFacts(){
        fetch(`https://cat-fact.herokuapp.com/facts/random?`)
        .then(response => response.text())
        .then(data => {
            let fact = JSON.parse(data).text
            console.log(fact)
            let para = document.createElement("p")
            para.classList.add("list-group-item")
            para.classList.add("text-dark")
            para.classList.add("p-3")
            let node = document.createTextNode(fact)
            para.appendChild(node)

            let facts = document.querySelector(".facts")
            facts.appendChild(para)
            
        })
        .catch(err => console.log(err))
    }

    fetchFacts()
})