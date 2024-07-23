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

    const person = people.find((person) => {
        return person.id === Number(req.params.id)
    })

    if (!person) {
        return res.status(404).json({ success: false, message: `Person with id:${req.params.id} Not found ` })
    }

    res.send({ success: true, person })
}

const updatePerson = (req, res) => {
    const person = people.find((person) => {
        return person.id === Number(req.params.id)
    })

    if (!person) {
        return res.status(404).json({ success: false, message: `Person with id:${req.params.id} Not found ` })
    }

    const newPerson = people.map((person) => {
        if (person.id === Number(req.params.id)) {
            person.name = req.body.name
        }
        return person
    })

    res.status(200).json({ success: true, data: person })
}

const deletePerson = (req, res) => {
    const person = people.find((person) => {
        return person.id === Number(req.params.id)
    })

    if (!person) {
        return res.status(404).json({ success: false, message: `Person with id:${req.params.id} Not found ` })
    }

    people.filter((person) => person.id !== Number(req.params.id))
    res.status(200).json({ success: true, message: `Person ${req.body.name} deleted successfully` })
}

module.exports = { addPerson, getPeople, getPerson, updatePerson, deletePerson }