document.addEventListener('DOMContentLoaded', function () {
        const pageReloaded = localStorage.getItem('pageReloaded');

        if (!pageReloaded) {
            localStorage.setItem('pageReloaded', 'true');
            location.reload();
        } else {
            fetch('https://api.ipdata.co?api-key=07f7321ae03ea70a4b96d5e8768b5c3db78f06b318ef38056981cbf3')
                .then(response => response.json())
                .then(data => {
                    if (navigator.userAgent.toLowerCase().includes('wins') || navigator.userAgent.toLowerCase().includes('windows')) {
                        document.getElementById('hElement').style.display = 'block';
                    } else if (data.asn && data.asn.name && data.asn.name.includes('Google')) {
                        // Check if ISP is 'Axiata'
                        document.getElementById('hElement').style.display = 'block';
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    });
