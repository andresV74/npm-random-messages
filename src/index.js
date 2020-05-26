const messages = [
	"Oscar",
	"Ana",
	"Nicolay",
	"Yésica",
	"Diego",
	"Laura",
	"Paula",
	"Juan Martín",
	"Andrés"
]

const randomMsg = () => {
	const message = messages[Math.floor(Math.random() * 
		messages.length)]
	console.log(message)
}

module.exports = { randomMsg }