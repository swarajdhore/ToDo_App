let person = [
    {
        userid:"swaraj",
        password:"12345",
        taskid: 1,
    },
    {
        userid:"anish",
        password:"98765",
        taskid: 2,
    }
]

let task = [
    {
        taskid:1,
        taskname:"Meeting with HR",
        description:"Regarding the leave extension",
        status:"pending",
        timestamp:"2022-04-13T13:45:00.000Z",
    },
    {
        taskid:2,
        taskname:"Meeting with CEO",
        description:"Regarding promotion",
        status:"completed",
        timestamp:"2022-04-01T13:45:00.000Z",
    },
]

module.exports = {person,task};