class Bezel {
    static get inputProperties() {
        return ['--bezel-color', '--bezel-width', '--bezel-bg', '--bezel-radius']
    }
    static get inputArguments() { }
    static get contextOptions() { return {alpha: true} }

    parseValue(val) {
        return val.toString().replace(' ', '').replace(/px|%/g, '').split(' ')
    }

    paint(ctx, size, props) {
        ctx.lineWidth = props.get('--bezel-width')
        ctx.strokeStyle = props.get('--bezel-color')
        const inset = ctx.lineWidth / 2
        const [
            topLeftRadius,
            topRightRadius,
            bottomRightRadius,
            bottomLeftRadius
        ] = this.parseValue(props.get('--bezel-radius'))
    
        const width = size.width
        const height = size.height

        ctx.lineTo(topLeftRadius, inset)
        ctx.lineTo(width - topRightRadius, inset)
        ctx.lineTo(width - inset, topRightRadius)
        ctx.lineTo(width - inset, height - bottomRightRadius)
        ctx.lineTo(width - bottomRightRadius, height - inset)
        ctx.lineTo(bottomLeftRadius, height - inset)
        ctx.lineTo(inset, height - bottomLeftRadius)
        ctx.lineTo(inset, topLeftRadius)
        ctx.closePath()
        ctx.fillStyle = props.get('--bezel-bg')
        ctx.fill()
        ctx.stroke()
    }
}

registerPaint('bezel', Bezel);