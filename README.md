# game

This project is the home of a *game* created by a bunch of cool cats from Oregon State University who met at the Open Source Lab and the Linux Users Group.
It is currently just an *idea*.
We like the idea of making a game, so we want to make a game, and there's no time like the present!

## What is the game?

game is a... well you know... written in [Phaser][phaser].
More details yet to come.

## How do I play the game?

To play the game you need to run a server -- but don't be scared!
It's actually really easy!

### MacOS / Linux

Clone this git repository and navigate to the directory.

```
$ git clone https://github.com/ElijahCaine/game.git
$ cd game/
```

Next, use Python to launch a webserver:

```
$ python3 -m http.server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

or if you only have python2 installed:

```
$ python2 -m SimpleHTTPServer
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

In your browser nagivate to http://localhost:8000/game and play!

### Windows

Please tell me how to do this.
I have no idea.

## What did you use to make the game?

game is written in JavaScript using the [Phaser][phaser] framework.
Specifically the Community Edition fwiw.

This was decided in [issue #3][issue-3] and first implemented in [pull request #4][pr-4]

## Direction?

Some of us want to make a game with a good story, some of us want to make a sidescroller, others want to just make a fun game that we will want to play.
🤞 Here's hoping we make something we're all happy with.

Most importantly, we want to have **fun** and make something **good**.

## Contributing?

☺️️ Yes!
We would love your help! Just ping one of the contributors and we'll be glad to add you to the project.

If that's too much work, fork the repo, make a contribution, and then make a pull request.

If that's not your cup of tea, feel free to make an issue!
Issues are contributions too.

## Contributors

- [elijahcaine](https://github.com/ElijahCaine)
- [athai](https://github.com/athai)

## License?

Currently this is licensed under MIT, but that will probably chage. I expect it'll be dual licensed Apache2.0 / Creative Commons, but whose to say?

[issue-3]: https://github.com/ElijahCaine/game/issues/3
[pr-4]: https://github.com/ElijahCaine/game/pull/4
[phaser]: https://github.com/photonstorm/phaser
