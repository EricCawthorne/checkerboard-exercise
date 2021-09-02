for(let i = 1; i <= 81; i++) {
    if (i % 2 === 0) {
        let div = document.createElement('div')
        document.body.style.width = '100vw'
    document.body.style.height = '100vh'
    document.body.appendChild(div)
    const divStyle = div.style
    divStyle.width = '11.1vw'
    divStyle.height = '11.1vw'
    divStyle.backgroundColor = 'red'
    divStyle.float = 'left'
    } else {
        let div = document.createElement('div')
        document.body.style.width = '100vw'
        document.body.style.height = '100vh'
        document.body.appendChild(div)
        const divStyle = div.style
        divStyle.width = '11.1vw'
        divStyle.height = '11.1vw'
        divStyle.backgroundColor = 'black'
        divStyle.float = 'left'
    }
}

