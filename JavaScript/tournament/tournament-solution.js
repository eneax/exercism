const HEADER = "Team                           | MP |  W |  D |  L |  P";

export const tournamentTally = (input) => {
  if (!input) return HEADER;

  let matches = input.split("\n");
  let scores = {};

  for (let match of matches) {
    match = match.split(";");
    let team1 = match[0];
    let team2 = match[1];
    let result = match[2];

    scores[team1] ??= { mp: 0, w: 0, d: 0, l: 0, p: 0 };
    scores[team2] ??= { mp: 0, w: 0, d: 0, l: 0, p: 0 };
    scores[team1].mp++;
    scores[team2].mp++;

    switch (result) {
      case "win":
        scores[team1].w++;
        scores[team2].l++;
        scores[team1].p += 3;
        break;
      case "loss":
        scores[team2].w++;
        scores[team1].l++;
        scores[team2].p += 3;
        break;
      case "draw":
        scores[team1].d++;
        scores[team2].d++;
        scores[team1].p++;
        scores[team2].p++;
        break;
      default:
        throw "invalid match result";
    }
  }

  let teams = Object.keys(scores);
  teams.sort(function (a, b) {
    return scores[b].p - scores[a].p || a.localeCompare(b);
  });

  let results = [];
  teams.forEach((team) => {
    const name = team.padEnd(31);
    const mp = scores[team].mp.toString().padStart(3);
    const w = scores[team].w.toString().padStart(3);
    const d = scores[team].d.toString().padStart(3);
    const l = scores[team].l.toString().padStart(3);
    const p = scores[team].p.toString().padStart(3);
    results.push(`${name}|${mp} |${w} |${d} |${l} |${p}`);
  });

  return HEADER + "\n" + results.join("\n");
};
