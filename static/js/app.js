document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-bs-toggle='tooltip']").forEach((node) => {
        new bootstrap.Tooltip(node);
    });

    const charts = window.MEDICARE_CHARTS;
    if (!charts || typeof Chart === "undefined") {
        return;
    }

    const makeChart = (id, config) => {
        const canvas = document.getElementById(id);
        if (canvas) {
            new Chart(canvas, config);
        }
    };

    if (charts.monthlyRevenue) {
        makeChart("monthlyRevenueChart", {
            type: "bar",
            data: {
                labels: charts.monthlyRevenue.labels,
                datasets: [{
                    label: "Revenue",
                    data: charts.monthlyRevenue.values,
                    backgroundColor: "#0f766e",
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } }
            }
        });
    }

    if (charts.patientStats) {
        makeChart("patientStatsChart", {
            type: "doughnut",
            data: {
                labels: charts.patientStats.labels,
                datasets: [{
                    data: charts.patientStats.values,
                    backgroundColor: ["#0f766e", "#4f46e5", "#b7791f", "#dc2626"]
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { position: "bottom" } }
            }
        });
    }

    if (charts.diseaseAnalysis) {
        makeChart("diseaseAnalysisChart", {
            type: "line",
            data: {
                labels: charts.diseaseAnalysis.labels,
                datasets: [{
                    label: "Cases",
                    data: charts.diseaseAnalysis.values,
                    borderColor: "#4f46e5",
                    backgroundColor: "rgba(79, 70, 229, 0.12)",
                    fill: true,
                    tension: 0.35
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true, precision: 0 } }
            }
        });
    }

    if (charts.doctorStatus) {
        makeChart("doctorStatusChart", {
            type: "doughnut",
            data: {
                labels: charts.doctorStatus.labels,
                datasets: [{
                    data: charts.doctorStatus.values,
                    backgroundColor: ["#b7791f", "#0f766e", "#15803d", "#dc2626"]
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { position: "bottom" } }
            }
        });
    }

    if (charts.patientBilling) {
        makeChart("patientBillingChart", {
            type: "bar",
            data: {
                labels: charts.patientBilling.labels,
                datasets: [{
                    label: "Bill Amount",
                    data: charts.patientBilling.values,
                    backgroundColor: "#4f46e5",
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } }
            }
        });
    }
});
