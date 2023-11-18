class Bezel {
  static get inputProperties() {
    return ["--bezel-color", "--bezel-width", "--bezel-bg", "--bezel-radius"];
  }
  static get inputArguments() {}
  static get contextOptions() {
    return { alpha: true };
  }

  parseValue(val) {
    const values = val.toString().split(" ");
    return values.map((el) => el.replace(/px|%/g, ""));
  }

  paint(ctx, size, props) {
    ctx.lineWidth = props.get("--bezel-width");
    ctx.strokeStyle = props.get("--bezel-color");
    const inset = ctx.lineWidth / 2;
    const [topLeft, topRight, bottomRight, bottomLeft] = this.parseValue(
      props.get("--bezel-radius")
    );
    const width = size.width;
    const height = size.height;

    ctx.lineTo(topLeft, inset);
    ctx.lineTo(width - topRight, inset);
    ctx.lineTo(width - inset, topRight);
    ctx.lineTo(width - inset, height - bottomRight);
    ctx.lineTo(width - bottomRight, height - inset);
    ctx.lineTo(bottomLeft, height - inset);
    ctx.lineTo(inset, height - bottomLeft);
    ctx.lineTo(inset, topLeft);
    ctx.closePath();
    ctx.fillStyle = props.get("--bezel-bg");
    ctx.fill();
    ctx.stroke();
  }
}

registerPaint("bezel", Bezel);
