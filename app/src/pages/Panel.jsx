import React from 'react'
import MenuApp from "../components/MenuApp"
import { Line } from "react-chartjs-2"
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, plugins, Legend } from "chart.js"
import { Link } from 'react-router-dom'


Chart.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)
function Panel() {
    const data = {
        labels: ["Feb", "Mar", "April", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            data: [50, 44, 23, 34, 19, 34, 12, 56, 12, 23, 21],
            backgroundColor: "#fff",
            borderColor: "#31BEA3",
            pointBorderColor: "#fff",
            pointBorderWidth: 7,
            tension: .6
        }]
    }

    const options = {
        plugins: {
            legend: true
        }
    }
    return (
        <div>
            <MenuApp />
            <div className="panel_container">
                <div className="panel_first_section">
                    <div className="top_section_panel">
                        <Line data={data} options={options}></Line>
                    </div>
                    <div className="bottom_section_panel">
                        <div className="last_plantation">
                            <p className='subtitle' style={{ marginBottom: '10px' }}>Plantation</p>
                            <span>Yautia pipiota plantation my brother 🗿.</span>
                            <div className="progress">
                                <div className="var">
                                    <div className="var_color"></div>
                                </div>
                                <div className="progress_number">
                                    <p>56%</p>
                                </div>
                            </div>
                        </div>
                        <div className="last_alert">
                            <p className='subtitle' style={{ marginBottom: '10px' }}>Alert</p>
                            <span>Problems with water, check this porblem now or later!</span>
                            <button>View now</button>
                        </div>
                    </div>
                </div>
                <div className="panel_second_section">
                    <div className="top_section_second_panel">
                        <div className="title">
                            <p>Your workes</p>
                        </div>
                        <div className="workers_profile">
                            <div className="profiles">
                                <div className="img">
                                    <img src="https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_1280.jpg" alt="algo" />
                                </div>
                                <div className="img">
                                    <img src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg" alt="algo" />
                                </div>
                                <div className="img">
                                    <img src="https://cdn.pixabay.com/photo/2018/10/29/21/46/human-3782189_1280.jpg" alt="algo" />
                                </div>
                                <div className="img">
                                    <img src="https://cdn.pixabay.com/photo/2017/12/22/14/42/girl-3033718_960_720.jpg" alt="algo" />
                                </div>
                            </div>
                            <Link to="/">View more</Link>
                        </div>
                        <div className="cantity_second_container">
                            <hr />
                            <div className="cantity_section">
                                <div className='cantity_box one'>
                                    <span>Workers</span>
                                    <p>05</p>
                                </div>
                                <div className='cantity_box two'>
                                    <span>Plantations</span>
                                    <p>12</p>
                                </div>
                            </div>
                            <div className="add_worker_second_container">
                                <div className="filter">
                                    <p>Add worker</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom_section_second_panel"></div>
                </div>
            </div>
        </div>
    )
}

export default Panel
