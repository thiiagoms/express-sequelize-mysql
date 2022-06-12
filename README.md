<p align="center">
  <a href="https://github.com/thiiagoms/poke-node">
    <img src="assets/pikachu.png" alt="Logo" width="80" height="80">
  </a>
     <h3 align="center">Pokemon API with NodeJs + Express + MySQL :shipit:</h3>
</p>
<br>

All Pokemons in simple Api

-   [Dependencies](#Dependencies)
-   [Install](#Install)
-   [Run](#Run)
-   [EndPoints](#Endpoints)

# Dependencies

-   NodeJs
-   MySQL

# Install

-   First: clone the respository

```
$ git clone https://github.com/thiiagoms/poke-node
```

-   Second: Install dependencies

```bash
$ npm install
```

# Run

-   First: Populate database

```bash
$ npm run seeder
```

-   Second: Stand up API

```bash
$ npm run dev
```

# Endpoints

Avaible endpoints:

`GET` - List all pokemons <br>
`GET '/id'` - Find Pokemon by id
