'use strict'
var gProjs;

function creatProjects() {
    var projects = [{
            id: '01',
            name: "Guess Me",
            title: "Guess Me",
            desc: "The ultimate guessing game",
            url: "projs/sokoban",
            publishedAt: '02 / 08 / 21',
            labels: ["Game", "keyboard events", "Jquery", "Bootstrap"],
        },
        {
            id: '02',
            name: "Bookshop",
            title: "Bookshop",
            desc: "Management interface for a bookstore manager",
            url: "projs/sokoban",
            publishedAt: '02 / 08 / 21',
            labels: ["Shop", "keyboard events", "Jquery", "Bootstrap"],
        },
        {
            id: '03',
            name: "TODO List",
            title: "TODO List",
            desc: "Task management interface",
            url: "projs/sokoban",
            publishedAt: '02 / 08 / 21',
            labels: ["Tasks", "keyboard events", "Jquery", "Bootstrap"],
        },

    ]
    return gProjs = projects
}

function getProjectById(projId) {
    var project = gProjs.find(function(proj) {
        return proj.id === projId
    })
    return project
}