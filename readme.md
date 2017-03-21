# Trifecta

Trifecta is a super simple HTML, CSS, and JavaScript repo bootstrapper.

## Usage

```
$ mkdir my-new-repo && cd my-new-repo
$ ./path/to/trifecta/generate.sh [--server]
```


## Tree

The resulting repo is structured like this:

```
client
├── css
│   └── style.css
├── .gitignore
├── index.html
├── js
│   └── index.js
└── readme.md
```

If you use the `--server` flag, you get a small Node server structured like this:

```
server
├── index.js
└── package.json
```

The script runs `npm init` for you.

Use `npm start` from the `server` dir to start the server.
