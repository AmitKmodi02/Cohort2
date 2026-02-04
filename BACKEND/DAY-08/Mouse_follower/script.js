const mouseFollower = document.querySelector(".mouse-follower")


addEventListener("mousemove",(e)=>{
    const {clientX , clientY} = e

    // console.log(clientX ,clientY)

    // mouseFollower.style.top = clientY + "px"
    // mouseFollower.style.left = clientX + "px"

    mouseFollower.style.trasnform = `translate(${clientX}px,${clientY}px)`

})

