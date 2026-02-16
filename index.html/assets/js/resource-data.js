const resourceData = {
    "scaling-1m-users": {
        title: "Scaling to 1 Million Users: The ACME Corp Story",
        subtitle: "How we leveraged Nexus Cloud to handle our biggest launch ever.",
        category: "Case Study",
        date: "October 12, 2026",
        readTime: "8 min read",
        author: {
            name: "Sarah Jenks",
            role: "VP of Engineering at ACME",
            image: "https://picsum.photos/id/64/100/100" // Portrait
        },
        heroImage: "https://picsum.photos/id/4/1200/600",
        content: `
            <p class="text-large text-secondary mb-l">
                When ACME Corp was preparing for their global product launch, they knew their legacy infrastructure wouldn't hold up. 
                They needed a solution that could scale instantly, maintain 99.999% uptime, and provide real-time analytics.
                Enter Nexus Cloud.
            </p>
            
            <h2 class="mb-m">The Challenge</h2>
            <p class="mb-l">
                ACME's previous launch had suffered from 4 hours of downtime due to database bottlenecks. 
                "We were flying blind," says Sarah Jenks. "We didn't know if it was the network, the database, or the application code."
                For this launch, they expected 10x the traffic—over 1 million concurrent users in the first hour.
            </p>

            <h2 class="mb-m">The Solution</h2>
            <p class="mb-l">
                 ACME migrated their core services to <strong>Nexus Compute Engine</strong> and utilized <strong>Nexus Auto-Scaler</strong>.
                 The migration took less than 2 weeks thanks to Nexus's seamless improved container support.
            </p>
            <blockquote style="border-left: 4px solid var(--color-primary); padding-left: 20px; margin: 40px 0; font-style: italic; font-size: 1.5rem; color: var(--color-text);">
                "Nexus didn't just handle the traffic; it didn't even blink. We watched the graphs climb to 1.2 million users and the latency stayed flat."
            </blockquote>

            <h2 class="mb-m">The Results</h2>
            <ul class="mb-l" style="list-style: disc; padding-left: 20px; line-height: 1.8;">
                <li><strong>Zero Downtime:</strong> 100% availability during the 24-hour launch window.</li>
                <li><strong>50% Cost Savings:</strong> Dynamic scaling meant they only paid for resources they used.</li>
                <li><strong>Real-time Visibility:</strong> Nexus Analytics provided instant feedback on user behavior.</li>
            </ul>

            <p>
                Ready to separate your infrastructure from your growth constraints? <a href="contact.html" style="color: var(--color-primary); text-decoration: underline;">Contact our sales team</a> today.
            </p>
        `
    },
    "future-of-security": {
        title: "The Future of Enterprise Security is Zero Trust",
        subtitle: "Why the castle-and-moat approach is dead, and what replaces it.",
        category: "Security",
        date: "September 28, 2026",
        readTime: "6 min read",
        author: {
            name: "David Chen",
            role: "Chief Security Officer",
            image: "https://picsum.photos/id/91/100/100"
        },
        heroImage: "https://picsum.photos/id/60/1200/600",
        content: `
            <p class="text-large text-secondary mb-l">
                In the modern distributed workplace, the perimeter is no longer the office firewall. It's the user's identity. 
                Zero Trust isn't just a buzzword; it's a necessary architectural shift.
            </p>

            <h2 class="mb-m">Trust Nothing, Verify Everything</h2>
            <p class="mb-l">
                Traditional security models assumed that everything inside the network was safe. 
                Zero Trust assumes that the network is always hostile. 
                Every request—whether from a remote worker in a coffee shop or a server in your data center—must be authenticated, authorized, and encrypted.
            </p>

            <h2 class="mb-m">Key Principles</h2>
            <div class="grid grid-2 gap-m mb-l">
                <div class="card p-m">
                    <h3 class="text-large font-bold mb-s">Least Privilege</h3>
                    <p class="text-secondary">Users are given only the access they strictly need to do their jobs, and nothing more.</p>
                </div>
                <div class="card p-m">
                    <h3 class="text-large font-bold mb-s">Micro-segmentation</h3>
                    <p class="text-secondary">Workloads are isolated from one another to prevent lateral movement of threats.</p>
                </div>
            </div>

            <p>
                Implementing Zero Trust doesn't have to be a rip-and-replace operation. 
                With <strong>Nexus Identity</strong>, you can layer continuous verification on top of your existing infrastructure.
            </p>
        `
    },
    "remote-workflows": {
        title: "Mastering Remote Workflows",
        subtitle: "5 essential strategies to keep your distributed team synchronized.",
        category: "Productivity",
        date: "September 15, 2026",
        readTime: "5 min read",
        author: {
            name: "Elena Rodriguez",
            role: "Head of Remote at Nexus",
            image: "https://picsum.photos/id/65/100/100"
        },
        heroImage: "https://picsum.photos/id/180/1200/600",
        content: `
            <p class="text-large text-secondary mb-l">
                Remote work is no longer a perk; it's a skill. And like any skill, it requires practice, tooling, and the right mindset to master.
            </p>

            <h2 class="mb-m">1. Async First</h2>
            <p class="mb-l">
                Stop trying to replicate the office online. Prioritize written communication over meetings. 
                Tools like <strong>Nexus Workspace</strong> allow for threaded, searchable discussions that respect everyone's time zones.
            </p>

            <h2 class="mb-m">2. Documentation as Culture</h2>
            <p class="mb-l">
                If it's not written down, it didn't happen. Remote teams thrive on documentation. 
                Create a "Single Source of Truth" for every project.
            </p>

            <h2 class="mb-m">3. The Virtual Watercooler</h2>
            <p class="mb-l">
                Intentional social time is crucial. We use "Coffee Roulette" bots to pair random team members for 15-minute non-work chats.
            </p>
        `
    },
    "data-driven": {
        title: "Data-Driven Decision Making",
        subtitle: "Turning raw analytics into actionable success stories.",
        category: "Data",
        date: "August 30, 2026",
        readTime: "7 min read",
        author: {
            name: "Marcus Johnson",
            role: "Director of Analytics",
            image: "https://picsum.photos/id/66/100/100"
        },
        heroImage: "https://picsum.photos/id/20/1200/600",
        content: `
            <p class="text-large text-secondary mb-l">
                Data is the new oil, but unrefined oil is useless. The competitive advantage belongs to companies that can refine their data into insight.
            </p>

            <h2 class="mb-m">The Data Maturity Curve</h2>
            <p class="mb-l">
                Most companies are stuck in the "Descriptive" phase—looking at what happened. 
                <strong>Nexus Analytics</strong> pushes you into the "Prescriptive" phase—telling you what to do next.
            </p>

            <h2 class="mb-m">Breaking Silos</h2>
            <p class="mb-l">
                Marketing data lives in one tool, sales data in another, and product usage in a third. 
                To make real decisions, you need a unified data warehouse.
            </p>
        `
    }
};

// Function to get query param
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Render dynamic content
document.addEventListener('DOMContentLoaded', () => {
    const resourceId = getQueryParam('id');
    const container = document.getElementById('resource-content');

    // Only run if we are on the detail page and have a container
    if (container && resourceId && resourceData[resourceId]) {
        const data = resourceData[resourceId];

        // Populate Meta
        document.title = `${data.title} - Nexus Resources`;

        // Populate DOM
        // We will assume the HTML structure has IDs for these elements
        const inject = (id, html) => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = html;
        };
        const injectSrc = (id, src) => {
            const el = document.getElementById(id);
            if (el) el.src = src;
        };

        inject('res-category', data.category);
        inject('res-date', `${data.date} • ${data.readTime}`);
        inject('res-title', data.title);
        inject('res-subtitle', data.subtitle);
        injectSrc('res-hero', data.heroImage);

        injectSrc('res-author-img', data.author.image);
        inject('res-author-name', data.author.name);
        inject('res-author-role', data.author.role);

        inject('res-body', data.content);

    } else if (container && !resourceData[resourceId]) {
        // Handle 404
        container.innerHTML = `
            <div class="text-center py-xl">
                <h1 class="mb-m">Resource Not Found</h1>
                <a href="resources.html" class="btn btn-primary">Back to Resources</a>
            </div>
        `;
    }
});
