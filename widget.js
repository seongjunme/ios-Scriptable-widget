const country = 'S.%20Korea'
const url = `https://coronavirus-19-api.herokuapp.com/countries/${country}`
const req = new Request(url)
const res = await req.loadJSON()

let widget = new ListWidget()

titleText = widget.addText('COVID-19')

widget.addSpacer(5)


const tc = JSON.stringify(res.todayCases);

let text1 = widget.addText(`Today : ${tc.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}`)

widget.addSpacer(5)

const c = JSON.stringify(res.cases)
let text2 = widget.addText(`Total : ${c.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}`)

Script.setWidget(widget)
Script.complete()

