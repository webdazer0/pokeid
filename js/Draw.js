class Draw {
    constructor(canvasElem) {
        this.canvas = canvasElem
        this.ctx = this.canvas.getContext('2d')
        this.image = new Image()
        this.image.setAttribute('crossOrigin', 'anonymous')   
    }
    render(url) {
        const { width, height } = this.canvas
        this.image.setAttribute('src', url)
        return new Promise((resolve, reject) => {
            this.image.addEventListener('load', () => {
            this.ctx.clearRect(0, 0, width, height)
            this.ctx.drawImage(this.image, 0, 0, width, height)
            resolve('Carica Colori completa!')
        })
        // this.colors = this.colorPalette()
        // updateProperties(this.colors)
    })
    }

    colorPalette(quality = 90) {
        const { width, height } = this.canvas
        const imgData = this.ctx.getImageData(0, 0, width, height).data
        const colors = []
        for (let i = 0; i < width * height; i = i + quality) {
            const offset = i * 4
            const alpha = imgData[offset + 3]
            if (alpha > 0 ) {
                const red = imgData[offset]
                const green = imgData[offset + 1]
                const blue = imgData[offset + 2]
                colors.push({red, green, blue})
            }
        }
        return colors
    }
}

export default Draw