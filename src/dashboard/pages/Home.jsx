import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilArrowTop, cilOptions } from '@coreui/icons'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import { CurrentStatus } from "../components/CurrentStatus";
import { CWidgetStatsB } from '@coreui/react'

import {
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
  CWidgetStatsA,
} from '@coreui/react'

const Home = ({records}) => {
    return (
        <div className="container-fluid p-3 ">
            {/* <ChartContainer statusData={sampleData} renewedData={sampleData} expiringData={sampleData} expiredData={sampleData}/> */}
            <CRow className="p-3">
                <CCol sm={3}>
                    <CWidgetStatsA
                    className="mb-1"
                    color="primary"
                    value={
                        <>
                        300{' '}
                        <span className="fs-6 fw-normal">
                            (40.9% <CIcon icon={cilArrowTop} height={15} />)
                        </span>
                        </>
                    }
                    title="Total descendants"
                    action={
                        <CDropdown alignment="end">
                        <CDropdownToggle color="transparent" caret={true} className="p-0 text-primary">
                            <CIcon icon={cilOptions} className="text-white" />
                        </CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem>2025</CDropdownItem>
                            <CDropdownItem>2024</CDropdownItem>
                            <CDropdownItem>2023</CDropdownItem>
                            <CDropdownItem>2022</CDropdownItem>
                        </CDropdownMenu>
                        </CDropdown>
                    }
                    chart={
                        <CChartLine
                        className="mt-3 mx-3"
                        style={{ height: '70px' }}
                        data={{
                            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                            datasets: [
                            {
                                label: 'descendants',
                                backgroundColor: 'transparent',
                                borderColor: 'rgba(255,255,255,.55)',
                                pointBackgroundColor: '#5856d6',
                                data: [65, 59, 84, 84, 51, 55, 40],
                            },
                            ],
                        }}
                        options={{
                            plugins: {
                            legend: {
                                display: false,
                            },
                            },
                            maintainAspectRatio: false,
                            scales: {
                            x: {
                                border: {
                                display: false,
                                },
                                grid: {
                                display: false,
                                },
                                ticks: {
                                display: false,
                                },
                            },
                            y: {
                                min: 30,
                                max: 89,
                                display: false,
                                grid: {
                                display: false,
                                },
                                ticks: {
                                display: false,
                                },
                            },
                            },
                            elements: {
                            line: {
                                borderWidth: 1,
                                tension: 0.4,
                            },
                            point: {
                                radius: 4,
                                hitRadius: 10,
                                hoverRadius: 4,
                            },
                            },
                        }}
                        />
                    }
                    />
                </CCol>
                    <CCol sm={3}>
            <CWidgetStatsA
            className="mb-1"
            color="success"
            value={
                <>
                300{' '}
                <span className="fs-6 fw-normal">
                    (40.9% <CIcon icon={cilArrowTop} height={15} />)
                </span>
                </>
            }
            title="Total descendants"
            action={
                <CDropdown alignment="end">
                <CDropdownToggle color="transparent" caret={true} className="p-0 text-success">
                    <CIcon icon={cilOptions} className="text-white" />
                </CDropdownToggle>
                <CDropdownMenu>
                    <CDropdownItem>2025</CDropdownItem>
                    <CDropdownItem>2024</CDropdownItem>
                    <CDropdownItem>2023</CDropdownItem>
                    <CDropdownItem>2022</CDropdownItem>
                </CDropdownMenu>
                </CDropdown>
            }
            chart={
                <CChartLine
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                    {
                        label: 'descendants',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,.55)',
                        pointBackgroundColor: '#5856d6',
                        data: [65, 59, 84, 84, 51, 55, 40],
                    },
                    ],
                }}
                options={{
                    plugins: {
                    legend: {
                        display: false,
                    },
                    },
                    maintainAspectRatio: false,
                    scales: {
                    x: {
                        border: {
                        display: false,
                        },
                        grid: {
                        display: false,
                        },
                        ticks: {
                        display: false,
                        },
                    },
                    y: {
                        min: 30,
                        max: 89,
                        display: false,
                        grid: {
                        display: false,
                        },
                        ticks: {
                        display: false,
                        },
                    },
                    },
                    elements: {
                    line: {
                        borderWidth: 1,
                        tension: 0.4,
                    },
                    point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                    },
                    },
                }}
                />
            }
            />
        </CCol>
        <CCol sm={3} >
            <CWidgetStatsA
            className="mb-1"
            color="warning"
            value={
                <>
                300{' '}
                <span className="fs-6 fw-normal">
                    (40.9% <CIcon icon={cilArrowTop} height={15} />)
                </span>
                </>
            }
            title="Total descendants"
            action={
                <CDropdown alignment="end">
                <CDropdownToggle color="transparent" caret={true} className="p-0 text-warning">
                    <CIcon icon={cilOptions} className="text-white" />
                </CDropdownToggle>
                <CDropdownMenu>
                    <CDropdownItem>2025</CDropdownItem>
                    <CDropdownItem>2024</CDropdownItem>
                    <CDropdownItem>2023</CDropdownItem>
                    <CDropdownItem>2022</CDropdownItem>
                </CDropdownMenu>
                </CDropdown>
            }
            chart={
                <CChartLine
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                    {
                        label: 'descendants',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,.55)',
                        pointBackgroundColor: '#5856d6',
                        data: [65, 59, 84, 84, 51, 55, 40],
                    },
                    ],
                }}
                options={{
                    plugins: {
                    legend: {
                        display: false,
                    },
                    },
                    maintainAspectRatio: false,
                    scales: {
                    x: {
                        border: {
                        display: false,
                        },
                        grid: {
                        display: false,
                        },
                        ticks: {
                        display: false,
                        },
                    },
                    y: {
                        min: 30,
                        max: 89,
                        display: false,
                        grid: {
                        display: false,
                        },
                        ticks: {
                        display: false,
                        },
                    },
                    },
                    elements: {
                    line: {
                        borderWidth: 1,
                        tension: 0.4,
                    },
                    point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                    },
                    },
                }}
                />
            }
            />
        </CCol>
                    <CCol sm={3} >
            <CWidgetStatsA
            className="mb-1"
            color="danger"
            value={
                <>
                300{' '}
                <span className="fs-6 fw-normal">
                    (40.9% <CIcon icon={cilArrowTop} height={15} />)
                </span>
                </>
            }
            title="Total descendants"
            action={
                <CDropdown alignment="end">
                <CDropdownToggle color="transparent" caret={true} className="p-0 text-danger">
                    <CIcon icon={cilOptions} className="text-white" />
                </CDropdownToggle>
                <CDropdownMenu>
                    <CDropdownItem>2025</CDropdownItem>
                    <CDropdownItem>2024</CDropdownItem>
                    <CDropdownItem>2023</CDropdownItem>
                    <CDropdownItem>2022</CDropdownItem>
                </CDropdownMenu>
                </CDropdown>
            }
            chart={
                <CChartLine
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                    {
                        label: 'descendants',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,.55)',
                        pointBackgroundColor: '#5856d6',
                        data: [65, 59, 84, 84, 51, 55, 40],
                    },
                    ],
                }}
                options={{
                    plugins: {
                    legend: {
                        display: false,
                    },
                    },
                    maintainAspectRatio: false,
                    scales: {
                    x: {
                        border: {
                        display: false,
                        },
                        grid: {
                        display: false,
                        },
                        ticks: {
                        display: false,
                        },
                    },
                    y: {
                        min: 30,
                        max: 89,
                        display: false,
                        grid: {
                        display: false,
                        },
                        ticks: {
                        display: false,
                        },
                    },
                    },
                    elements: {
                    line: {
                        borderWidth: 1,
                        tension: 0.4,
                    },
                    point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                    },
                    },
                }}
                />
            }
            />
        </CCol>
            </CRow>
            <div className="container-fluid bg-light p-3 border border-dark-subtle">
                <CurrentStatus className="container-fluid"/>    
            </div>
            <div className="container-fluid bg-light p-3 border border-dark-subtle">
                <CRow>
                    <CCol xs={3} className="m-1">
                        <CWidgetStatsB
                            className="mb-3"
                            progress={{ color: 'success', value: 75 }}
                            // text="Widget helper text"
                            title="Renewable"
                            value="89.9%"
                        />
                    </CCol>
                    <CCol xs={3} className="m-1">
                        <CWidgetStatsB
                            className="mb-3"
                            progress={{ color: 'warning', value: 75 }}
                            // text="Widget helper text"
                            title="Expiring"
                            value="89.9%"
                        />
                    </CCol>
                    <CCol xs={3} className="m-1">
                        <CWidgetStatsB
                            className="mb-3"
                            progress={{ color: 'danger', value: 75 }}
                            // text="Widget helper text"
                            title="Expired"
                            value="89.9%"
                        />
                    </CCol>
                </CRow>
            </div>
        </div>
    );
}

export default Home