const charts = document.querySelector(".performance__charts")

    const createChart = (name, percentage, description) => {
        let calcPercent = (540 * (1 - (percentage / 100)))

        // create figure el
        const figure = document.createElement('figure')
        figure.classList.add("chart");
        figure.setAttribute("data-percent", percentage);
        figure.style.strokeDashoffset = calcPercent

        // create svg circle
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        // create svg ring
        const ring = document.createElementNS('http://www.w3.org/2000/svg', "circle")
        ring.setAttributeNS(null, 'class', "ring")
        ring.setAttributeNS(null, 'cx', '95')
        ring.setAttributeNS(null, 'cy', '95')
        ring.setAttributeNS(null, 'r', '85')

        // create number
        const num = document.createElement('span')
        num.classList.add('chart--num')
        num.textContent = percentage

        // create caption
        const figCap = document.createElement('figcaption')
        figCap.textContent = name
        figCap.classList.add('chart--caption')

        // combine elements
        svg.appendChild(ring)
        figure.appendChild(svg)
        figure.appendChild(num)
        figure.appendChild(figCap)
        charts.appendChild(figure)

        // animation
        figure.animate([
            // keyframes
            {
                strokeDashoffset: 540
            },
            {
                strokeDashoffset: calcPercent
            }
        ], {
            // timing options
            duration: 2000,
        });
    }

    const chartData = {
        Speed: 89,
        Performance: 95,
        Accessibility: 55,
    }

    Object.entries(chartData).forEach(
        ([key, value]) => createChart(key, value)
    );
