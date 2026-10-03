<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>AdvertiseByWeb | Digital Marketing Agency</title>
    <meta name="description"
          content="AdvertiseByWeb helps businesses grow with SEO, Google Ads, social media marketing and professional web development.">

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            color: #172033;
            background: #ffffff;
            line-height: 1.6;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: auto;
        }

        /* ================= HEADER ================= */

        header {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid #eee;
        }

        nav {
            height: 75px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 25px;
            font-weight: 800;
            color: #c0941b;
        }

        .logo span {
            color: #111827;
        }

        .nav-links {
            display: flex;
            gap: 30px;
            list-style: none;
        }

        .nav-links a {
            font-weight: 600;
            color: #374151;
            transition: .3s;
        }

        .nav-links a:hover {
            color: #2563eb;
        }

        .menu-btn {
            display: none;
            font-size: 28px;
            cursor: pointer;
        }

        /* ================= HERO ================= */

        .hero {
            min-height: 100vh;
            padding-top: 150px;
            display: flex;
            align-items: center;
            background:
                radial-gradient(circle at 80% 20%, #dbeafe, transparent 30%),
                linear-gradient(135deg, #f8fbff, #ffffff);
        }

        .hero-content {
            display: grid;
            grid-template-columns: 1.1fr .9fr;
            align-items: center;
            gap: 50px;
        }

        .hero-text h1 {
            font-size: clamp(42px, 6vw, 72px);
            line-height: 1.05;
            margin-bottom: 25px;
            color: #111827;
        }

        .hero-text h1 span {
            color: #2563eb;
        }

        .hero-text p {
            font-size: 19px;
            color: #64748b;
            max-width: 600px;
            margin-bottom: 35px;
        }

        .buttons {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
        }

        .btn {
            display: inline-block;
            padding: 14px 25px;
            border-radius: 10px;
            font-weight: 700;
            transition: .3s;
        }

        .btn-primary {
            background: #2563eb;
            color: white;
        }

        .btn-primary:hover {
            background: #1d4ed8;
            transform: translateY(-2px);
        }

        .btn-outline {
            border: 2px solid #2563eb;
            color: #2563eb;
        }

        .btn-outline:hover {
            background: #2563eb;
            color: white;
        }

        /* Hero Card */

        .hero-card {
            background: white;
            border-radius: 25px;
            padding: 35px;
            box-shadow: 0 25px 70px rgba(37,99,235,.15);
            border: 1px solid #e5e7eb;
        }

        .hero-card h3 {
            font-size: 24px;
            margin-bottom: 25px;
        }

        .growth {
            display: flex;
            justify-content: space-between;
            margin: 20px 0;
        }

        .growth strong {
            font-size: 30px;
            color: #2563eb;
        }

        .chart {
            height: 150px;
            display: flex;
            align-items: end;
            gap: 12px;
            padding-top: 20px;
        }

        .bar {
            flex: 1;
            background: linear-gradient(#2563eb, #60a5fa);
            border-radius: 7px 7px 0 0;
        }

        .bar:nth-child(1) { height: 35%; }
        .bar:nth-child(2) { height: 50%; }
        .bar:nth-child(3) { height: 45%; }
        .bar:nth-child(4) { height: 70%; }
        .bar:nth-child(5) { height: 82%; }
        .bar:nth-child(6) { height: 100%; }

        /* ================= GENERAL ================= */

        section {
            padding: 100px 0;
        }

        .section-title {
            text-align: center;
            margin-bottom: 55px;
        }

        .section-title h2 {
            font-size: 42px;
            margin-bottom: 12px;
            color: #111827;
        }

        .section-title p {
            color: #64748b;
            max-width: 650px;
            margin: auto;
        }

        /* ================= SERVICES ================= */

        .services {
            background: #f8fafc;
        }

        .service-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 22px;
        }

        .service-card {
            background: white;
            padding: 30px;
            border-radius: 18px;
            border: 1px solid #e5e7eb;
            transition: .3s;
        }

        .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,.08);
        }

        .service-icon {
            width: 60px;
            height: 60px;
            display: grid;
            place-items: center;
            border-radius: 15px;
            background: #dbeafe;
            font-size: 28px;
            margin-bottom: 20px;
        }

        .service-card h3 {
            margin-bottom: 10px;
        }

        .service-card p {
            color: #64748b;
        }

        /* ================= ABOUT ================= */

        .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 70px;
            align-items: center;
        }

        .about-text h2 {
            font-size: 42px;
            margin-bottom: 20px;
        }

        .about-text p {
            color: #64748b;
            margin-bottom: 20px;
        }

        .features {
            list-style: none;
        }

        .features li {
            margin: 14px 0;
            font-weight: 600;
        }

        .features li::before {
            content: "✓";
            color: #2563eb;
            font-weight: bold;
            margin-right: 10px;
        }

        .about-box {
            background: linear-gradient(135deg, #2563eb, #4f46e5);
            color: white;
            padding: 50px;
            border-radius: 25px;
        }

        .about-box h3 {
            font-size: 30px;
            margin-bottom: 20px;
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
            margin-top: 30px;
        }

        .stat strong {
            display: block;
            font-size: 36px;
        }

        /* ================= PROCESS ================= */

        .process {
            background: #f8fafc;
        }

        .process-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }

        .process-card {
            text-align: center;
            padding: 30px;
        }

        .number {
            width: 60px;
            height: 60px;
            margin: auto auto 20px;
            border-radius: 50%;
            background: #2563eb;
            color: white;
            display: grid;
            place-items: center;
            font-size: 22px;
            font-weight: bold;
        }

        /* ================= PRICING ================= */

        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
        }

        .price-card {
            border: 1px solid #e5e7eb;
            border-radius: 20px;
            padding: 35px;
            background: white;
        }

        .price-card.featured {
            border: 2px solid #2563eb;
            transform: scale(1.03);
        }

        .price-card h3 {
            font-size: 24px;
        }

        .price {
            font-size: 42px;
            font-weight: bold;
            margin: 20px 0;
            color: #2563eb;
        }

        .price-card ul {
            list-style: none;
            margin: 25px 0;
        }

        .price-card li {
            padding: 8px 0;
        }

        /* ================= TESTIMONIAL ================= */

        .testimonials {
            background: #f8fafc;
        }

        .testimonial-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
        }

        .testimonial {
            background: white;
            padding: 30px;
            border-radius: 18px;
            border: 1px solid #e5e7eb;
        }

        .stars {
            color: #f59e0b;
            font-size: 20px;
            margin-bottom: 15px;
        }

        .testimonial p {
            color: #64748b;
            margin-bottom: 20px;
        }

        .client {
            font-weight: bold;
        }

        /* ================= CONTACT ================= */

        .contact {
            background: #be4dac;
            color: white;
        }

        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
        }

        .contact h2 {
            font-size: 42px;
            margin-bottom: 20px;
        }

        .contact p {
            color: #cbd5e1;
        }

        .contact-info {
            margin-top: 30px;
        }

        .contact-info div {
            margin: 15px 0;
        }

        form {
            background: white;
            padding: 30px;
            border-radius: 20px;
        }

        input,
        textarea,
        select {
            width: 100%;
            padding: 14px;
            margin-bottom: 15px;
            border: 1px solid #95a1b3;
            border-radius: 8px;
            font-family: inherit;
        }

        textarea {
            min-height: 130px;
            resize: vertical;
        }

        form button {
            width: 100%;
            border: none;
            cursor: pointer;
            font-size: 16px;
        }

        /* ================= FOOTER ================= */

        footer {
            background: #0b1120;
            color: #abc573;
            padding: 25px 0;
            text-align: center;
        }

        footer strong {
            color: rgb(171, 85, 85);
        }

        /* ================= WHATSAPP ================= */

        .whatsapp {
            position: fixed;
            right: 25px;
            bottom: 25px;
            width: 58px;
            height: 58px;
            border-radius: 50%;
            background: #25D366;
            color: white;
            display: grid;
            place-items: center;
            font-size: 27px;
            z-index: 999;
            box-shadow: 0 8px 25px rgba(0,0,0,.2);
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 900px) {

            .hero-content,
            .about-grid,
            .contact-grid {
                grid-template-columns: 1fr;
            }

            .service-grid,
            .process-grid {
                grid-template-columns: repeat(2, 1fr);
            }

            .pricing-grid,
            .testimonial-grid {
                grid-template-columns: 1fr;
            }

            .price-card.featured {
                transform: none;
            }

            .nav-links {
                position: absolute;
                top: 75px;
                left: 0;
                width: 100%;
                background: rgb(219, 123, 123);
                flex-direction: column;
                padding: 25px;
                display: none;
                border-bottom: 1px solid #eee;
            }

            .nav-links.active {
                display: flex;
            }

            .menu-btn {
                display: block;
            }
        }

        @media (max-width: 600px) {

            .service-grid,
            .process-grid {
                grid-template-columns: 1fr;
            }

            section {
                padding: 70px 0;
            }

            .hero {
                padding-top: 120px;
            }

            .hero-card {
                padding: 25px;
            }

            .section-title h2,
            .about-text h2,
            .contact h2 {
                font-size: 34px;
            }
        }
    </style>
</head>

<body>

<!-- ================= HEADER ================= -->

<header>
    <div class="container">
        <nav>
            <a href="#home" class="logo">
                Advertise<span>ByWeb</span>
            </a>

            <div class="menu-btn" onclick="toggleMenu()">☰</div>

            <ul class="nav-links" id="navLinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
</header>


<!-- ================= HERO ================= -->

<section class="hero" id="home">

    <div class="container hero-content">

        <div class="hero-text">

            <p style="color:#7e8fb3;font-weight:bold;">
                🚀 DIGITAL MARKETING AGENCY
            </p>

            <h1>
                Grow Your Business
                <span>With Digital Marketing.</span>
            </h1>

            <p>
                AdvertiseByWeb helps businesses build a powerful online
                presence, reach more customers and generate measurable growth.
            </p>

            <div class="buttons">
                <a href="#contact" class="btn btn-primary">
                    Get Free Consultation
                </a>

                <a href="#services" class="btn btn-outline">
                    Explore Services
                </a>
            </div>

        </div>


        <div class="hero-card">

            <h3>📈 Your Growth Dashboard</h3>

            <div class="growth">
                <div>
                    <small>Monthly Growth</small>
                    <strong>+127%</strong>
                </div>

                <div>
                    <small>Leads</small>
                    <strong>2.8K</strong>
                </div>
            </div>

            <div class="chart">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>

        </div>

    </div>

</section>


<!-- ================= SERVICES ================= -->

<section class="services" id="services">

    <div class="container">

        <div class="section-title">
            <h2>Our Digital Marketing Services</h2>
            <p>
                Everything you need to build, grow and scale your online business.
            </p>
        </div>

        <div class="service-grid">

            <div class="service-card">
                <div class="service-icon">🔎</div>
                <h3>SEO</h3>
                <p>
                    Improve your Google rankings and attract high-quality
                    organic traffic.
                </p>
            </div>

            <div class="service-card">
                <div class="service-icon">📢</div>
                <h3>Google Ads</h3>
                <p>
                    Generate targeted leads and sales through high-performance
                    paid advertising campaigns.
                </p>
            </div>

            <div class="service-card">
                <div class="service-icon">📱</div>
                <h3>Social Media</h3>
                <p>
                    Build your brand and engage customers across Instagram,
                    Facebook and other platforms.
                </p>
            </div>

            <div class="service-card">
                <div class="service-icon">💻</div>
                <h3>Web Development</h3>
                <p>
                    Create fast, modern and conversion-focused business
                    websites.
                </p>
            </div>

        </div>

    </div>

</section>


<!-- ================= ABOUT ================= -->

<section id="about">

    <div class="container about-grid">

        <div class="about-text">

            <h2>We Turn Clicks Into Customers.</h2>

            <p>
                At <strong>AdvertiseByWeb</strong>, we combine creativity,
                technology and digital marketing strategy to help businesses
                grow online.
            </p>

            <p>
                Our goal is simple — create marketing campaigns that deliver
                real business results.
            </p>

            <ul class="features">
                <li>Data-driven marketing strategy</li>
                <li>Transparent reporting</li>
                <li>Conversion-focused campaigns</li>
                <li>Dedicated support</li>
            </ul>

        </div>


        <div class="about-box">

            <h3>Why AdvertiseByWeb?</h3>

            <p>
                We focus on measurable results instead of vanity metrics.
            </p>

            <div class="stats">

                <div class="stat">
                    <strong>100+</strong>
                    <span>Projects</span>
                </div>

                <div class="stat">
                    <strong>50+</strong>
                    <span>Happy Clients</span>
                </div>

                <div class="stat">
                    <strong>5+</strong>
                    <span>Years Experience</span>
                </div>

                <div class="stat">
                    <strong>24/7</strong>
                    <span>Support</span>
                </div>

            </div>

        </div>

    </div>

</section>


<!-- ================= PROCESS ================= -->

<section class="process">

    <div class="container">

        <div class="section-title">
            <h2>How We Work</h2>
            <p>
                A simple and transparent process designed around your goals.
            </p>
        </div>

        <div class="process-grid">

            <div class="process-card">
                <div class="number">01</div>
                <h3>Discover</h3>
                <p>We understand your business and target audience.</p>
            </div>

            <div class="process-card">
                <div class="number">02</div>
                <h3>Strategy</h3>
                <p>We create a customized digital marketing strategy.</p>
            </div>

            <div class="process-card">
                <div class="number">03</div>
                <h3>Execute</h3>
                <p>Our team launches and manages your campaigns.</p>
            </div>

            <div class="process-card">
                <div class="number">04</div>
                <h3>Grow</h3>
                <p>We optimize campaigns and scale what works.</p>
            </div>

        </div>

    </div>

</section>


<!-- ================= PRICING ================= -->

<section id="pricing">

    <div class="container">

        <div class="section-title">
            <h2>Simple Pricing</h2>
            <p>Choose a plan that fits your business.</p>
        </div>

        <div class="pricing-grid">

            <div class="price-card">

                <h3>Starter</h3>

                <div class="price">₹1,999</div>

                <p>Perfect for small businesses.</p>

                <ul>
                    <li>✓ SEO Basic</li>
                    <li>✓ Social Media</li>
                    <li>✓ Monthly Report</li>
                    <li>✓ Email Support</li>
                </ul>

                <a href="#contact" class="btn btn-outline">
                    Get Started
                </a>

            </div>


            <div class="price-card featured">

                <h3>Growth</h3>

                <div class="price">₹3,999</div>

                <p>For businesses ready to grow.</p>

                <ul>
                    <li>✓ Advanced SEO</li>
                    <li>✓ Google Ads</li>
                    <li>✓ Social Media Marketing</li>
                    <li>✓ Conversion Optimization</li>
                </ul>

                <a href="#contact" class="btn btn-primary">
                    Get Started
                </a>

            </div>


            <div class="price-card">

                <h3>Premium</h3>

                <div class="price">₹4,999</div>

                <p>Complete digital marketing.</p>

                <ul>
                    <li>✓ Full SEO</li>
                    <li>✓ Google & Meta Ads</li>
                    <li>✓ Website Optimization</li>
                    <li>✓ Dedicated Manager</li>
                </ul>

                <a href="#contact" class="btn btn-outline">
                    Get Started
                </a>

            </div>

        </div>

    </div>

<!-- CORNER AD -->
<div class="corner-ad" id="cornerAd">

    <button class="close-ad" onclick="closeAd()">×</button>

    <div class="ad-label">ADVERTISEMENT</div>

    <div class="ad-content">
        <span class="ad-icon">📢</span>

        <div>
            <h4>Your Advertisement</h4>
            <p>Promote your business here</p>
        </div>
    </div>

    <a href="#" class="ad-button">
        Learn More →
    </a>

</div>


<!-- CORNER AD -->
<div class="corner-ad" id="cornerAd">

    <button class="close-ad" onclick="closeAd()"> </button>

    <div class="ad-label">ADVERTISEMENT</div>

    <div class="ad-content">
        <span class="ad-icon">📢</span>

        <div>
            <h4>Your Advertisement</h4>
            <p>Promote your business here</p>
        </div>
    </div>

    <a href="#" class="ad-button">
        Learn More →
    </a>

</div>

</section>




<!-- ================= TESTIMONIALS ================= -->

<section class="testimonials">

    <div class="container">

        <div class="section-title">
            <h2>What Our Clients Say</h2>
            <p>Real relationships. Real business growth.</p>
        </div>

        <div class="testimonial-grid">

            <div class="testimonial">
                <div class="stars">★★★★★</div>
                <p>
                    "AdvertiseByWeb helped us increase our online leads
                    significantly. Their team is professional and responsive."
                </p>
                <div class="client">— Rahul khatal</div>
            </div>

            <div class="testimonial">
                <div class="stars">★★★★★</div>
                <p>
                    "Our website and social media presence improved
                    tremendously. Great communication and strategy."
                </p>
                <div class="client">— kapil </div>
            </div>

            <div class="testimonial">
                <div class="stars">★★★★★</div>
                <p>
                    "The team understands digital marketing and focuses on
                    actual business results."
                </p>
                <div class="client">— pratik </div>
            </div>

        </div>

    </div>

</section>


<!-- ================= CONTACT ================= -->

<section class="contact" id="contact">

    <div class="container contact-grid">

        <div>

            <h2>Let's Grow Your Business.</h2>

            <p>
                Have a project in mind? Talk to the AdvertiseByWeb team
                today and get a free consultation.
            </p>

            <div class="contact-info">

                <div>📧 @advertisebyweb.com</div>

                <div>📞 +91 9142299769</div>

                <div>📍 India</div>

            </div>

        </div>


        <form onsubmit="submitForm(event)">

            <input
                type="text"
                placeholder="Your Name"
                required
            >

            <input
                type="email"
                placeholder="Email Address"
                required
            >

            <input
                type="tel"
                placeholder="Phone Number"
            >

            <select required>
                <option value="">Select Service</option>
                <option>SEO</option>
                <option>Google Ads</option>
                <option>Social Media Marketing</option>
                <option>Website Development</option>
            </select>

            <textarea
                placeholder="Tell us about your project..."
                required
            ></textarea>

            <button class="btn btn-primary">
                Send Enquiry
            </button>

        </form>

    </div>

</section>


<!-- ================= FOOTER ================= -->

<footer>

    <div class="container">

        <p>
            © <span id="year"></span>
            <strong>AdvertiseByWeb</strong>.
            All Rights Reserved.
        </p>

    </div>

</footer>


<!-- ================= WHATSAPP ================= -->

<a
    class="whatsapp"
    href="https://wa.me/9142299769"
    target="_blank"
    title="Chat on WhatsApp"
>
    💬
</a>


<!-- ================= JAVASCRIPT ================= -->

<script>

    function toggleMenu() {
        document
            .getElementById("navLinks")
            .classList.toggle("active");
    }


    document
        .querySelectorAll(".nav-links a")
        .forEach(function(link) {

            link.addEventListener("click", function() {

                document
                    .getElementById("navLinks")
                    .classList.remove("active");

            });

        });


    function submitForm(event) {

        event.preventDefault();

        alert(
            "Thank you! Your enquiry has been received. " +
            "AdvertiseByWeb will contact you soon."
        );

        event.target.reset();
    }


    document.getElementById("year").textContent =
        new Date().getFullYear();

</script>

</body>
</html>
