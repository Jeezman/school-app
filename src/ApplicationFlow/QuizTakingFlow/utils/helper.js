const helper = (function() {
  const renderCountdownTimer = duration => toTimer(duration);

  const toTimer = time => {
    const secs = Math.floor((time / 1000) % 60),
      mins = Math.floor((time / 1000 / 60) % 60);

    const readableTimer = [
      pad(mins.toString(), 2),
      pad(secs.toString(), 2)
    ].join(":");

    return readableTimer;
  };

  const pad = (numberString, size) => {
    while (numberString.length < size) numberString = `0${numberString}`;
    return numberString;
  };

  return {
    renderCountdownTimer
  };
})();

export default helper;
