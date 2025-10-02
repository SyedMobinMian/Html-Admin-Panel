  // Document ready function to ensure DOM is fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Get sidebar and toggle elements
            const sidebar = document.getElementById('sidebar');
            const sidebarToggle = document.getElementById('sidebarToggle');
            const mobileSidebarToggle = document.getElementById('mobileSidebarToggle');
            
            // Check localStorage for sidebar state
            const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
            if (isCollapsed) {
                sidebar.classList.add('collapsed');
            }
            
            // Desktop toggle button functionality
            if (sidebarToggle) {
                sidebarToggle.addEventListener('click', function() {
                    // Toggle collapsed class on sidebar
                    sidebar.classList.toggle('collapsed');
                    
                    // Save state to localStorage
                    localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
                    
                    // Change icon based on state
                    const icon = this.querySelector('i');
                    if (sidebar.classList.contains('collapsed')) {
                        icon.classList.remove('fa-angle-left');
                        icon.classList.add('fa-angle-right');
                    } else {
                        icon.classList.remove('fa-angle-right');
                        icon.classList.add('fa-angle-left');
                    }
                });
            }
            
            // Mobile toggle button functionality
            if (mobileSidebarToggle) {
                mobileSidebarToggle.addEventListener('click', function() {
                    sidebar.classList.toggle('show');
                });
            }
            
            // Close sidebar when clicking outside on mobile
            document.addEventListener('click', function(event) {
                if (window.innerWidth < 768) {
                    const isClickInsideSidebar = sidebar.contains(event.target);
                    const isClickOnMobileToggle = mobileSidebarToggle.contains(event.target);
                    
                    if (!isClickInsideSidebar && !isClickOnMobileToggle) {
                        sidebar.classList.remove('show');
                    }
                }
            });
            
            // Initialize the toggle button icon based on initial state
            if (sidebarToggle) {
                const icon = sidebarToggle.querySelector('i');
                if (sidebar.classList.contains('collapsed')) {
                    icon.classList.remove('fa-angle-left');
                    icon.classList.add('fa-angle-right');
                } else {
                    icon.classList.remove('fa-angle-right');
                    icon.classList.add('fa-angle-left');
                }
            }
            
            // Demo chart data - Area Chart
            const areaChartCtx = document.getElementById('myAreaChart');
            if (areaChartCtx) {
                new Chart(areaChartCtx, {
                    type: 'line',
                    data: {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        datasets: [{
                            label: "Earnings",
                            lineTension: 0.3,
                            backgroundColor: "rgba(78, 115, 223, 0.05)",
                            borderColor: "rgba(78, 115, 223, 1)",
                            pointRadius: 3,
                            pointBackgroundColor: "rgba(78, 115, 223, 1)",
                            pointBorderColor: "rgba(78, 115, 223, 1)",
                            pointHoverRadius: 3,
                            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                            pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                            pointHitRadius: 10,
                            pointBorderWidth: 2,
                            data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
                        }],
                    },
                    options: {
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            x: {
                                grid: {
                                    display: false
                                }
                            },
                            y: {
                                ticks: {
                                    callback: function(value) {
                                        return '$' + value.toLocaleString();
                                    }
                                },
                                grid: {
                                    color: "rgba(0, 0, 0, .05)",
                                }
                            }
                        }
                    }
                });
            }
            
            // Demo chart data - Pie Chart
            const pieChartCtx = document.getElementById('myPieChart');
            if (pieChartCtx) {
                new Chart(pieChartCtx, {
                    type: 'doughnut',
                    data: {
                        labels: ["Direct", "Social", "Referral"],
                        datasets: [{
                            data: [55, 30, 15],
                            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
                            hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
                            hoverBorderColor: "rgba(234, 236, 244, 1)",
                        }],
                    },
                    options: {
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        cutout: '80%',
                    },
                });
            }
            
            // Initialize tooltips
            const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });
            
            // Initialize popovers
            const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
            const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
                return new bootstrap.Popover(popoverTriggerEl);
            });
        });