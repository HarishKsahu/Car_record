import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

function App() {
  return (
    <div className='wrapper bg-dark d-flex align-item-center justify-content-center w-100'>
      <div className='login'>
        <h3 className='mb-3'>Car Records</h3>
        <form className='needs-validation'>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='plateno' className='form-label'>Plate No.</lebal>
            <input type="number" className='form-control' required></input>
          </div>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='regno' className='form-label'>Reg NO.</lebal>
            <input type="number" className='form-control' required></input>
          </div>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='type' className='form-label'>Type</lebal>
            <input type="text" className='form-control' required></input>
          </div>
          <table>
            <th>
              <div className='form-group was-validated mb-2'>
                <lebal htmlFor='datemanu' className='form-label'>Date Manufactured</lebal>
                <input type="date" className='form-control' required></input>
              </div>
            </th>
            <th>
              <div className='form-group was-validated mb-2'>
                <lebal htmlFor='color' className='form-label'>Color</lebal>
                <select>
                  <option>
                    Red
                  </option>
                  <option>
                    Green
                  </option>
                </select>
              </div>
            </th>
          </table>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='model' className='form-label'>Model</lebal>
            <input type="text" className='form-control' required></input>
          </div>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='make' className='form-label'>Make</lebal>
            <select>
              <option>
                Engineer
              </option>
              <option>
                Administrator
              </option>
            </select>
          </div>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='speed' className='form-label'>Speed</lebal>
            <input type="text" className='form-control' required></input>
          </div>
          <table>
            <th>
            <div className='form-group was-validated mb-2'>
            <lebal htmlFor='condition' className='form-label'>Condition</lebal>
            <select>
              <option>
                Good
              </option>
              <option>
                Poor
              </option>
            </select>
          </div>
            </th>
            <th>
            <div className='form-group was-validated mb-2'>
            <lebal htmlFor='availstatus' className='form-label'>Avail. Status</lebal>
            <select>
              <option>
                Good
              </option>
              <option>
                Poor
              </option>
            </select>
          </div>
            </th>
          </table>
          
          
          <table className='inpu'>
            <th><button type='submit' className='btn btn-success w-100 mt-2'>Submit</button></th>
            <th><button type='reset' className='btn btn-success w-100 mt-2'>Reset</button></th>
          </table>
        </form>
      </div>
    </div>
  );
}

export default App;
