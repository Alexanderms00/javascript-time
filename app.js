let mode = 'time'
const output = document.getElementById('output')
const timeBtn = document.getElementById('time')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')

function bindMode(name) {
	return function () {
		mode = name
		update()
	}
}

dateBtn.onclick = bindMode('date')
fullBtn.onclick = bindMode('full')
timeBtn.onclick = bindMode('time')

update()

setInterval(update, 1000)

function update() {
	output.textContent = format(mode)
}

function format(formatMode) {
	const now = new Date()
	switch (formatMode) {
		case 'time':
			return now.toLocaleTimeString()

		case 'date':
			return now.toLocaleDateString()

		case 'full':
			return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
	}
}
