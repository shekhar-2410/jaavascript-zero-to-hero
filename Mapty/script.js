'use strict';

// prettier-ignore

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  constructor(coords, distance, duration) {
    this.coord = coords;
    this.distance = distance; //in km
    this.duration = duration; //in min
  }
  _setDescrition() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.type = 'running';
    this.calcPace();
    this._setDescrition();
  }
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.type = 'cycling';
    this.calcSpeed();
    this._setDescrition();
  }
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}
const run1 = new Running([39, -12], 5.2, 24, 178);
const run2 = new Cycling([39, -12], 27, 95, 523);

class App {
  #map;
  #mapEvent;
  #workouts = [];
  constructor() {
    this._getPostion();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
  }
  _getPostion() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }
  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const corde = [latitude, longitude];

    this.#map = L.map('map').setView(corde, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    L.marker(corde);
    // .addTo(this.#map)
    // .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    // .openPopup();
    this.#map.on('click', this._showForm.bind(this));
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }
  _hideForm() {
    // empty inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        ' ';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }
  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();

    // get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    // If workout is running,create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // if data is valid
      if (
        !Number.isFinite(distance) ||
        !Number.isFinite(duration) ||
        !Number.isFinite(cadence)
      )
        return alert('Input have to be positive numbers!');
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If workout is cycling,create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      // if data is valid
      if (
        !Number.isFinite(distance) ||
        !Number.isFinite(duration) ||
        !Number.isFinite(elevation)
      )
        return alert('Input have to be positive numbers!');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }
    // Add new object to workout array
    this.#workouts.push(workout);

    //Render workout on map as marker
    this._renderWorkoutMarker(workout);

    //Render workout as a list
    this._renderWorkout(workout);

    // Hide form + clear input field
    this._hideForm();

    // Render workout on map as marker
  }
  _renderWorkoutMarker(workout) {
    L.marker(workout.coord)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 150,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }
  _renderWorkout(workout) {
    let html = `  
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
      }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>`;
    if (workout.type === 'running')
      html += ` 
  <div class="workout__details">
    <span class="workout__icon">⚡️</span>
    <span class="workout__value">${workout.pace.toFixed(2)}</span>
    <span class="workout__unit">min/km</span>
  </div>
  <div class="workout__details">
    <span class="workout__icon">🦶🏼</span>
    <span class="workout__value">${workout.cadence}</span>
    <span class="workout__unit">spm</span>
  </div>
</li>`;
    if (workout.type === 'cycling')
      html += `
      <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.speed.toFixed(2)}</span>
      <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">🦶🏼</span>
      <span class="workout__value">${workout.elevationGain}</span>
      <span class="workout__unit">spm</span>
    </div>
  </li>
      `;
    form.insertAdjacentHTML('afterend', html);
  }
}
const app = new App();