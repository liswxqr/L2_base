function bingo(ticket, win) {
  const miniWins = ticket.filter(
    ([str, num]) => str.split('').some((char) => char.charCodeAt(0) === num)
  ).length;

  return miniWins >= win ? 'Winner!' : 'Loser!';
}