import React from "react";
import Main from "../Main/Main";
import LineChart from "../Chart/Linechart";
import BarChart from "../Chart/Barchart";
import Piechart from "../Chart/Piechart";
import UsersList from "../User/UsersList";
import Chart from 'chart.js/auto';
export default function Dashboard() {
  return (
    <>
        <Main>
          <div className="container-fluid">
            {/*<!-- Page Heading -->*/}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>
            <div className="row">
              {/*<!-- Earnings (Monthly) Card Example -->*/}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Total Sub Admin
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          40,000
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*<!-- Earnings (Monthly) Card Example -->*/}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          Total Users
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          215,000
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*<!-- Earnings (Monthly) Card Example -->*/}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                          Total Transaction
                        </div>
                        <div className="row no-gutters align-items-center">
                          <div className="col-auto">
                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                              1000
                            </div>
                          </div>
                          <div className="col">
                            <div className="progress progress-sm mr-2">
                              <div
                                className="progress-bar bg-info a1"
                                role="progressbar"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-md-6 mb-4">
               <LineChart />
               </div>
               <div className="col-xl-6 col-md-6 mb-4">
               <BarChart />
               </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-md-6 mb-4">
               <Piechart />
               </div>
               <div className="col-xl-8 col-md-6 mb-7">
                <UsersList/>
               </div>
            </div>
          </div>
        </Main>
    </>
  );
}
