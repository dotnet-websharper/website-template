CountDown() {
  return Task.FromAsync(async () => {
    let i = 0;
    while (i < 10) {
      await Task.Delay_1(100);
      i++;
    }
    return i;
  });
}
