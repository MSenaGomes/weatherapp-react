import React from "react"
import axios from "axios"

export default function Weather() {
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-8">
            <form id="search-input">
              <div class="form-group">
                <input
                  type="search"
                  class="form-control"
                  autofocus="on"
                  placeholder="Search for a city"
                  id="input"
                  autocomplete="off"
                />
              </div>
            </form>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              class="btn btn-primary shadow-sm"
              id="search-button"
            />
          </div>
          <div class="col-1">
            <button
              class="btn btn-success shadow-sm"
              id="current-location-button"
            />
            <i class="fas fa-map-marker-alt" />
          </div>
        </div>
      </form>

      <h2 className="city" id="city">
        City, CC
      </h2>
      <div class="row">
        <div class="col-4">
          <h3>
            <small>Local Time</small>
          </h3>
          <h3 id="date-time">Week day, time</h3>
          <h3 id="description">Description</h3>
          <div id="temperature-degrees">
            <h1 class="temperature" id="temperature">
              ##
            </h1>

            <span class="units">
              <a href="#" class="active" id="celsius">
                °C
              </a>{" "}
              |
              <a href="#" id="fahrenheit">
                °F
              </a>
            </span>
          </div>
        </div>
        <div class="col-4">
          <i class="fas sun" id="icon"></i>
        </div>
        <div class="col-4">
          <h3 id="humidity"> Humidity: ##% </h3>
          <h3 id="wind"> Wind Speed: #m/s </h3>
          <h3>
            {" "}
            <strong>MAX|min</strong>{" "}
          </h3>

          <h3 id="maxmin">##ºC/##ºC</h3>
        </div>
      </div>
    </div>
  );
}
