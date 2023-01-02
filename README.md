# scratch2js

A [Scratch](https://scratch.mit.edu) to Javascript compiler. Note: this was very aspirational but unfortunately I literally do not care about this anymore. Feel free to work on it and open a pr or whatever, I'll happily give you commit rights just open an issue :)

## Development

```sh
git clone https://github.com/elimerl/scratch2js
cd scratch2js
yarn install
```

should install dependencies.
To build, run `yarn build`.
A tool that is very useful is [astexplorer.net](https://astexplorer.net/#/gist/fc8229f0b744f57d15b0a964923b94ad/306a9db565962c38b4e518613bebbf7e34f28d15); it lets you play with ESTree syntax trees, which is helpful in generating the code.

## Notes and Credits

Uses the `util` module from [LLK/scratch-vm](https://github.com/LLK/scratch-vm).
