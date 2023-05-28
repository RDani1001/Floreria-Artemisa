document.addEventListener('DOMContentLoaded', function () {
  const btnWhatsapp = document.getElementById("btnWhatsapp")
  
  const abrirWhatsapp = function () {
    window.location.href = `
      https://api.whatsapp.com/send/?phone=+5216644920839&text=¡Hola,%20necesito%20ayuda!
    `
  }
  
  const partesDelCurso = [...document.getElementsByClassName('contenido_del_curso_contenido_contenedor_tit')]
  
  btnWhatsapp.addEventListener('click', abrirWhatsapp)
  partesDelCurso.forEach(parte => {
    parte.addEventListener('click', function () {
      let next = parte.nextElementSibling
      let height = 0
      let parent = parte.parentElement
      let child = parte.children[1]
      let vs = parte.children[1].children[0].children[0]
      let hs = parte.children[1].children[0].children[1]
      


      if(next.clientHeight === 0){
        height = next.scrollHeight
      }

      
      if(parent.classList.contains('--add_padding')){
        parent.classList.remove('--add_padding')

        next.animate([
          {height: `${height}px`}
        ], {
          easing: 'linear',
          iterations: 1,
          duration: 200
        })
        
        informationFrames(vs, 1)
        .then(res => {
          vs.setAttribute('style', 'opacity: 1')
        })
        informationFrames(hs, 3)
        .then(res => {
          next.setAttribute('style',`height: ${height}px`)
        })
        next.setAttribute('style',`height: ${height}px`)
      }else{
        next.animate([
          {height: `${height}px`}
        ], {
          easing: 'linear',
          iterations: 1,
          duration: 200
        })
        informationFrames(vs, 2)
        .then(res => {
          vs.setAttribute('style', 'opacity: 0')
        })
        informationFrames(hs, 4)
        .then(res => {
          next.setAttribute('style',`height: ${height}px`)
        })
        parent.classList.add('--add_padding')
      }
      
    })
  })

})

function informationFrames(vs, n) {
  switch (n) {
    case 1: 
      const animation = vs.animate([
        {transform: "rotate(360deg)"},
        {opacity: 1}
      ], {
        easing: "linear",
        iterations: 1 ,
        duration: 200
      })
      return animation.finished
    case 2:
      const animation1 = vs.animate([
        {opacity: 0},
        {transform: "rotate(360deg)"}
      ], {
        easing: "linear",
        iterations: 1,
        duration: 200
      })
      return animation1.finished
    case 3:
      const animation2 = vs.animate([
        {transform: "rotate(-360deg)"}
      ], {
        easing: "linear",
        iterations: 1 ,
        duration: 200
      })
      return animation2.finished
    case 4:
      const animation3 = vs.animate([
        {transform: "rotate(-360deg)"}
      ], {
        easing: "linear",
        iterations: 1,
        duration: 200
      })
      return animation3.finished
  }
  
}
