const express = require('express')
const fetch = require('node-fetch');
const path = require('path')
const AnchorLink = require('anchor-link')
const AnchorLinkBrowserTransport = require('anchor-link-browser-transport')
const AnchorLinkConsoleTransport = require('anchor-link-console-transport')

const app = express()
const port = 3000

//style attributes
let flexLayout = 'display:flex;align-items:center;justify-content:center;'
let flexRow = 'flex-direction:row;'
let flexColumn = 'flex-direction:column;'


//DOM constructors
function HTMLbody(headBod,div){
    let headTop = '<head>'
    let headBottom = '</head>' 
    let head = headTop+headBod+headBottom
    let bodyTop = '<body style="'+flexLayout+'">'
    let bodyBottom = '</div>'
    //
    return head+bodyTop+div+bodyBottom
}

function HTMLdiv(body){
    let divTop = '<div>'
    let divBottom = '</div>'
    //
    return divTop+body+divBottom;
}

function HTMLscript(body){
    let scriptTop = '<script>'
    let scriptBottom = '</script>'
    //
    return scriptTop+body+scriptBottom;
}

//express server
app.get('/anchor', (req, res) => {
    let button = HTMLdiv(loginButton)
    let script = HTMLscript('test')
    let homepage = HTMLbody(AnchorCDN,button+script)
    //
    res.send(homepage)
    createSession()
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'Anch.html'))
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
