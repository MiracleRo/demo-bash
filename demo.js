let fs = require('fs')

let dir = process.argv[2]

fs.exists('./' + dir, (exists) => {
  if (exists) {
    console.log('dir exists')
    return
  } else {
    fs.mkdirSync('./' + dir)
    process.chdir("./" + dir)
    fs.mkdirSync('css')
    fs.mkdirSync('js')

    let htmlCon = '<!DOCTYPE><title>Hello</title><h1>Hi</h1>'
    fs.writeFileSync('index.html', htmlCon)
    let jsCon = 'var string = "Hello World"alert(string)'
    fs.writeFileSync('js/main.js', jsCon)
    let cssCon = 'h1{color: red;}'
    fs.writeFileSync('css/style.css', cssCon)
    console.log('success')
    process.exit(0)
  }
})