class Hotel {
	constructor(id, numHabitaciones) {
		this.id = id;
		this.numHabitaciones = numHabitaciones;
	}
	hayHabitacion() {
		return this.numHabitaciones > 0;
	}

	reservarHabitacion() {
		if (this.numHabitaciones == 0) {
			throw "No existen habitaciones para el hotel " + this.id;
		}
		this.numHabitaciones -= 1;
	}
}

class BaseDatosHoteles {
	constructor(numHoteles, numHabitaciones) {
		this.hoteles = Array.from({length: numHoteles}, (x,i) => new Hotel(i, numHabitaciones));
	}
}


function reserva(hoteles) {
	return new Promise(function (resolve, reject) {
		try {
			resolve(hoteles);
		}
		catch (e) {
			reject(e);
		}
	})
}

function buscarHotel(database) {
	var hotelesDisponibles = database.hoteles.filter(h => h.hayHabitacion)

	console.log("Buscando hotel...")
	if (hotelesDisponibles.length == 0) {
		throw "No existen hoteles disponibles";
	}
	else {
		return hotelesDisponibles[0];
	}
}

function buscarHabitaciones(hotel) {
	console.log("Buscando habitaciones...")
	if (hotel.hayHabitacion()) {
		return hotel;
	}
	else {
		throw "No existe habitación disponible"
	}
}

function reservarHabitacion(hotel) {
	hotel.reservarHabitacion();
	console.log("Habitacion reservada");
}

function capturarError(e) {
	console.log("Error capturado: " + e)
}

var hoteles = new BaseDatosHoteles(2, 2);

for (var i = 0; i < 6; i++) {
	reserva(hoteles)
	.then(buscarHotel)
	.then(buscarHabitaciones)
	.then(reservarHabitacion)
	.catch(capturarError)
}
