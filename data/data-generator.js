const fs = require('fs')
const path = require('path')

const CLIArgs = process.argv.slice(2)

const FileName = path.join(__dirname, 'data.json')

const rnd = max => Math.floor(Math.random() * max)

const Departments = ['Лукойл', 'Роснефть', 'Газпром нефть']

const Fields = [
  'Павловское', 'Чикулаевское', 'Чернушинское', 'Трушниковское', 'Этышское', 'Дороховское',
  'Красноярско-Куединское', 'Гондыревское', 'Степеновское', 'Аксаитовское', 'Шагирто-Гожанское', 'Аптугайское',
  'Шагирское', 'Кудрявцевское', 'Быркинское', 'Альняшское'
]

const BrigadesCount = CLIArgs[0] ? Number(CLIArgs[0]) : 200

const generateData = (departments, fields, brigadesCount) => {
  const Data = []

  for (let i = 0; i < brigadesCount; i++) {
    const DepartmentID = rnd(Departments.length)

    Data.push({
      id: i + 1,
      brigade_name: `Бригада №${i + 1}`,
      connection_state: rnd(2),
      department: {
        id: DepartmentID,
        name: departments[DepartmentID]
      },
      position: {
        field: fields[rnd(Fields.length)],
        cluster: rnd(100) + 1,
        well: rnd(1000) + 1
      }
    })
  }

  return Data
}

const Data = generateData(Departments, Fields, BrigadesCount)

fs.writeFileSync(FileName, JSON.stringify(Data, null, '\t'))
