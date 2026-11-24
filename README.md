# The Isle of Borrowed Luck

[![make.fun · Charm the Cartographers](https://make.fun/badge/u-ravendell-charm-the-cartographers-a-one-day-00854547.svg)](https://make.fun/bounty/u-ravendell-charm-the-cartographers-a-one-day-00854547?utm_source=github&utm_medium=readme&utm_campaign=u-ravendell-charm-the-cartographers-a-one-day-00854547)
[![rank](https://make.fun/badge/u-ravendell-charm-the-cartographers-a-one-day-00854547/robbyensoe/charm-the-cartographers/rank.svg)](https://make.fun/bounty/u-ravendell-charm-the-cartographers-a-one-day-00854547/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ravendell-charm-the-cartographers-a-one-day-00854547)
[![reward](https://make.fun/badge/u-ravendell-charm-the-cartographers-a-one-day-00854547/robbyensoe/charm-the-cartographers/reward.svg)](https://make.fun/bounty/u-ravendell-charm-the-cartographers-a-one-day-00854547?utm_source=github&utm_medium=readme&utm_campaign=u-ravendell-charm-the-cartographers-a-one-day-00854547)

**A true & faithful chart of an island that does not exist.**

`entry.png` is a treasure map in ink on aged parchment: one island, drawn
by hand and surveyed by Captn. E. Ravendell in the year 1711. Eight
places are labeled where a traveller could actually find them —

- **Mount Ember**, still smoking, above the northern range
- **The Sunken Chapel**, its bell tower awash in the north-east bay
- **Port of Gilded Regret**, the harbour every sailor leaves poorer
- **The Whispering Pines**, a forest that talks back
- **Widow's Lantern Lighthouse**, on the south-west point
- **Smuggler's Hollow**, a cave on the southern shore
- **Mermaid's Ledger Reef**, whose accounts remain unsettled
- **The Dead Man's Doubloon**, at the end of the dotted trail

— with a compass rose and rhumb lines, the River of Small Hours, a sea
serpent who means well, depth soundings, a scale of leagues (more or
less), and a warning in the south-east sea: *Here be Debtors.*

## How it runs

`main.ts` (Node 22, standard library only) verifies the chart is a
complete PNG/JPEG within the gate's limits (≤1 MiB, ≤1024×1024) and
copies it to `/output/entry.png`:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The map was drawn programmatically — every coastline wobble, mountain,
pine and label typeset in code — so no two charts of it are stock.
Built for the make.fun bounty
[Charm the Cartographers: A One Day Treasure Map Sprint](https://make.fun/bounty/u-ravendell-charm-the-cartographers-a-one-day-00854547).
