class Triangle {
  kind() {
    if (this.a === this.b && this.b === this.c) {
      return 'equilateral';
    }
  }
}

export default Triangle;
