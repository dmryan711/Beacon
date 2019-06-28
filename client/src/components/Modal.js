import React from "react";
import Modal from "react-bootstrap/Modal";

function BeaconModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>What kind of beacon do you want to create?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={props.submitBeacon}>
          <div className="form-group">
            <label for="inputBeaconName">Beacon Name</label>
            <input
              type="text"
              class="form-control"
              id="inputBeaconName"
              name="beaconName"
              placeholder="Name your beacon"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="inputMonth">Month</label>
              <select
                id="inputMonth"
                name="beaconMonth"
                className="form-control"
              >
                <option>January</option>
                <option>Febuary</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="inputDay">Day</label>
              <select id="inputDay" name="beaconDay" className="form-control">
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>
            </div>
            <div clclassNameass="form-group col-md-4">
              <label for="inputYear">Year</label>
              <select id="inputYear" name="beaconYear" class="form-control">
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="inputHour">Hour</label>
              <select id="inputHour" name="beaconHour" className="form-control">
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>04</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="inputMinute">Minute</label>
              <select
                id="inputMinute"
                name="beaconMinute"
                className="form-control"
              >
                <option>00</option>
                <option>15</option>
                <option>30</option>
                <option>45</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="inputAMPM">AM / PM</label>
              <select id="inputAMPM" name="beaconAMPM" className="form-control">
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label for="type">Beacon Type</label>
            <select id="type" name="beaconType" className="form-control">
              <option>Professional</option>
              <option>Party</option>
              <option>Social</option>
            </select>
          </div>
          <div className="form-group">
            <button class="btn btn-primary" type="submit">
              Submit Beacon
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default BeaconModal;
