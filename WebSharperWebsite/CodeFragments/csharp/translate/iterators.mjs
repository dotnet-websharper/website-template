Ticks() {
  return Iterate(function* () {
    try {
      while (true)
        yield 1;
    } finally {
      this.Disposed = true;
    }
  }.bind(this));
}
