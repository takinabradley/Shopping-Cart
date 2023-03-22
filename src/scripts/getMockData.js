export default function getMockData(size) {
  const data = []
  for (let i = 0; i < size; i++) {
    data.push({
      id: i,
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum tenetur autem quibusdam, illum iusto odit!",

      price: "$100" + i
    })
  }

  return new Promise((resolve) => resolve(data))
}
