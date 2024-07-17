const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.remove('hidden')
            console.log(entry)
        } else{
            entry.target.classList.add('hidden')
            console.log(entry)
        }
    })
})

const scrollElements = document.querySelectorAll('.scrollAnimated');
scrollElements.forEach((el)=> observer.observe(el))

function test(){
    console.log("test")
}