const { people } = require("../data")

const getPeople = (req, res) => {
    res.status(200).json(people)
}

const addPerson = (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
}

const getPerson = (req, res) => {

    const checkPerson = checkPersonId(req, res)

    if (!checkPerson.success) {
        return res.status(404).send(checkPerson)
    }

    res.send(checkPerson.person )
}

const updatePerson = (req, res) => {

    const checkPerson = checkPersonId(req, res)

    if (!checkPerson.success) {
        return res.status(404).send(checkPerson)
    }

    const newPerson = people.map((person) => {
        if (person.id === Number(req.params.id)) {
            person.name = req.body.name
        }
        return person
    })

    res.status(200).json({ success: true, data: checkPerson.person, people })
}

const deletePerson = (req, res) => {
   
    const checkPerson = checkPersonId(req, res)

    if (!checkPerson.success) {
        return res.status(404).send(checkPerson)
    }

    newPeople = people.filter((person) => person.id !== Number(req.params.id))
    res.status(200).json({ success: true, message: `Person ${req.body.name} deleted successfully`, newPeople })
}

const checkPersonId = (req, res) => {
    const person = people.find((person) => {
        return person.id === Number(req.params.id)
    })

    if (!person) {
        return { success: false, message: `Person with id:${req.params.id} Not found ` }
    }
  
    return { success: true, person: person }
}

module.exports = { addPerson, getPeople, getPerson, updatePerson, deletePerson }