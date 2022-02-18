const teste = [
  {
    "score": 2.136964181,
    "localization": "8ea8100546c4797",
    "rating": 4.7,
  },
  {
    "score": -2.136964181,
    "localization": "8aa8100546e7fff",
    "rating": 4.7,
  },
  {
    "score": -2.136964181,
    "localization": "8aa810054627fff",
    "rating": 4.7,
  },
]

console.log(teste.map(element => {
  if (element.score > 0) {
    return element
  }
}))