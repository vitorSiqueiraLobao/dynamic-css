let aply = () => {
    let position = document.getElementById("position").value
    let radius = document.getElementById("radius").value
    let color = document.getElementById("color").value
    let preview = document.getElementById("preview")

    preview.style.marginLeft = position
    preview.style.borderRadius = radius+"px"
    preview.style.backgroundColor = color
}