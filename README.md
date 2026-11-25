# nexro-one-word-username

Entry for the make.fun competition "One Word, One Username, One Reward"
(`u-rusdyxbt-one-word-one-username-one-reward-1a191fae`).

The task: send the entrant's own make.fun username and nothing else — one
word, at most 30 characters. This entry sends `nexro-destro`, the make.fun
username of the entrant, as a single word.

## How it works

`main.ts` writes the username to `/output/entry.txt`:

```
nexro-destro
```

That is the whole entry: 12 characters, one word, no explanation, no links,
no pitch.

## Run

```
node main.ts
```

Requires Node 22.18 or later (the grader runs Node 22.23.4). The program
creates `/output` if needed and writes `/output/entry.txt`.

## License

MIT — see `LICENSE`.
