
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Kalimero</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --gray-light: #d4d4d8;
            --gray-medium: #a1a1aa;
            --gray-accent: #71717a;
            --dark: #0f0f0f;
            --dark-card: #1a1a1a;
            --zinc-200: #e4e4e7;
            --zinc-400: #a1a1aa;
            --zinc-500: #71717a;
            --zinc-900: #18181b;
        }

        body {
            font-family: 'Courier Prime', monospace;
            background: linear-gradient(135deg, var(--dark) 0%, #1a0f0a 100%);
            color: var(--zinc-200);
            min-height: 100vh;
            overflow-x: hidden;
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 1.5rem 3rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            background: rgba(15, 15, 15, 0.8);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(113, 113, 122, 0.2);
        }

        .logo {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 2rem;
            letter-spacing: 2px;
            background: linear-gradient(135deg, var(--gray-light), var(--gray-medium));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .nav-links {
            display: flex;
            gap: 2.5rem;
            list-style: none;
        }

        .nav-links a {
            color: var(--zinc-400);
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .nav-links a:hover {
            color: var(--gray-light);
        }

        /* Container */
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 2rem;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Page Title */
        .page-title {
            text-align: center;
            margin-bottom: 4rem;
            padding-top: 6rem;
        }

        .page-title h1 {
            font-family: 'Bebas Neue', sans-serif;
            font-size: clamp(3rem, 8vw, 6rem);
            letter-spacing: 3px;
            background: linear-gradient(135deg, var(--gray-light), var(--gray-medium));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
        }

        .page-title p {
            color: var(--zinc-400);
            font-size: 1.1rem;
            letter-spacing: 0.5px;
        }

        /* Social Grid */
        .social-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            width: 100%;
            max-width: 1200px;
            margin-top: 3rem;
        }

        /* Card */
        .card {
            position: relative;
            background: var(--dark-card);
            border-radius: 16px;
            overflow: hidden;
            transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
            border: 1px solid rgba(113, 113, 122, 0.2);
        }

        .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(212, 212, 216, 0.03), rgba(161, 161, 170, 0.03));
            opacity: 0;
            transition: opacity 0.7s ease;
        }

        .card:hover {
            transform: translateY(-8px);
            border-color: var(--gray-medium);
            box-shadow: 
                0 20px 60px rgba(161, 161, 170, 0.15),
                0 0 0 1px rgba(161, 161, 170, 0.2);
        }

        .card:hover::before {
            opacity: 1;
        }

        /* Card Link */
        .card-link {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            padding: 3rem 2rem;
            text-decoration: none;
            color: inherit;
            min-height: 280px;
            justify-content: center;
        }

        /* Gradient Line */
        .gradient-line {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 1px;
            height: 66%;
            background: linear-gradient(
                to bottom,
                var(--zinc-500),
                rgba(113, 113, 122, 0.5),
                transparent
            );
        }

        /* Icon Container */
        .icon-container {
            position: relative;
            z-index: 10;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid var(--zinc-500);
            border-radius: 50%;
            background: var(--zinc-900);
            transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .card:hover .icon-container {
            border-color: var(--zinc-200);
            background: var(--zinc-900);
            transform: scale(1.1);
            box-shadow: 0 0 30px rgba(161, 161, 170, 0.3);
        }

        .icon-container svg {
            width: 24px;
            height: 24px;
            color: var(--zinc-200);
            transition: color 0.3s ease;
        }

        .card:hover .icon-container svg {
            color: white;
        }

        /* Text Content */
        .card-content {
            position: relative;
            z-index: 10;
            text-align: center;
        }

        .card-handle {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--zinc-200);
            margin-bottom: 1rem;
            transition: color 0.3s ease;
            font-family: 'Bebas Neue', sans-serif;
            letter-spacing: 1px;
        }

        .card:hover .card-handle {
            color: white;
        }

        .card-label {
            font-size: 0.95rem;
            color: var(--zinc-400);
            transition: color 1s ease;
            letter-spacing: 0.5px;
        }

        .card:hover .card-label {
            color: var(--zinc-200);
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .card {
            animation: fadeInUp 0.6s ease-out backwards;
        }

        .card:nth-child(1) { animation-delay: 0.1s; }
        .card:nth-child(2) { animation-delay: 0.2s; }
        .card:nth-child(3) { animation-delay: 0.3s; }
        .card:nth-child(4) { animation-delay: 0.4s; }
        .card:nth-child(5) { animation-delay: 0.5s; }
        .card:nth-child(6) { animation-delay: 0.6s; }

        /* Responsive */
        @media (max-width: 768px) {
            nav {
                padding: 1rem 1.5rem;
            }

            .nav-links {
                gap: 1.5rem;
            }

            .social-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }

            .card-link {
                padding: 2rem 1.5rem;
                min-height: 220px;
            }

            .page-title {
                margin-bottom: 2rem;
                padding-top: 5rem;
            }
        }

        /* Background decoration */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 10% 20%, rgba(161, 161, 170, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(113, 113, 122, 0.05) 0%, transparent 50%);
            pointer-events: none;
            z-index: 0;
        }

        .container {
            position: relative;
            z-index: 1;
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav>
        <div class="logo"></div>
        <ul class="nav-links">
            <li><a href="https://kalimero.ink">Accueil</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>

    <!-- Main Container -->
    <div class="container">
        <div style="width: 100%;">
            <div class="page-title">
                <h1>Restons connectés</h1>
                <p>Retrouvez-moi sur mes différentes plateformes</p>
            </div>

            <!-- Social Grid -->
            <div class="social-grid">
                <!-- Art Majeur -->
                <div class="card">
                    <a href="https://www.artmajeur.com/olivier-kalimero-quemere" target="_blank" class="card-link">
                        <span class="gradient-line"></span>
                        <div class="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                                <line x1="3" x2="21" y1="9" y2="9"/>
                                <line x1="9" x2="9" y1="21" y2="9"/>
                            </svg>
                        </div>
                        <div class="card-content">
                            <div class="card-handle">@olivier-kalimero-quemere</div>
                            <div class="card-label">Art Majeur - Portfolio artistique</div>
                        </div>
                    </a>
                </div>

                <!-- Instagram -->
                <div class="card">
                    <a href="https://instagram.com/kalimero_____666" target="_blank" class="card-link">
                        <span class="gradient-line"></span>
                        <div class="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                            </svg>
                        </div>
                        <div class="card-content">
                            <div class="card-handle">@kalimero_____666</div>
                            <div class="card-label">Instagram</div>
                        </div>
                    </a>
                </div>

                <!-- Facebook -->
                <div class="card">
                    <a href="https://facebook.com/kalimero.officiel" target="_blank" class="card-link">
                        <span class="gradient-line"></span>
                        <div class="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                            </svg>
                        </div>
                        <div class="card-content">
                            <div class="card-handle">@kalimero.officiel</div>
                            <div class="card-label">Facebook</div>
                        </div>
                    </a>
                </div>

                <!-- Ko-Fi -->
                <div class="card">
                    <a href="https://ko-fi.com/kalimero666" target="_blank" class="card-link">
                        <span class="gradient-line"></span>
                        <div class="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
                                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
                                <line x1="6" x2="6" y1="2" y2="4"/>
                                <line x1="10" x2="10" y1="2" y2="4"/>
                                <line x1="14" x2="14" y1="2" y2="4"/>
                            </svg>
                        </div>
                        <div class="card-content">
                            <div class="card-handle">@kalimero666</div>
                            <div class="card-label">Ko-Fi</div>
                        </div>
                    </a>
                </div>

                <!-- Twitter -->
                <div class="card">
                    <a href="https://twitter.com/kalimero_666_" target="_blank" class="card-link">
                        <span class="gradient-line"></span>
                        <div class="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                            </svg>
                        </div>
                        <div class="card-content">
                            <div class="card-handle">@kalimero_666_</div>
                            <div class="card-label">Twitter</div>
                        </div>
                    </a>
                </div>

                <!-- Email -->
                <div class="card">
                    <a href="mailto:kalimero@ik.me" class="card-link">
                        <span class="gradient-line"></span>
                        <div class="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect width="20" height="16" x="2" y="4" rx="2"/>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                            </svg>
                        </div>
                        <div class="card-content">
                            <div class="card-handle">kalimero@ik.me</div>
                            <div class="card-label">Email</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

Voilà le code HTML complet, prêt à être copié-collé !